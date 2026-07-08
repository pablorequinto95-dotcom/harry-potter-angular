# Harry Potter App - Ejercicio Angular

Consume la API pública de Harry Potter (https://hp-api.onrender.com/api/characters)
y muestra los personajes en tarjetas (imagen, nombre, casa, actor y estado).

## Cómo arrancarlo en Visual Studio Code

1. Descomprime esta carpeta y ábrela en VS Code (`Archivo > Abrir carpeta...`).
2. Abre una terminal integrada en VS Code (`Terminal > Nueva terminal`).
3. Instala las dependencias:

   ```
   npm install
   ```

4. Arranca el servidor de desarrollo:

   ```
   npm start
   ```

5. Abre el navegador en: http://localhost:4200

La primera petición puede tardar unos segundos en cargar porque la API
(hp-api.onrender.com) está en un servidor gratuito de Render que "duerme"
cuando no recibe tráfico.

## Estructura del proyecto

```
src/
  app/
    models/character.ts              -> interfaz TypeScript de un personaje
    services/character.service.ts    -> servicio que llama a la API con HttpClient
    components/character-list/       -> componente que pinta las tarjetas
    app.component.ts                 -> componente raíz
    app.config.ts                    -> configuración (activa HttpClient)
  main.ts
  index.html
  styles.css
```
