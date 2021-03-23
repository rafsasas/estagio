const express = require('express')
const server = express()

server.listen(3001, () => {
    console.log('Servidor de pé em http:/localhost:3001')
    console.log('Pra desligar o nosso servidor: ctrl + c')
      
})