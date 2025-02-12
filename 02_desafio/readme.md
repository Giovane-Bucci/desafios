### **Desafio 2 – Interação dinâmica com inputs**

Agora vamos começar a trabalhar com **inputs** e manipulação de conteúdo com o JavaScript.

---

#### **Objetivo do Desafio:**  
- Crie um formulário simples com:
  1. Um campo de texto para o nome.
  2. Um botão para enviar o formulário.
  3. Um elemento (`div`, `p` ou `h2`) que exibirá uma mensagem personalizada com o nome digitado.

- Quando o usuário clicar no botão, o JavaScript deve:
  1. Capturar o valor do campo de texto.
  2. Exibir uma mensagem de boas-vindas, como: **"Olá, [nome]!"**, no elemento criado.

---

#### **Regras:**
- **HTML:** Estruture o formulário de forma simples.
- **CSS:** Estilize os elementos de forma básica ou criativa.
- **JavaScript:** 
  - Use o evento de clique no botão.
  - Evite que o formulário seja enviado ao clicar no botão (use `event.preventDefault()`).
  - Manipule o DOM para alterar o conteúdo do elemento de mensagem.

---

#### **Exemplo do fluxo esperado:**  
1. O usuário digita "Giovane" no campo de texto.  
2. Clica no botão "Enviar".  
3. A mensagem **"Olá, Giovane!"** é exibida na tela.

---

Me envia o código assim que terminar e eu analiso o resultado!



Ótima ideia! Comentar o código é uma excelente forma de fixar o aprendizado. Vou te ajudar a estruturar isso.

---

## **1. Código comentado (HTML, CSS e JavaScript)**

### **📌 HTML Comentado**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"> <!-- Define a codificação de caracteres para suportar acentos e caracteres especiais -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Ajusta a escala da página para dispositivos móveis -->
    <title>Desafio 2 – Interação dinâmica com inputs</title> <!-- Título da página exibido na aba do navegador -->
    <link rel="stylesheet" href="styles.css"> <!-- Conecta o arquivo CSS para estilizar a página -->
</head>
<body>

<h1>Interação dinâmica com inputs</h1> <!-- Título principal da página -->

<!-- Formulário onde o usuário insere o nome -->
<form id="forms">
    <input type="text" id="nome" placeholder="Qual o seu nome?"> <!-- Campo de entrada de texto -->
    <button type="submit">Enviar</button> <!-- Botão que dispara a ação -->
</form>

<p id="mensagem"></p> <!-- Parágrafo onde a mensagem personalizada será exibida -->

<script src="scripts.js"></script> <!-- Conecta o JavaScript que manipula a interação do formulário -->
</body>
</html>
```

---

### **🎨 CSS Comentado**
```css
*{ 
    margin: 0px; /* Remove as margens padrão de todos os elementos */
    padding: 0px; /* Remove o preenchimento padrão de todos os elementos */
    font-family: 'Courier New', Courier, monospace; /* Define uma fonte para toda a página */
}

h1{
    color: blue; /* Define a cor do texto como azul */
    margin: 80px 0px 0px 80px; /* Ajusta a posição do título */
    font-size: 25px; /* Define o tamanho da fonte */
}

form{
    margin: 20px 0px 0px 80px; /* Ajusta o posicionamento do formulário */
}

button{
    color: white; /* Define a cor do texto do botão como branco */
    background-color: black; /* Define a cor do fundo do botão como preto */
    padding: 8px; /* Adiciona espaço interno ao botão */
    border-radius: 5px; /* Arredonda as bordas do botão */
}

input{
    padding: 10px; /* Adiciona espaço interno ao campo de entrada */
}

p{
    margin: 30px; /* Adiciona espaçamento ao redor do parágrafo */
    font-size: 30px; /* Define o tamanho do texto dentro do parágrafo */
    color: blue; /* Define a cor do texto como azul */
}
```

---

### **⚡ JavaScript Comentado**
```javascript
// Seleciona o formulário pelo ID 'forms' e armazena na variável 'form'
var form = document.getElementById('forms');

// Seleciona o campo de entrada pelo ID 'nome' e armazena na variável 'campo'
var campo = document.getElementById('nome');

// Seleciona o parágrafo onde a mensagem será exibida pelo ID 'mensagem'
var mensagem = document.getElementById('mensagem');

// Adiciona um evento de 'submit' ao formulário
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede que a página seja recarregada ao enviar o formulário

    // Altera o conteúdo do parágrafo 'mensagem' com o texto digitado no campo
    mensagem.innerHTML = 'Olá, ' + campo.value + '. Espero que esteja bem!';
});
```

---

## **2. Relatório explicativo sobre o código**
### **📌 O que este código faz?**
O código cria uma página interativa onde um usuário pode inserir seu nome em um campo de texto e, ao clicar no botão "Enviar", uma mensagem personalizada aparece na tela.

---

### **🛠️ Como cada parte funciona?**
1. **HTML:**  
   - Estrutura a página com um formulário, um campo de entrada de texto e um botão.
   - Cria um parágrafo (`<p id="mensagem">`) onde a resposta será exibida.
   - Conecta os arquivos `CSS` e `JavaScript`.

2. **CSS:**  
   - Define estilos para melhorar a aparência da página.
   - Personaliza cores, fontes e posicionamento dos elementos.

3. **JavaScript:**  
   - Captura os elementos do HTML (`form`, `input`, `p`).
   - Adiciona um evento ao botão para impedir o recarregamento da página.
   - Usa `innerHTML` para alterar o conteúdo do parágrafo e exibir a mensagem com o nome digitado.

---

### **🔎 O que eu aprendi fazendo este desafio?**
✅ Como estruturar um formulário no HTML.  
✅ Como impedir o comportamento padrão de um formulário com `e.preventDefault()`.  
✅ Como capturar o valor de um campo de texto com `campo.value`.  
✅ Como alterar o conteúdo de um elemento na página com `innerHTML`.  
✅ Como organizar o código em HTML, CSS e JavaScript separadamente.  

---

💡 **Próximo passo:**  
Agora que você documentou o código, quer adicionar um **efeito especial** na mensagem? Podemos:
- Mudar a cor da mensagem ao ser exibida.
- Fazer a mensagem desaparecer depois de alguns segundos.
- Animar o texto na tela.

Me avise qual dessas ideias você quer testar no próximo desafio! 🚀