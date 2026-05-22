var qmsModel = require("../models/qmsModel");


function listar(req, res) {
  
    let idUsuario = req.params.idUsuario;
    qmsModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}


function update(req, res) {
    let numQM = req.body.numQM;
    let idUsuario = req.body.idUsuario;
    console.log(req.body)

    if (numQM == undefined) {
        res.status(400).send("A nota está indefinida!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        qmsModel.update(numQM, idUsuario)
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
   update,
   listar
}