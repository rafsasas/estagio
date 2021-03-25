const express = require('express') 
const server = express()

server.get('/', (req, res) => {
    res.send('<h1>Home</h1>')
})

server.listen(3001, () => {
    console.log('dasd')
})