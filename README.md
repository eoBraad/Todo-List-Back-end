# TodoList Back-End

Desenvolvi um CRUD de uma todo-list, fiz esse projeto para testar meus conhecimentos
de back-end.

# Funcionalidades

[x] Criar nova tarefa. <br>
[x] Deletar uma tarefa. <br>
[x] Completar uma tarefa. <br>
[x] Criar um usuário. <br>
[x] Só é possivel Deletar, Criar, Completar uma tarefa se você estiver autenticado. <br>

## Tecnologias

- Typescript
- Express
- Prisma.io
- JsonWebToken

## Como Usar

- Primeiramente ao clonar o projeto rodar um yarn para baixar todas dependencias.
- Após baixar todas criar uma pasta .env na raiz do projeto.
- Adicionar 2 variaveis a ela sendo elas DATABASE_URL e SECRET_JWT.
- A DATABASE_URL você ira preencher com a sua conexão do banco de dados.
  > exemplo: "postgresql://SEU_USUARIO:SUA_SENHA@localhost:5432/SEU_DATABASE?schema=public".
- A SECRET_JWT você poderá preecher com qualquer valor, eu recomento que preencha com um md5.
- Por fim basta rodar um yarn dev no terminal e pronto.
