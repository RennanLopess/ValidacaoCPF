const toggleTheme = document.getElementById('toggleTheme');
const historicoLista = document.getElementById('historico-lista');
const historico = [];

toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggleTheme.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
});

function mostrarAba(tipo) {
  document.querySelectorAll('.tab-content').forEach(aba => aba.classList.remove('active'));
  document.getElementById(tipo).classList.add('active');
}

function adicionarHistorico(texto) {
  historico.unshift(texto);
  atualizarHistorico();
}

function atualizarHistorico() {
  historicoLista.innerHTML = '';
  historico.slice(0, 5).forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    historicoLista.appendChild(li);
  });
}

document.getElementById('cpfInput').addEventListener('keypress', (e) => { if (e.key === 'Enter') validarCPF(); });
document.getElementById('validarCpf').addEventListener('click', () => validarCPF());

function validarCPF() {
  const cpf = document.getElementById('cpfInput').value.replace(/\D/g, ''); // Remove qualquer caractere não numérico
  const cpfFormatado = formatarCpf(cpf);
  const resultado = validarCpf(cpf) ? `CPF ${cpfFormatado} Válido ✅` : `CPF ${cpfFormatado} Inválido ❌`;
  document.getElementById('resultadoCpf').textContent = resultado;
  adicionarHistorico(resultado);
}

// Funções de validação
function validarCpf(cpf) {
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; // Verifica se todos os números são iguais
  
  // Valida o primeiro dígito verificador
  let soma = 0;
  let resto;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  resto = soma % 11;
  if (resto < 2) resto = 0;
  else resto = 11 - resto;
  if (resto !== parseInt(cpf.charAt(9))) return false;
  
  // Valida o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = soma % 11;
  if (resto < 2) resto = 0;
  else resto = 11 - resto;
  return resto === parseInt(cpf.charAt(10));
}


function formatarCpf(cpf) {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

