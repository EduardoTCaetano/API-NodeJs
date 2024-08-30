API-NodeJs

Descrição

O API-NodeJs é uma API RESTful desenvolvida com Node.js e Express. Oferece endpoints para obter informações sobre usuários e documentos.

Endpoints
  •	Listar Usuários: GET /api/users
      Retorna uma lista de todos os usuários.
  •	Obter Usuário por ID: GET /api/users/:id
      Retorna um usuário específico pelo ID. Retorna 404 se o usuário não for encontrado.
  •	Listar Documentos: GET /api/docs
Retorna uma lista de todos os documentos.
  •	Obter Documento por ID: GET /api/docs/:id
    Retorna um documento específico pelo ID. Retorna 404 se o documento não for encontrado.

Tecnologias Utilizadas
  •	Node.js (JavaScript runtime)
  •	Express (framework para Node.js)

Como Utilizar

Requisitos
•	Node.js e npm (ou yarn) instalados.

Clonando o Repositório

•	git clone https://github.com/EduardoTCaetano/API-NodeJs.git

•	cd API-NodeJs

Instalando Dependências

•	npm install

ou

•	yarn install


Iniciando o Servidor
•	npm start
ou
•	yarn start

A API estará disponível em http://localhost:3300.
