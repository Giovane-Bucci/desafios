var form = document.getElementById('forms');
var campo = document.getElementById('nome');

form.addEventListener('submit', function(e) {
    this.innerHTML('Olá, ' + campo.value + '. Espero que esteja bem!' );
    e.preventDefault();
});



/* 
01. Estou usando o var para definir a variável que dos
valores que eu vou inputar do formulário. Temos
a variável form para identificar qual o formulário e
a variável campo que é o campo onde será inputado a 
informação que eu quero trabalhar.

02. O trecho do código document.getElementById é para
incular o id do campo ou formulário que eu quero.

03. Depois não entendi mais nada do código.

*/