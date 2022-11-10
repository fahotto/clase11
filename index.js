//1. Exportamos las dependecnsias que necesitamos

const express = require('express');
const mysql2 = require('mysql2')
//2 Creo una variable para ejecutar las funciones de express

const app = express();

//3 Creo el puerto para escuchar al cliente (peticiones)

const PORT = 8080

//4 llamo a la funcion que activa el servidor y lo tiene listro para peticiones


//5 creo las respuestas al cliente
app.get('/', (req, res) => {
    res.send (`<h1> Bienidos a mi app </h1>`)}); 

app.get('/home', (req, res) => {
   console.log(req.url);
   console.log(req.method);
    res.send('Hiciste click en home')
});

app.get ('/data', (req,res) => {
    res.json ({
        usuario: 'Dante',
        dni: 24354545,
    });
})
    
app.get('/index', (req,res) => {
    res.sendFile ('index.html', {
        root: __dirname + '/public'
        
    });
})

    //select sql

//app.post(); //insert sql
//app.update(); //update sql
//app.delete(); //delete sql

//5. Conectamons a la DB

const conexion = mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'dante1982'
})

conexion.connect((error) =>{
    if (error){
        console.log(`el error es :${error}`);
        } else {
console.log ('Conectado a la DB');
        }
})
 

app.listen(PORT, () => {
    console.log(`Servidor trabajando en el puerto ${PORT}`);
});

let contador = 0;
app.get('/contador' , (req,res) => {
    contador ++;
    res.send(`Cantidad de vistas es: ${contador}`)
}); 

   