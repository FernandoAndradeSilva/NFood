'use strict'

const repository = require('../repositories/categoria-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();

function categoriaController() {

}


categoriaController.prototype.post = async (req, res) => {

    let _validationContract = new validation();
    _validationContract.isRequired(req.body.titulo, 'O tiítulo é obrigatório');
    _validationContract.isRequired(req.body.foto, 'A foto é obrigatória');
    ctrlBase.post(_repo, _validationContract, req, res);



};

categoriaController.prototype.put = async (req, res) => {

    let _validationContract = new validation();
    _validationContract.isRequired(req.body.titulo, 'O tiítulo é obrigatório');
    _validationContract.isRequired(req.body.foto, 'A foto é obrigatória');
    _validationContract.isRequired(req.params.id, 'O id que será atualizado é obrigatório');
    ctrlBase.put(_repo, _validationContract, req, res);
};


categoriaController.prototype.get = async (req, res) => {
    console.log('peguei a informação na Categoria' , req.usuarioLogado.user._id);
    ctrlBase.get(_repo, req, res);
};

categoriaController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

categoriaController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = categoriaController;