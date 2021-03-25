const postgressql = require('postgresql'); //importa o postgress

const UserSchema = new postgressql.Schema({ //campos que terao dentro do banco de dados na tabela user
    id :{
        type: Number,
        require: true,
    },
    name: {
        type: String,
        require: true, //obrigatoria
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true, // caixa baixa
    },
    password:{
        type: String,
        required: true,
        select: false, //pra quando puxar no banco de dados a senha nao vir no array de usuarios
    },
    active: {
        type: Boolean,
        default: true,
    },
    createAt: { // quando foi criado o registro
        type: Date,
        default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now,

    }


});

const User = postgressql.model('User', UserSchema) // definindo o model

module.exports = User;