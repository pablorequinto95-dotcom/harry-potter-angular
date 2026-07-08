import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];
  cargando = true;
  error = false;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe({
      next: (data) => {
        console.log('Personajes recibidos:', data);
        this.characters = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al obtener los personajes', err);
        this.error = true;
        this.cargando = false;
      }
    });
  }
}
