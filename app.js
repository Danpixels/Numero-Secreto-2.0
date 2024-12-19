function gerarNumero (){
     return parseInt(Math.random () * 10 + 1);
}

let numeroSecreto = gerarNumero();

function alterarTexto (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

alterarTexto ('h1', 'Jogo do número secreto');
alterarTexto ('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}