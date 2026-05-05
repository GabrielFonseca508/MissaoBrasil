var database = require("../database/config");



// NECESSARIO CRIAR A TABELA PARA ARMAZENAR AS NOTAS E O ID DO USUARIO

function listar() {
    var instrucaoSql = `
        SELECT (nota,fk) FROM resultado;   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}




function inserir(nota, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", nota, idUsuario);
    var instrucaoSql = `
        INSERT INTO resultado (nota, fkUsuario) VALUES ('${nota}',  ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
  inserir,
  listar
}