//Passo 1//
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem-painel')

//Passo 2//
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        //Passo 3//
        desativarBotaoSelecionado();

        //Passo 4//
        selecionarBotaoCarrossel(botao);

        //Passo 5//
        esconderImagemAtiva();

        //Passo 6//
        mostrarImagemDeFundo(indice);
    })
})

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}
