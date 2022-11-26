require('dotenv-safe').config();

const express = require('express');
const app = express();

//Utilizacao das rotas estabelecidas
app.use('/', require('./route/postsRoute'));

app.listen(process.env.PORT, () => console.log(`Servidor online na porta ${process.env.PORT}`))