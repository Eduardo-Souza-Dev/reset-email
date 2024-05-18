# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.11.0

# Base stage
FROM node:${NODE_VERSION}-alpine as base

WORKDIR /frontend

# Copia apenas o arquivo package.json e package-lock.json
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm run build

# Copia todo o restante dos arquivos
COPY . .

# Expor a porta que a aplicação utiliza
EXPOSE 3000

# Executa a aplicação
CMD ["npm", "start"]
