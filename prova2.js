// 1. Configurações Iniciais
const SUPABASE_URL = 'https://vxtnucolgsmdfpzkapnf.supabase.co';
const SUPABASE_KEY = 'sb_publishable_9HqVptK8IVaVtTLeWRZv5w_-1g9zD1L'; // Lembre-se de usar sua chave real

// O endpoint correto aponta para /rest/v1/ + o nome da sua tabela
const ENDPOINT = `${SUPABASE_URL}/rest/v1/alunos`;

const HEADERS = {
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=representation'
};

// 2. Função para Cadastrar Aluno (POST)
async function postAluno(nome, email) {
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        nome: nome,
        email: email
        // O 'id' e 'data_cadastro' geralmente são automáticos no banco (Serial/Timestamp)
      })
    });

    if (!res.ok) {
      const erroDetalhado = await res.json();
      console.log("Erro ao salvar aluno:", erroDetalhado);
      return;
    }

    const data = await res.json();
    console.log("Aluno cadastrado com sucesso!", data);
    return data;

  } catch (erro) {
    console.error("Erro de conexão:", erro);
  }
}

// 3. Função para Listar Alunos (GET)
async function getAlunos() {
  try {
    const res = await fetch(`${ENDPOINT}?select=*`, {
      method: 'GET',
      headers: HEADERS
    });

    if (!res.ok) {
      const erroDetalhado = await res.json();
      console.log("Erro ao buscar alunos:", erroDetalhado);
      return;
    }

    const data = await res.json();
    console.log("Lista de Alunos:", data);
    return data;

  } catch (error) {
    console.error("Erro no GET:", error);
  }
}

// --- Exemplos de Execução ---

// Cadastrar um novo aluno
postAluno("João Silva", "joao@email.com");

// Listar todos os alunos (descomente para testar)
// getAlunos();