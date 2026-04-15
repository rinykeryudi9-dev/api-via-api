# 📚 Integração com Supabase – CRUD de Alunos

Este projeto demonstra uma integração simples com o **Supabase** utilizando **JavaScript (Fetch API)** para realizar operações básicas de cadastro e consulta em uma tabela chamada `alunos`.


## 🚀 Funcionalidades

* ✅ Cadastrar um aluno (POST)
* ✅ Listar todos os alunos (GET)


## 🛠️ Tecnologias Utilizadas

* JavaScript (ES6+)
* Fetch API
* Supabase (REST API)

## ⚙️ Configuração Inicial

Antes de rodar o script, configure as variáveis:

```javascript
const SUPABASE_URL = 'https://SEU_PROJETO.supabase.co';
const SUPABASE_KEY = 'SUA_CHAVE_PUBLICA';
```

> ⚠️ **Importante:** Nunca exponha sua chave em projetos públicos.


## 🔗 Endpoint

O endpoint é montado automaticamente:

```javascript
const ENDPOINT = `${SUPABASE_URL}/rest/v1/alunos`;
```


## 📌 Headers da Requisição

```javascript
const HEADERS = {
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=representation'
};
```


## 🧑‍🎓 Cadastrar Aluno

Função responsável por inserir um novo aluno na tabela:

```javascript
postAluno(nome, email)
```

### Exemplo:

```javascript
postAluno("João Silva", "joao@email.com");
```

### Retorno esperado:

* Dados do aluno cadastrado
* Mensagem de sucesso no console


## 📋 Listar Alunos

Função que retorna todos os registros da tabela:

```javascript
getAlunos()
```

### Exemplo:

```javascript
getAlunos();
```

### Retorno esperado:

* Lista de alunos no console

## ⚠️ Tratamento de Erros

O script já trata:

* ❌ Erros de requisição (status HTTP)
* ❌ Erros de conexão
* ❌ Respostas inválidas da API


## 🧱 Estrutura Esperada da Tabela `alunos`

| Campo         | Tipo      | Observação             |
| ------------- | --------- | ---------------------- |
| id            | integer   | Auto incremento        |
| nome          | text      | Nome do aluno          |
| email         | text      | Email do aluno         |
| data_cadastro | timestamp | Gerado automaticamente |


## ▶️ Como Executar

Você pode rodar esse script:

* No navegador (console do DevTools)
* Em um projeto frontend (React, Vue, etc.)
* Em Node.js (com `node-fetch` ou similar)


## 🧪 Testes

Descomente a linha abaixo para testar a listagem:

```javascript
// getAlunos();
```


## 📌 Observações

* O campo `id` e `data_cadastro` são gerados automaticamente pelo banco.
* Certifique-se de que a tabela `alunos` existe no Supabase.
* Verifique as permissões de acesso (Row Level Security).


## 📄 Licença

Este projeto é livre para uso e aprendizado.
