// Validação do Nome //

let nomeLabel = document.querySelector('label[for="nome"]');
let nomeInput = document.getElementById("nome");
let nomeHelper = document.getElementById("nome-helper");


/* Função para mostrar e ocultar pop up de campo obrigatório, vazio e alterar o 
   label e input para vermelho caso o campo esteja vazio.
*/

function mostrarPopUp(label, inputOrTextarea) {

    ////////////// Label e Input /////////////////

    //Mostrar popup de campo obrigatório no input.
    inputOrTextarea.addEventListener("focus", function(){
        label.classList.add("required-popup");
        });

    // Ocultar popup de campo obrigatório no input.
    inputOrTextarea.addEventListener('blur', function() {
        label.classList.remove("required-popup");
    
    // Mostrar popup de campo vazio e mostrar label e input em vermelho.
    if (inputOrTextarea.value.trim() == '') {
        label.classList.add("campo-vazio");
        label.style.color ="#992020";
        inputOrTextarea.classList.add('error');
        
    // Ocultar popup de campo vazio e remover efeito do label e input em vermelho.
    } else {
        label.classList.remove("campo-vazio");
        label.style.color ="#2a130a";
        inputOrTextarea.classList.remove('error');
    }
    });
};

mostrarPopUp(nomeLabel, nomeInput);

// Validação Email //

let emailLabel = document.querySelector('label[for="email"]');
let emailInput = document.getElementById("email");
let emailHelper = document.getElementById("email-helper");

mostrarPopUp(emailLabel, emailInput);

let mensagemInput = document.getElementById("mensagem");
let mensagemLabel = document.querySelector('label[for="mensagem"]');
let mensagemHelper = document.getElementById("mensagem");

mostrarPopUp(mensagemLabel, mensagemInput);