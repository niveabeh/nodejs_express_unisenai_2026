let http = require('http');
let fs = require('fs')

http.createServer(function(req, res){

    fs.readFile('index.html', function(e, conteudo){
        if(e){
            console.log(e)
        }else{
            res.write(conteudo)
        }
        res.end();
    })
}).listen(3000);

console.log("servirdor rodando em http://localhost:3000");
