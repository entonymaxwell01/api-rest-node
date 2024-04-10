# README para API Node.js

## Descrição

Este é o projeto de uma API Node.js para cadastro de eventos e festas, usando a arquitetura MVC com Javascript

## Instalação

1 - Verifique se o Node.js está instalado em seu ambiente local, caso não, instale-o em <https://nodejs.org/en> <br>
2 - Clone este repositório usando:

```  
git clone <https://github.com/entonymaxwell01/api-rest-node.git> 
```

ou fazendo o baixando o .zip do proprio repositorio <br>
3 - Navegue para a parte do projeto, no terminal: <br>

```
cd api-rest-node/backend
```

4 - Instale as dependências do projeto usando:

```
npm install
```

## Uso

1 - Inicie o servidor com:

```
npm start 
```

2 - Acesse a API em <http://localhost:3000/api>

## End Points

### Serviços

### Listar serviços

1 - Usando o metodo GET
2 - Use a rota:

```
http://localhost:3000/api/services/
```

---

### Listar um unico serviço

1 - Usando o metodo GET
1- Use a rota:

```
http://localhost:3000/api/services/:id
```

3 - Substitua `:id` pelo id do serviço que deseja listar
---

### Cadastrar serviços

1 - Usando o metodo POST
2 - Use a rota:

```
http://localhost:3000/api/services/
```

3 - Passando o body json como:

```
{
 "name": "teste",
    "describe": "teste",
    "price": 0,
    "image": "teste"
}
```

---

### Atualizar um serviço

1 - Usando o metodo PUT
2 - Use a rota:

```
http://localhost:3000/api/services/:id
```

3 - Substitua `:id` pelo id do serviço que se deseja atualizar os dados
4 - Passando o body json como:

```
{
 "name": "testeUpdate",
    "describe": "testeUpdate",
    "price": 0,
    "image": "testeUpdate"
}
```

---

### Deletar serviço

1 - Usando o metodo DELETE
2 - Use a rota:

```
http://localhost:3000/api/services/:id
```

3 - Substitua `:id` pelo id do serviço que se deseja excluir
