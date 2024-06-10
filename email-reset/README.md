# Serviço de Reenvio de Email para Reset de Senha de Usuários

## Visão Geral

Este repositório demonstra a implementação de um sistema simples de autenticação de usuários usando a ferramenta Resend para comunicação por e-mail. O foco principal é mostrar a utilização do Docker. A aplicação é construída com JavaScript, Node.js, MySQL para o banco de dados e Docker para containerização.

## Funcionalidades

- Registro e login de usuários.
- Mecanismo de redefinição de senha via e-mail.
- Utiliza JavaScript, Node.js, MySQL e Docker.

## Pré-requisitos

Antes de executar a aplicação, certifique-se de ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/get-started)
- [MySQL](https://dev.mysql.com/downloads/)

## Início

### Clone o Repositório

```bash
git clone https://github.com/Eduardo-Souza-Dev/reset-email.git
cd reset-email
```

## Uso do app localmente

1. Backend:
    Para iniciar o backend acesse a pasta src/backend e execute o comando ```nodemon routes.js```, ele irá enviar uma mensagem de incialização do backend e com ele você consegue ter acesso as APIs.

2. Frontend:
    O frontend basta ir na pasta padrão (email-reset) e executar ```npm start```.

## Utilização com docker

1. Aqui basta executar na pasta email-reset o comando ```docker-compose up```, ele criará todas as imagens e relacionar o banco automáticamente