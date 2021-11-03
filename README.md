<h1 align="center">
    <br>
    <p align="center"> 🚀 Projeto Weni Entertainments <p>
</h1>


## 💻 Sobre o projeto 

<br>

<p align="justify">O projeto é uma API REST que permite cadastrar artistas e músicas e disponibilizá-los ao usuário. A interface é um CRUD completo integrado com o banco de dados mongoDB, onde é possível listar, cadastrar, atualizar e deletar artistas e músicas cadastradas, ainda é possível avaliar as músicas.

 API desenvolvida como desafio para o programa de estágio Backend [{ Weni }](https://weni.ai/)

<br>

## ⚙️ Funcionalidades/Objetivos

- Cadastrar, listar, atualizar e deletar Artistas e Músicas;
- Disponibilizar para o usuários;
- Avaliação das Músicas através de like ou dislike ;
- Simplificar a vida dos usuários;

<br>

## 📚 Aprendizados

O projeto consiste em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). 

<br>

## 🛠️ Tecnologias utilizadas nesse projeto

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)

### Pacotes Utilizados 

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

<br>

## 📁 Arquitetura MVC 

```
 📁 Weni-Entertainments-API
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📑 artistsControllers.js
   |         |- 📑 musicsControllers.js
   |
   |    |- 📁 data
   |         |- 📑 database.js
   |
   |    |- 📁 models
   |         |- 📑 artist.js
   |         |- 📑 music.js
   |
   |    |- 📁 routes
   |         |- 📑 artistRoutes.js 
   |         |- 📑 musicsRoutes.js
   |
   |    |- 📑 app.js
   |    |- 📑 swagger.json
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 server.js

```
<br>

## 🔃 Rotas

* local: http://localhost:7070
* Necessário a url do mongoDB que fica dentro do .env "DATABASE_URL"

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente

<br>

## 🔃 Retorna a documentação no swagger 

| Método HTTP  | Endpoint                            | Descrição                   |
| ------------ | ----------------------------------- | --------------------------- |
| GET          | `http://localhost:7070/api-docs`    |  documentação  swagger      |       

<br>

## 🔃 Retorna teste com apresentação (Index)

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://localhost:7070/`     |  Mensagem de apresentação (Index)    |             |

<br>

## 🔃 Manipulação das Rotas de Artist:

| Método HTTP  | Endpoint              | Descrição                               |
| ------------ | -------------------   | ------------------------------------    |
| GET          | `/artist/all`         | Retorna todos os artistas               |
| GET          | `/artist/name`        | Retorna um artiata específico por nome  |
| GET          | `/artist/:id`         | Retorna um artista específico por id    |
| POST         | `/artist/create`      | Cria/cadastra um novo artista           |
| PATCH        | `/artist/:id`         | Altera informações de um artista        |
| DELET        | `/artist/:id`         | Remove um artista específico            |

<br>

## 🔃 Manipulação das Rotas de Livros:

| Método HTTP  | Endpoint               | Descrição                                     |
| ------------ | ---------------------- | --------------------------------------------- |
| GET          | `/music/all`           | Retorna todos as músicas cadastradas          |
| GET          | `/music/title`         | Retorna uma música específico por nome        |
| GET          | `/music/:id`           | Retorna uma música específico por id          |
| POST         | `/music/create`        | Cria/cadastra uma nova música                 |
| PUT          | `/music/:id`           | Altera informações de um música               |
| PATCH        | `/music/:id`           | atualiza informações de uma músicapor parte   |
| DELET        | `/music/:id`           | Remove uma música específico                  |
| POST         | `/music/:id/like`      |  Dar um like em um música                     |
| POST         | `/music/:id/dislike`   |  Dar um dislike em um música                  |

<br>

## ✅ Dados para Collection Artists

- id: autogerado e obrigatório
- name: texto e obrigatório
- description: texto e obrigatório 
- email: texto e obrigatório
- contactPhone: texto e obrigatório 
- create_At: data gerada automaticamente e obrigatório

<br>

## ✅ API deve retornar seguinte JSON:

```jsx

{
    "message": "'Artist created successfully!",
    "artist": {
        "_id": "78df9807f34e3c6ebca1dce0",
        "create_At": "2021-11-02T12:24:59.726Z",
        "name": "Pink Cantora-compositora",
        "description": "Alecia Beth Moore Hart, conhecida profissionalmente como Pink, é uma cantora, e compositora estadunidense, vencedora de três Grammys. Lançou o seu primeiro single, "There You Go", e seu primeiro álbum, Can't take Me Home, em 2000 pela LaFace",
        "email": "pink@gmail.com",
        "contactPhone":"+55 6 73898768",
        "__v": 0
    }
}

```
 <br>

 ## ✅ Dados para Collection Livros

- id: autogerado e obrigatório
- like: opcional
- title: texto e obrigatório
- composer: texto e obrigatório
- genre: texto e obrigatório
- letter: texto e obrigatório
- time: nùmero e obrigatório
- create_At: data gerada automaticamente e obrigatório

<br>

## ✅ API deve retornar seguinte JSON:

```jsx
{
    "likes": 1,
    "create_At": "2021-07-02T12:43:39.099Z",
    "_id": "78df0a0382bb987448b380c0",
    "title": "Please Don't Leave Me",
    "genre": "Pop",
    "composer":"Sandberg Martin Karl / Moore Alecia B",
    "letter": "I don't know if I can yell any louder
            How many times have I kicked you out of here?
            Or said something insulting?
            (Da-da-da-da-da)
            I can be so mean when I wanna be
            I am capable of really anything
            I can cut you into pieces
            When my heart is
            Broken
            (Da-da-da-da-da)
            Please, don't leave me (da-da-da-da-da)
            Please, don't leave me (da-da-da-da-da)
            I always say how I don't need you
            But it's always gonna come right back to this
            Please, don't leave me (da-da-da-da-da)
            How did I become so obnoxious?
            What is it with you that makes me act like this?
            I've never been this nasty (da-da-da-da-da)
            Can't you tell that this is all just a contest?
            The one that wins will be the one that hits the hardest
            But baby, I don't mean it
            I mean it
            I promise
            (Da-da-da-da-da)
            Please, don't leave me, oh
            Please, don't leave me (don't leave me)
            I always say how I don't need you
            But it's always gonna come right back to this
            Please, don't leave me
            I forgot to say out loud
            How beautiful you really are to me
            I can't be without
            You're my perfect little punching bag
            And I need you
            I'm sorry
            (Da-da-da-da-da)
            (Da-da-da-da, da-da-da-da)
            (Da-da-da-da-da)
            Please, please, don't leave me (da-da-da-da-da)
            Baby, please, don't leave me (no, don't leave me)
            Please, don't leave me
            (I always say) I always say how I don't need you
            But it's always gonna come right back to this
            Please, don't leave me (yeah)
            Please, don't leave me
            (I) I always say how I don't need you
            But it's always gonna come right back to this
            Please, please, don't leave me
            Baby, please, please, don't leave me",
    "time": 3:52,
    "__v": 0
}

```

<br>

## 👨‍💻 Autora

<br>

<td align="center"><a href="https://github.com/elisabetealves">
<img style="border-radius: 10%;" src="https://unavatar.now.sh/github/elisabetealves" width="200px;" alt=""/> </td><br> 


## [Elisabete Alves](https://github.com/elisabetealves)
## [LinkedIn](https://www.linkedin.com/mwlite/in/elisabete-alves-675637135) 

<br>
 


