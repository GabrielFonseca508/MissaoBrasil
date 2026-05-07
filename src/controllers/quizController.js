var quizModel = require("../models/quizModel");


function listar(req, res) {
    let idUsuario = req.params.idUsuario;
    quizModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listarIndividual(req, res) {
    let idUsuario = req.params.idUsuario;
    // precisamos informar que o resultado voltará para o front-end como uma resposta em json
    quizModel.listarIndividual(idUsuario).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}


function inserir(req, res) {
    var result = req.body.nota;
    var idUsuario = req.body.idUsuario;

    if (result == undefined) {
        res.status(400).send("A nota está indefinida!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        quizModel.inserir(result, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao enviar as notas: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
   inserir,
   listar,
   listarIndividual
}