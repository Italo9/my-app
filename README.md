# Teste prático - Front End


O projeto consiste em uma aplicação `fullstack` para desenvolver uma aplicação CRUD de Usuários em React utilizando a API [FakestoreApi](https://fakestoreapi.com/docs).

A telas permitem ao usuário realizar o seu cadastro através de um __formulário__, editar, deletar e até mesmo listar. 

Para esta parte do projeto, foi utilizado a prática de alguns dos princípios de Programação Orientada a Objetos (POO) durante o desenvolvimento.

## Tecnologias

- [React.js](https://pt-br.reactjs.org/)

- [TypeScript](https://www.typescriptlang.org/)

- [Docker](https://www.docker.com/)

- [React Hot Toast](https://react-hot-toast.com/)

- [ESlint](https://eslint.org/)


## Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/Italo9/my-app.git
$ cd my-app
```

Para iniciá-lo, siga os passos abaixo:

<details>
  <summary><strong>Com Docker</strong></summary>

  ```bash
  # Criar imagem
  $ docker image build -t my-app ./

  # Criar container
  $ docker container run -dit --name my-app -p 3000:3000 my-app
  ```
</details>

<details>
  <summary><strong>Sem Docker</strong></summary>

  ```bash
  # Instalar as dependências
  $ npm install

  # Iniciar o projeto
  $ npm start
  ```
</details>

O app estará disponível no seu browser pelo endereço http://localhost:3000.

## Objetivos

- Realizar pesquisas imersivas nas documentações das skills requeridas e supracitadas com objetivo de resolver as adversidades encontradas no desenvolvimento;
- Aplicar e praticar a habilidade de análise e/ou leitura de código;
- Aplicar os conhecimentos do requisições a API's;
- Realizar a estruturação de arquivos;
- Exercitar os conhecimentos iniciais obtidos na Trybe no módulo de Front End no que se refere ao framework React, bem como a linguagem de programação Typescript, apresentada no módulo de Back End; 
- Treinar a interpretação e utilização de stacks derivadas da modelagem de projetos de terceiros e consecutivamente a conceituação de suas sintaxes;

Lembrando que será necessário inserir os endpoints da sua API no arquivo `.env.local.example` e renomear este arquivo para `.env.local` para que a aplicação funcione corretamente.
