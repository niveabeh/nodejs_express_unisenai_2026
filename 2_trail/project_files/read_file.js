const fs = require('fs');


fs.appendFile('novo.txt', 'Olá mundo UNisenai', function (e){
    if (e) throw e;
    console.log('Arquivo Salvo'); 
})