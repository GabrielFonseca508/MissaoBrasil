var database = require("../database/config");


function listar(idUsuario) {
    var instrucaoSql = `
SELECT 
usuario.nome,
MAX(resultado.nota) AS maiorNota
FROM resultado
JOIN usuario
ON resultado.fkUsuario = usuario.id
GROUP BY usuario.nome
ORDER BY maiorNota DESC;  
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarIndividual(idUsuario) {
    var instrucaoSql = `
SELECT 
usuario.nome,
resultado.nota,
DATE_FORMAT(resultado.dtRealizacao, '%d/%m %H:%i') AS dataFormatada
FROM resultado
JOIN usuario
ON resultado.fkUsuario = usuario.id
WHERE fkUsuario = ${idUsuario};  
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
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
  listar,
  listarIndividual
}