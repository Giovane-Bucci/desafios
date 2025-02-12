### **🔥 Desafio 3 – Validação de Formulário com Mensagens de Erro**  

Agora vamos avançar mais um nível! Vamos adicionar **validação de formulário** antes de exibir a mensagem. Isso significa que:
1. Se o usuário tentar enviar o formulário sem digitar um nome, exibimos uma mensagem de erro.  
2. Se o usuário digitar um nome, a mensagem de boas-vindas aparece normalmente.  

---

## **📌 O que você deve fazer**
1. **HTML:**  
   - Mantenha o formulário como está.  
   - Adicione um novo `<p id="erro"></p>` abaixo do campo para exibir mensagens de erro.  

2. **CSS:**  
   - Estilize a mensagem de erro (`#erro`) para que fique vermelha e mais visível.  

3. **JavaScript:**  
   - Antes de exibir a mensagem de boas-vindas, verifique se o campo está vazio.
   - Se estiver vazio, exiba um erro dentro do `<p id="erro">`.
   - Se estiver preenchido corretamente, limpe o erro e exiba a mensagem de boas-vindas normalmente.

---

## **📌 Como deve funcionar**
### ✅ **Cenário 1 – O usuário digitou um nome**
**Entrada:** "Giovane"  
**Saída:** Exibe **"Olá, Giovane! Espero que esteja bem!"** (no `<p id="mensagem">`).

### ❌ **Cenário 2 – O usuário clicou em "Enviar" sem digitar nada**
**Entrada:** Campo vazio  
**Saída:** Exibe **"Erro: Por favor, digite um nome!"** (no `<p id="erro">`).

---

## **📌 Regras**
✔️ O erro deve desaparecer se o usuário preencher corretamente.  
✔️ O formulário **não pode ser enviado** com o campo vazio.  
✔️ **Se o nome estiver correto, o erro desaparece e a mensagem de boas-vindas aparece**.

---

💡 **Dica para o JavaScript**  
- Você pode verificar se o campo está vazio com `if (campo.value === "")`.  
- Para mudar o texto da mensagem de erro, use `innerHTML`.  
- Para limpar o erro quando o nome for digitado, use `erro.innerHTML = ""`.  

---

## **🔥 Agora é sua vez!**
1. **Atualize o HTML, adicionando um `<p id="erro"></p>`**.  
2. **Estilize o erro no CSS (cor vermelha, negrito, etc.).**  
3. **Atualize o JavaScript para validar o campo antes de exibir a mensagem.**  
4. **Envie os arquivos aqui para eu revisar!** 🚀