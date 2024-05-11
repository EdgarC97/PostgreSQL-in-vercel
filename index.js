// Carga las variables de entorno desde el archivo .env en tu proyecto
require('dotenv').config();

// Requiere el archivo database.js, que se encarga de establecer la conexión a PostgreSQL
require('./database');

// Requiere el módulo Express, que te permite crear tu servidor web
const express = require('express');

// Crea una nueva aplicación Express
const app = express();

// Define el puerto en el que se ejecutará tu servidor. Si existe una variable de entorno PORT, usará ese valor. De lo contrario, usará 3000.
const port = process.env.PORT || 3000;

// Define una ruta GET para la ruta raíz ("/") de tu aplicación. Cuando un cliente accede a esta ruta, tu servidor responderá con una página HTML.
app.get("/", (req,res) => {
    const htmlResponse = `
    <html>
        <head>
            <title>Nodejs y Express en Vercel</title>
        </head>
        <body>
            <h1>Soy un proyecto back end en Vercel</h1>
        </body>
    </html>
    `;
    // Envía la respuesta al cliente
    res.send(htmlResponse)
});

// Comienza a escuchar en el puerto especificado. Cuando tu servidor esté listo, imprimirá un mensaje en la consola.
app.listen(port , () =>{
    console.log(`Server running at http://localhost:${port}`);
})
