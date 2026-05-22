    var express = require("express");
    var router = express.Router();

    var qmsController = require("../controllers/qmsController");
    ;

    //Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
    router.post("/update", function (req, res) {
        qmsController.update(req, res);
    })

    router.get("/listar", function (req, res) {
        // função a ser chamada quando acessar /carros/listar
        qmsController.listar(req, res);
    });

    module.exports = router;