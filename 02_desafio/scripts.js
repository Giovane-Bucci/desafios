

// Seleciona o formulário pelo ID 'forms' e armazena na variável 'form'
var form = document.getElementById('forms');

// Seleciona o campo de entrada pelo ID 'nome e armazena no variável 'campo'
var campo = document.getElementById('nome');

// selecina o parágrafo onde a mensagem será exibida pelo ID 'mensagem'
var mensagem = document.getElementById('mensagem')

// Adiciona um evento de 'submit' ao formulário
form.addEventListener('submit', function(e) {
    e.preventDefault(); // impede que a página seja carregada ao enviar o formulário

    // altere o conteúdo do parágrafo 'mensagem' com o texto digitado no campo
    mensagem.innerHTML = 'Olá, ' + campo.value + '. Espero que esteja bem!' ;
    
});
