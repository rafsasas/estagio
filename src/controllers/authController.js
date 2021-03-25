const express = require('express');

const User = require ('../models/user')

const router = express.Router(); // define a rota so pra usuarios 

router.post('/register', async (req, res) => {
    try {
        const user =  await User.create(req.body); //Cria um novo usuario quando chamar a rota 

        return res.send({ user });
    } catch (err){
        return res.status(400).send({error: 'Falha no Registro'});
    }
});

module.exports = app => app.use('/auth', router) //tera uma rota /auth/register que chamara a funçao de registro
