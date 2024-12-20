let numeroSecreto = gerarNumero();
let tentativas = 1;

exibirMensagem();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        alterarTexto('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        alterarTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            alterarTexto('p', 'o número secreto é menor');
        } else {
            alterarTexto('p', 'o número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumero () {
    return parseInt(Math.random () * 10 + 1);
}

function alterarTexto (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirMensagem () {
    alterarTexto ('h1', 'Jogo do número secreto');
    alterarTexto ('p', 'Escolha um número entre 1 e 10');
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagem();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}