const http = require('http') // Cria um serviço de http
const app = require('./app') // variavel que passa todo o conteudo que esta
                            // no app.js
const port = process.env.PORT || 3001; // Define uma porta padrao
const server = http.createServer(app); // Cria o server e executa o que esta 
server.listen(port);                   // o que esta no app.js

 