const http = require('http');
const fs   = require('fs'); 
 
const servidor = http.createServer((req, res) => {   
     
    fs.readFile('./index.html', (err, dados) => {        
        if (err) {          
            res.writeHead(404);  
            res.end('Arquivo não encontrado');            
            return;        
        }        
        res.writeHead(200, { 
            'Content-Type': 'text/html; charset=utf-8' 
        });        
        res.end(dados);    
    }); 
});
servidor.listen(3000, () => {    
    console.log('Servidor rodando em http://localhost:3000'); 
});