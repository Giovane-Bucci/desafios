var form = document.getElementById('forms');
var campo = document.getElementById('nome');
var mensagem = document.getElementById('mensagem')

form.addEventListener('submit', function(e) {
    innerHTML('Olá, ' + campo.value + '. Espero que esteja bem!' );
    e.preventDefault();
});




var form = document.getElementById('forms');
var campo = document.getElementById('nome');
var mensagem = document.getElementById('mensagem'); // Pegando o elemento onde a mensagem será exibida

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o recarregamento da página
    mensagem.innerHTML = "Olá, " + campo.value + ". Espero que esteja bem!"; // Alterando o HTML
});