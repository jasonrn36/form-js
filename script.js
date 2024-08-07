/* Constante responsavel por chamar o formulário */
const form  = document.getElementById('Formulario');
/*####################################################*/
function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;  /*Aqui o length vai verificar se existe dois nomes separados */
}
/*####################################################*/
/*Aqui o formuário chama a classe add.EventListener */
/*dentro dela temos a função 'submit' sendo chamada */
/*após a vírgula temos fuction(e) que chama a função*/
/*e.preventDefault() */
/* Isso previne que a página atualize quando clicamos*/
/*no botão enviar*/
form.addEventListener('submit', function(e) {

    /* Esta linha cria uma validação de formulário falso ou verdadeiro */
    let formEValido = false;

    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-1'); /* Constante criada para pegar o valor do campo nome-1 no formulário */
    formEValido = validaNome(nomeBeneficiario.value) /* Aqui o formulário é válido, caso o validaNome confirme dois nomes separados */

    if (formEValido) {
        alert('Está tudo certo');

    /* Após a validação o campo nomeBeneficiário voltará a ter o placeholder como antes*/
    nomeBeneficiario.value = ' ';

    }else{ 
        alert("o nome não está completo");
    }

})

console.log(form);