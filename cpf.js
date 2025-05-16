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