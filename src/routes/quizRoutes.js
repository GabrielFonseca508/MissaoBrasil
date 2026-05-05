var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");
;

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/inserir", function (req, res) {
    quizController.inserir(req, res);
})

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    quizController.listar(req, res);
});



module.exports = router;