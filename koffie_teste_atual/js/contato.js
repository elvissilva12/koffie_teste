// Validação do Nome //

let nomeLabel = document.querySelector('label[for="nome"]');
let nomeInput = document.getElementById("nome");
let nomeHelper = document.getElementById("nome-helper");


/* Função para mostrar ou ocultar popup de campo obrigatório, vazio e alterar o 
   label e input para vermelho caso o campo esteja vazio.
*/

function mostrarPopUp(label, inputOrTextarea) {

    //Mostrar popup de campo obrigatório no input ou textarea.
    inputOrTextarea.addEventListener("focus", function(){
        label.classList.add("required-popup");
        });

    // Ocultar popup de campo obrigatório no input ou textarea.
    inputOrTextarea.addEventListener('blur', function() {
        label.classList.remove("required-popup");
    
    // Mostrar popup de campo vazio.
    if (inputOrTextarea.value.trim() == '') {
        label.classList.add("campo-vazio");
        
    // Ocultar popup de campo vazio.
    } else {
        label.classList.remove("campo-vazio");
    }
    });
};

mostrarPopUp(nomeLabel, nomeInput);

nomeInput.addEventListener("change", function(evento) {
    let nomeValor = evento.target.value;

    // Verificando se há pelo menos um número ou caractere especial no campo input.
    if (/[^\p{L}\s]/gu.test(nomeValor)) {
     
        // Estilos caso contenha algum número ou caractere especial.
        nomeInput.classList.add('error');
        nomeHelper.classList.add('visible');
        nomeHelper.innerText = '(O campo só pode conter letras.)';
        nomeLabel.style.color = "#992020";

    } else {
        // Estilos caso não contenha algum número ou caractere especial.
        nomeInput.classList.remove('error');
        nomeHelper.classList.remove('visible');
        nomeLabel.style.color ="#2a130a";
    }
});

// Validação Email //

let emailLabel = document.querySelector('label[for="email"]');
let emailInput = document.getElementById("email");
let emailHelper = document.getElementById("email-helper");

mostrarPopUp(emailLabel, emailInput);

emailInput.addEventListener("change", function(evento) {
    let emailValor = evento.target.value;

    // Vericando se o email segue o seguinte padrão:
    // exemplo@exemplo.com 
    // exemplo@exemplo.com.br

    if (/^[a-zA-Z]+[a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.(com|com\.br)$/.test(emailValor)) {

        // Estilos caso o email siga os padrões citados acima.
        emailInput.classList.remove('error');
        emailHelper.classList.remove('visible');
        emailLabel.style.color ="#2a130a";
        
    } else {
        // Estilos caso não siga o padrão.
        emailInput.classList.add('error');
        emailHelper.classList.add('visible');
        emailHelper.innerText = '(Insira um email válido.)';
        emailLabel.style.color = "#992020";
    }
});

let mensagemLabel = document.querySelector('label[for="mensagem"]');
let mensagemTextArea = document.getElementById("mensagem");
let mensagemHelper = document.getElementById("mensagem");

mostrarPopUp(mensagemLabel, mensagemTextArea);