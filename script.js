const blocosTopicos = document.querySelectorAll('.cont-top')

blocosTopicos.forEach((bloco) => {
    const topicos = bloco.querySelectorAll('.text')
    const btnAnt = bloco.querySelector('.btn-ant')
    const btnProx = bloco.querySelector('.btn-prox')

    let indiceAtual = 0

    function atualizarTopico(novoIndice){
        topicos[indiceAtual].classList.remove('ativo')
        indiceAtual = novoIndice
        topicos[indiceAtual].classList.add('ativo')
    }

    if (btnProx){
        btnProx.addEventListener('click', () => {
            let proximo = (indiceAtual + 1) % topicos.length
            atualizarTopico(proximo)
        })
    }

    if (btnAnt){
        btnAnt.addEventListener('click', () => {
            let anterior = (indiceAtual -1 + topicos.length) % topicos.length
            atualizarTopico(anterior)
        })
    }
});