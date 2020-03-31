const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables')

//routers
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');
const usuarioRouter = require('../routes/usuario-router');


//Criando/ Invocando a Api/Server Web do Expressa
const app = express();


//Configuração de parse JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false,}));


//Configurando configuração BD
mongoose.connect(variables.Database.connection , {useNewUrlParser: true , useUnifiedTopology: true , useCreateIndex: true});


//Configurando as rotas
app.use('/api/categoria' , categoriaRouter);
app.use('/api/produto' , produtoRouter);
app.use('/api/usuario' , usuarioRouter);

//Exportando nossa API
module.exports = app;

//PROCESS

// API -> MIDDLEWARE -> ROTAS -> CONTROLLER -> REPOSITORY -> BRANCO