

const { log } = require('console');
const http = require('http');

// Crear el servidor

//Request es lo que se esta solicitando por parte del cliente
 //Response es lo que nosotros respondemos al procesar la reques
http.createServer( (req, res) => { 
    
    res.write('Hola Mundo')
    // res.write('id, nombre\n');      
    // res.write('1, Francisco\n');      
    // res.write('2, Pia\n');      
    res.end();


})
.listen( 8080 ); //Puerto donde vamos a escuchar

console.log('Escuchando en el puerto: ', 8080);
