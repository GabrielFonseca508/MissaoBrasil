var database = require("../database/config");


function listar(idUsuario,NumQM) {
    var instrucaoSql = `
SELECT fkQM, COUNT(*) AS quantidadeUsuarios
FROM usuario
GROUP BY fkQM; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function update(NumQM, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", NumQM, idUsuario);
    var instrucaoSql = `
       UPDATE usuario SET fkQM = ${NumQM} WHERE id = ${idUsuario} 
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
  update,
  listar
}