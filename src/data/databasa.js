const mongoose = require('mongoose');

require('dotenv').config();

const connect = () => {mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => {
        console.log('Mongo db conectado com sucesso');
    })
    .catch((error) => {
        console.log('Algo deu errado');
        console.error(error);
    })
};

module.exports = { connect };
