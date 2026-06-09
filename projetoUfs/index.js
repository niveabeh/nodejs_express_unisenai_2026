const express = require('express'); 

const app = express(); 

const colecaoUf = require('./dados/dados'); 

app.get('/', (req, res) => {   

    res.json(colecaoUf); });

    app.listen(3000, () => 
        console.log('Rodando na porta 8080')
);

app.get('/:id', (req, res) => {    
    const id = parseInt(req.params.id);    
    const uf = colecaoUf.find(u => u.id === id);    
    if (!uf) {        
        return res.status(404).json({ 
            erro: 'UF não encontrada' });    
    }    
    res.json(uf); 
});


app.get('/:id', (req, res) => {    
    const id = parseInt(req.params.id);    

    if (isNaN(id)) {        
        return res.status(400).json({           
            erro: 'ID inválido. Informe um número inteiro.'});    
        }    
    const uf = colecaoUf.find(u => u.id === id);    
    if (!uf) {        
        return res.status(404).json({ erro: 'UF não encontrada' });    
    }   
    res.json(uf); 
});

app.get('/ufs', (req, res) => {    
    const busca = req.query.busca;    
    if (busca) {        
        const resultado = colecaoUf.filter(uf =>            
            uf.nome.toLowerCase().includes(busca.toLowerCase())        
        );        
        return res.json(resultado);    
    }    res.json(colecaoUf); }
);