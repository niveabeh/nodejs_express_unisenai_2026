const express = require('express');

const app = express(); 

app.use(express.json());

let games = [
    { 
        title: 'God of War', 
        studio: 'Santa Monica', 
        price: 199.90 
    },    
    { 
        title: 'Spider-Man',  
        studio: 'Insomniac',    
        price: 179.90 },    
    { 
        title: 'Zelda',       
        studio: 'Nintendo',     
        price: 299.90 
    }, 
];

app.get('/', (req, res) => {    
    res.json(games);
});

app.post('/novogame', (req, res) => {   

    const { title, studio, price } = req.body;  

    games.push({ title, studio, price });    

    res.json({ mensagem: 'Game cadastrado!', games }); 
});

app.put('/novogame/:index', (req, res) => {    
    const { title, studio, price } = req.body;    

    const index = req.params.index;    

    games[index] = { title, studio, price };    

    res.json({ mensagem: 'Game atualizado!', games }); 
});

app.delete('/:index', (req, res) => {    
    const index = req.params.index;    

    games.splice(index, 1);    

    res.json({ mensagem: `Game removido da posição ${index}`, games }); 
}); 

app.listen(3000, () => 
    console.log('API rodando em http://localhost:3000')
); 
