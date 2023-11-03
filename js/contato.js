// Validação do Nome //

let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");


/* Função para mostrar e ocultar pop up de campo obrigatório, vazio e alterar o 
   input para vermelho caso o campo esteja vazio.
*/

function mostrarPopUp(input, label) {
    //Mostrar popup de campo obrigatório
    input.addEventListener("focus", function(){
    label.classList.add("required-popup")
});
    // Ocultar popup de campo obrigatório
    input.addEventListener('blur', function() {
    label.classList.remove("required-popup");
    
    // Mostrar popup de campo vazio e input em alerta vermelho.
    if (input.value.trim() == '') {
        input.classList.add('error');
        label.classList.add("campo-vazio")
    // Ocultar popup de campo vazio e input em alerta vermelho.
    } else {
        input.classList.remove('error');
        label.classList.remove("campo-vazio")
    }
});
}

mostrarPopUp(nomeInput, nomeLabel);

// Validação Email //

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

mostrarPopUp(emailInput, emailLabel)