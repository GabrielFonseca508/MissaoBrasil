-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE DBMissaoBrasil;

USE DBMissaoBrasil;


CREATE TABLE qms(
id INT PRIMARY KEY,
nome VARCHAR (45),
descricao VARCHAR(400),
patrono VARCHAR(60)
);


INSERT INTO qms VALUES
(1, 'Infantaria', 'A Infantaria é a principal força de combate terrestre, atuando diretamente na linha de frente em operações de ataque, defesa e ocupação de território em diversos tipos de terreno.', 'Brigadeiro Sampaio'),
(2, 'Cavalaria', 'A Cavalaria destaca-se pela mobilidade e rapidez, utilizando veículos blindados para reconhecimento, segurança e ações ofensivas rápidas no campo de batalha.', 'Marechal Osório'),
(3, 'Artilharia', 'A Artilharia é responsável pelo apoio de fogo, utilizando armamentos de longo alcance para atingir alvos estratégicos e apoiar as tropas durante as operações.', 'Marechal Mallet'),
(4, 'Engenharia', 'A Engenharia atua na construção de pontes, estradas e fortificações, além de remover obstáculos e apoiar a mobilidade e a defesa das tropas em combate.', 'Ten Cel Villagran Cabrita'),
(5, 'Comunicações', 'A área de Comunicações garante a transmissão segura e eficiente de informações entre unidades militares, essencial para a coordenação das operações.', 'Marechal Rondon'),
(6, 'Intendência', 'A Intendência é responsável pelo suporte logístico, incluindo alimentação, transporte, suprimentos e administração de recursos necessários às tropas.', 'Marechal Bittencourt'),
(7, 'Material Bélico', 'O Material Bélico cuida da manutenção, controle e armazenamento de armamentos e equipamentos, garantindo que estejam em condições adequadas de uso.', 'Ten Gen Napion');

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
senha VARCHAR(50) NOT NULL,
fkQM INT,
CONSTRAINT fkQM FOREIGN KEY(fkQM) REFERENCES qms(id)
);

CREATE TABLE resultado (
id INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT,
nota INT,
dtRealizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);