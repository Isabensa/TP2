import http from 'http'; // Importar el módulo http  

// Crear un servidor HTTP básico  
const server = http.createServer((req, res) => {  
    res.statusCode = 200; // Establecer el código de estado  
    res.setHeader('Content-Type', 'text/plain'); // Establecer el tipo de contenido  
    res.end('¡Hola, Mundo!\n'); // Enviar respuesta  
});  

// Configurar el servidor para que escuche en el puerto 3000  
server.listen(3000, '127.0.0.1', () => {  
    console.log('Servidor corriendo en http://127.0.0.1:3000/');  
});  