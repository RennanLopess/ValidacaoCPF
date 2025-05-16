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