import express from 'express';

const app = express();


app.listen(3000, () =>{
    console.log(`Servidor iniciado http://localhost:3000`);
})

app.get('/', (req, res) =>{
    res.send('<h1 style="color: green"> Criando um servidor express.js</h1>')
})
app.get('/sobre', (req, res) =>{
    res.send('<h1 style="color: red"> Sobre </h1>')
})
app.get('/contato', (req, res) =>{
    res.send('<h1 style="color: magenta"> Contato </h1>')
})
app.get('/empresa', (req, res) =>{
    res.send('<h1 style="color: orange"> Contato </h1>')
})