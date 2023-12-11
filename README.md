# Desafio Nginx e Node.js

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

* A linguagem de programação para este desafio é Node/JavaScript.

## Pré-requisitos

Antes de começar, certifique-se de ter o Docker instalado na sua máquina. Você pode baixar o Docker em [https://www.docker.com/get-started](https://www.docker.com/get-started).

## Executando a aplicação

Para executar o projeto e criar sua imagem do zero, siga as instruções abaixo:

1. Clone este repositório em sua máquina local: git clone https://github.com/higormeloap89/desafio-nginx-com-nodejs.git

2. Navegue até o diretório do projeto: 

```javascript
    cd desafio-nginx-com-nodejs
```
3. Para executar a aplicação, você pode utilizar o docker-compose fornecido neste repositório. Basta executar o seguinte comando na raiz do projeto:

```javascript
    docker-compose up -d --build
```

Isso irá criar os containers para o nginx, Node.js e MySQL e configurá-los automaticamente. Após isso, a aplicação estará disponível na porta 8080.

## Arquivos

Este repositório contém os seguintes arquivos:

- `docker-compose.yml`: Arquivo de configuração do Docker Compose.
- `nginx/`: Pasta contendo o Dockerfile e a configuração do nginx.
- `node/`: Pasta contendo o Dockerfile e o código-fonte da aplicação Node.js.

## Dependências

As únicas dependências para executar esta aplicação são o Docker e o Docker Compose.

Certifique-se de que ambos estão instalados e configurados corretamente em sua máquina antes de executar o comando `docker-compose up`.

## Considerações finais

Este desafio tem como objetivo consolidar os conhecimentos adquiridos sobre Docker. 

Caso tenha alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue neste repositório.