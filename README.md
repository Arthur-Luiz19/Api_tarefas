# API de Gerenciamento de Tarefas

## Descrição

Esta é uma API simples para gerenciamento de tarefas. Ela permite realizar operações CRUD (Criar, Ler, Atualizar, Deletar) em tarefas, com funcionalidades básicas como listar todas as tarefas, criar novas tarefas e marcar as tarefas como concluídas. A API foi desenvolvida com o objetivo de ser escalável e de fácil integração em projetos que precisem de um sistema simples de controle de tarefas.

## Funcionalidades

- **GET /tarefas**: Recupera todas as tarefas.
- **POST /tarefas**: Cria uma nova tarefa.
- **PUT /tarefas/{id}**: Atualiza uma tarefa existente.
- **DELETE /tarefas/{id}**: Deleta uma tarefa.
- **GET /tarefas/{id}**: Recupera uma tarefa específica.

## Tecnologias Usadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construção de APIs.
- **Sequelize**: ORM para comunicação com banco de dados MySQL.
- **MySQL**: Banco de dados relacional utilizado para armazenar as tarefas.
- **dotenv**: Carregamento de variáveis de ambiente.
- **CORS**: Middleware para permitir requisições entre diferentes origens.

## Dependências

- **cors**: Para habilitar o compartilhamento de recursos entre diferentes origens.
- **dotenv**: Para ler variáveis de ambiente de um arquivo `.env`.
- **express**: Framework web para criação de servidores e rotas.
- **mysql2**: Driver para se conectar com o banco de dados MySQL.
- **nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.
- **sequelize**: ORM para trabalhar com o banco de dados MySQL.

## Como Rodar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/usuario/api-tarefas.git
```
### 2. Instalar as dependências
Navegue até o diretório do projeto e instale as dependências necessárias:

```bash
cd api-tarefas
npm install
```
## 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```makefile
DB_NAME=nome_do_banco
DB_USER=usuario_do_banco
DB_PASS=senha_do_banco
DB_HOST=localhost
```
## 4. Iniciar o servidor

Para rodar o servidor em modo de desenvolvimento:

```bash
npm run dev
```
Ou, para rodar em produção:

```bash
npm start
```
O servidor estará disponível em http://localhost:3000.

## Arquitetura
A API segue uma arquitetura baseada no padrão MVC (Model-View-Controller). O modelo de dados da tarefa é definido no arquivo tarefa.js, utilizando o Sequelize para realizar a interação com o banco de dados MySQL. O controller (tarefaController.js) manipula a lógica das requisições HTTP, enquanto o repositório (tarefaRepository.js) realiza as operações no banco de dados.

## Contribuições

Se você deseja contribuir com o projeto, sinta-se à vontade para abrir um **Pull Request**. Certifique-se de testar as mudanças antes de submeter.

## Licença

Este projeto está licenciado sob a Licença ISC. Consulte o arquivo LICENSE para mais informações.

## Autor

Arthur Luiz da Silva  
Data: 2024




