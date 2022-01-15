
  

[Desafio Gazin Tech]:https://github.com/gazin-tech/Desafio-FullStack

  

  

# Desafio-FullStack / Gazin Tech

  

  

Link do desafio: [Desafio Gazin Tech]

  

  

## Objetivo

  

  

Desenvolvimento de um Projeto Full Stack Javascript seguintos os topicos requeridos no [Desafio Gazin Tech] e aprimoramento de minhas proprias habilidades como desenvolvedor de Software.

  

  

## O que compõe o projeto?

  

- **No geral**:

  

1. [Docker](https://www.docker.com/)

  

2. [Docker Compose](https://docs.docker.com/compose/)

  

3. [MySQL](https://www.mysql.com/)

  

4. [phpMyAdmin](https://www.phpmyadmin.net/)

  

5. [Git](https://git-scm.com/)

6. [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

  

7. [NodeJS 16](https://nodejs.org/en/)

  

8. [Npm](https://www.npmjs.com/)

  

  

- **Api**:

  

  

7. [Restify](http://restify.com/)

  

8. [Sequelize ORM](https://sequelize.org/v6/)

  

9. [MVC](https://www.devmedia.com.br/introducao-ao-padrao-mvc/29308)

  

  

- **Frontend**:

  

10. [ReactJS](https://pt-br.reactjs.org/)

  

11. [Redux](https://redux.js.org/)

  

12. [React Redux](https://react-redux.js.org/)

  

13. [Single Page Application](https://www.devmedia.com.br/ja-ouviu-falar-em-single-page-applications/39009)

  

14. [Axios](https://www.npmjs.com/package/axios)

  

15. [React Materialize](http://react-materialize.github.io/react-materialize/?path=/story/react-materialize--welcome)

  

16. [Materialize CSS](https://materializecss.com/)

  

17. [React Router](https://reactrouter.com/docs/en/v6/getting-started/overview)

  

18. [React Scripts](https://create-react-app.dev/)

19. [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)

20. [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

  

  

## Coisas que o projeto possui:

  

  

1. API's RESTFul construída em Restify, um framework javascript construído tendo como principal objetivo o desenvolvimento de API's.

  

2. Frontend construido como Single Page Application com compartilhamento de estados via Redux e React-Redux.

  

3. Interligação entre Frontend e API via requisições http com Axios e formato JSON.

  

4. Cadastro, edição e remoção de Níveis.

  

5. Cadastro, edição e remoção de Desenvolvedores.

  

6. Validações dos campos dos formulários ocorrendo tanto no Frontend quanto na API de forma independente.

  

7. Níveis com desenvolvedores relacionados não podem ser excluídos, implementado tanto no API quanto no Frontend de forma independente.

  

8. Ambiente de desenvolvimento e execução Docker.

  

9. Ordenação dos campos na visualização de todos os itens com possibilidade de ordem crescente ou decrescente, valido tanto para Níveis quanto para Desenvolvedores.

  

10. Exibe na listagem de Níveis a quantidade de desenvolvedores associados a ele em uma coluna própria, que também pode ser usado como fator de ordenação.

  

11. Pesquisa por nome com direito a auto complete, funcional tanto na listagem de Níveis quanto na de Desenvolvedores.

  

12. Construção manual das imagens Docker utilizadas, o que consequentemente também permite a montagem singular dos containers(API ou Frontend) mas de preferencia e boa pratica é utilizado e se recomenda por padrão o docker-compose para a montagem do ambiente.

  

13. Foi construido o modelo relacional usado utilizado no MySQL e ele se encontra nas pasta projeto/

  

14. Banco MySQL sendo montado automaticamente com as tabelas dentro do container de banco de dados.

  

15. Opção para consulta/gerenciamento do Banco de Dados via phpMyAdmin.

  

16. Gerenciamento do banco de dados MySQL na API via modelo [ORM](https://www.devmedia.com.br/tecnicas-de-mapeamento-objeto-relacional-revista-sql-magazine-40/6980) com o uso de Sequelize.

  

  

## Notas e Avisos

  

- Possua Docker instalado na maquina obrigatoriamente.

  

- Garanta que sua maquina tenha suporte a versão 3.8 do docker-compose antes de mais nada, caso não tenha, a instalação do ambiente irá retornar um erro antes mesmo de começar a subir os containers.

  

- Garanta antas da instalação deste projeto que não haja qualquer container em execução na maquina para evitar conflitos de portas.

  

- A versão do Frontend em execução é a versão buildada que se encontra em src/frontend/build, qualquer alteração na codagem do ReactJS não irá refletir no navegador.

  

- **Dica de ouro:** force um **Error 404** no frontend

  

## Rotas API

  

  

Acesse no link: [Mapeamento de Rotas da API - Desafio Gazin Tech](https://documenter.getpostman.com/view/2302068/UVRHj3g7)


## Composição dos diretórios e arquivos
<details>

```
├── README.md
├── arvore.txt
├── builds
│   ├── nodejs_api.Dockerfile
│   └── nodejs_frontend.Dockerfile
├── desafio
│   └── README.md
├── docker-compose.yml
├── projeto
│   ├── Modelo Relacional.mwb
│   └── Modelo Relacional.mwb.bak
├── sql
│   └── dump.sql
└── src
    ├── api
    │   ├── app.js
    │   ├── config
    │   │   └── connectionBD.js
    │   ├── controllers
    │   │   ├── desenvolvedorController.js
    │   │   └── nivelController.js
    │   ├── middleware
    │   │   └── cors.js
    │   ├── models
    │   │   ├── desenvolvedor.js
    │   │   └── nivel.js
    │   ├── package.json
    │   └── routes
    │       ├── desenvolvedor.js
    │       └── nivel.js
    └── frontend
        ├── README.md
        ├── build
        │   ├── asset-manifest.json
        │   ├── css
        │   │   └── materialize.min.css
        │   ├── index.html
        │   ├── manifest.json
        │   ├── robots.txt
        │   └── static
        │       ├── css
        │       │   ├── main.311a51d9.css
        │       │   └── main.311a51d9.css.map
        │       └── js
        │           ├── 787.774729bc.chunk.js
        │           ├── 787.774729bc.chunk.js.map
        │           ├── main.0a926070.js
        │           ├── main.0a926070.js.LICENSE.txt
        │           └── main.0a926070.js.map
        ├── package-lock.json
        ├── package.json
        ├── public
        │   ├── css
        │   │   └── materialize.min.css
        │   ├── index.html
        │   ├── manifest.json
        │   └── robots.txt
        └── src
            ├── App.jsx
            ├── bd.js
            ├── components
            │   ├── Acoes.jsx
            │   ├── AddButton.jsx
            │   ├── Content.jsx
            │   ├── Desenvolvedor
            │   │   ├── DesenvolvedorForm.jsx
            │   │   └── DesenvolvedorRowTable.jsx
            │   ├── Head.jsx
            │   ├── Header
            │   │   ├── Header.jsx
            │   │   ├── Navbar.jsx
            │   │   └── index.jsx
            │   ├── Nivel
            │   │   ├── NivelForm.jsx
            │   │   └── NivelRowTable.jsx
            │   └── Table
            │       ├── Head.jsx
            │       ├── Table.jsx
            │       └── index.jsx
            ├── index.js
            ├── pages
            │   ├── Desenvolvedor
            │   │   ├── DesenvolvedorCreate.jsx
            │   │   ├── DesenvolvedorPage.jsx
            │   │   └── index.jsx
            │   ├── Error
            │   │   ├── NotFound404Page.css
            │   │   └── NotFound404Page.jsx
            │   ├── Home.jsx
            │   └── Nivel
            │       ├── NivelCreate.jsx
            │       ├── NivelPage.jsx
            │       └── index.jsx
            ├── reportWebVitals.js
            ├── services
            │   ├── bd
            │   │   ├── desenvolvedorService.js
            │   │   └── nivelService.js
            │   └── tools
            │       ├── convertFormatTime.js
            │       ├── ordenacaoByItem.js
            │       ├── searchByString.js
            │       └── toastError.js
            └── store
                ├── features
                │   ├── desenvolvedor
                │   │   ├── delete.js
                │   │   ├── fetchById.js
                │   │   ├── index.js
                │   │   ├── post.js
                │   │   └── put.js
                │   ├── desenvolvedores
                │   │   ├── fetchAllDevs.js
                │   │   └── index.js
                │   ├── links
                │   │   └── index.js
                │   ├── niveis
                │   │   ├── fetchAllNiveis.js
                │   │   └── index.js
                │   └── nivel
                │       ├── delete.js
                │       ├── fetchById.js
                │       ├── index.js
                │       ├── post.js
                │       └── put.js
                └── store.js
```

</details>

  

  

## Como instalar e inicializar

  

  

1. Clone este repositorio com:

  

```git clone https://github.com/gusscamargo/Desafio-Gazin-Tech```

  

2. Adentre a pasta:

  

```cd "Desafio-Gazin-Tech"```

  

3. Garanta que esteja com o Docker inicializado e funcionando na maquina e que suporte a versão 3.8 do docker-compose.

  

4. Dê stop ou derrube todo e qualquer container Docker ativo para evitar conflito de portas neste momento com os containers que iremos subir.

  

5. Construa as builds do ambiente com(pode demorar um pouco):

  

```docker-compose build```

  

6. Suba os ambientes de desenvolvimento:

  

```docker-compose up -d```

  

7. Após os ambientes terem subido recomendo a espera de 1 minuto para a execução dos scripts de inicialização internos dos containers terminarem suas execuções antes de abrir o navegador ou o Postman e sair realizando os testes.

  

8. Abra o navegador em [http://127.0.0.1/](http://127.0.0.1/) ou [http://127.0.0.1:8080/](http://127.0.0.1:8080/) caso queira abrir o phpMyAdmin.

  

9. Encare a seguinte tela :)

  

![HOME](https://i.imgur.com/6rOqAB8.png)

  

10. Aproveite, faça seus testes e obrigado por me acompanhar até aqui.

  

  

![JAVASCRIPT1](https://www.freecodecamp.org/news/content/images/2019/07/this-is-javascript.jpeg)