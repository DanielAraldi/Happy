<h1 align="center">
    <img alt="Happy" src=".github/logo.svg" height="100px" />
    <br>Next Level Week #3<br/>
    Node.js | ReactJS | React Native
</h1>

<p align="center">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/DanielAraldi/Happy?style=flat-square">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/DanielAraldi/Happy?style=flat-square">
    <img alt="GitHub" src="https://img.shields.io/github/license/DanielAraldi/Happy?style=flat-square">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1?style=flat-square"><br/>
</p>

<p align="center">
    <a href="#bookmark-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#boom-como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#memo-licença">Licença</a>
</p>

<p align="center">
    <img alt="Design do Projeto" width="650px" src="./.github/design-happy.png" />
<p>

## :bookmark: Sobre o Projeto

O **Happy** é uma aplicação Web e Mobile que possibilita aos usuários cadastrar e encontrar orfanatos. Aos usuários de visitação, é oferecido detalhes do orfanato, como horários e instruções para a visitação do orfanato.

Este projeto foi idealizado pensando no dia **12 de outubro**, onde é celebrado o **Dia das Crianças**, criado com o intuito de ajudar os usuários a encontrar orfanatos e trazer alegria as crianças.

Essa aplicação foi realizada durante a **Next Level Week #3**, projeto da [Rocketseat](https://rocketseat.com.br/).

## :rocket: Tecnologias Utilizadas

-  [Axios](https://github.com/axios/axios)
-  [Express](https://expressjs.com/)
-  [Expo](https://expo.io/)
-  [Leaflet](https://leafletjs.com/)
-  [Node.js](https://nodejs.org/en/)
-  [NPM](https://www.npmjs.com/)
-  [Mapbox](https://www.mapbox.com/)
-  [ReactJS](https://reactjs.org/)
-  [React Native](http://facebook.github.io/react-native/)
-  [React Navigation](https://reactnavigation.org/)
-  [Typeorm](https://typeorm.io/#/)
-  [Typescript](https://www.typescriptlang.org/)
-  [SQLite](https://www.sqlite.org/)
-  [Yarn](https://yarnpkg.com/)

## :boom: Como Executar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador.
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador.
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[Yarn](https://yarnpkg.com/)** ou **[NPM](https://www.npmjs.com/)**.
  - Por fim, é **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina.

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/DanielAraldi/Happy.git
```

2. Executando a Aplicação:

```sh
  # API
  $ cd backend
  # Instalando as dependências do projeto.
  $ yarn install # npm install

  # CONFIGURANDO O BANCO DE DADOS 
    # - CRIAÇÃO DE TABELAS: 
    $ yarn typeorm migrations:run # npm typeorm migrations:run
    # - EXCLUIR ÚLTIMA TABELA CRIADA:
    $ yarn typeorm migration:revert # npm typeorm migration:revert
  # Inicie a API
  $ yarn dev # ou npm dev

  # APLICAÇÃO WEB
  $ cd web
  # Instalando as dependências do projeto.
  $ npm install # ou yarn install
  # Inicie a aplicação web
  $ npm start # ou yarn start

  # APLICAÇÃO MOBILE
  $ cd mobile
  # Instalando as dependências do projeto.
  $ yarn install # ou npm install
  # Inicie a aplicação mobile
  $ yarn start # ou npm start
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
<sup>Projeto desenvolvido com a tutoria de [Diego Fernandes](https://github.com/diego3g), da [Rocketseat](https://rocketseat.com.br/).</sup>
