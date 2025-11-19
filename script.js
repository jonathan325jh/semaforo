
function mudarCor(cor) {
    apagarTodasAsLuzes();
    
    switch (cor) {
        case 'vermelha':
            const luzVermelha = document.getElementById('luz-vermelha');
            luzVermelha.classList.add('vermelha-acesa');
            break;

        case 'amarela':
            const luzAmarela = document.getElementById('luz-amarela');
            luzAmarela.classList.add('amarela-acesa');
            break;

        case 'verde':
            const luzVerde = document.getElementById('luz-verde');
            luzVerde.classList.add('verde-acesa');
            break;
    }
}

function apagarTodasAsLuzes() {
    document.getElementById('luz-vermelha').classList.remove('vermelha-acesa');
    document.getElementById('luz-amarela').classList.remove('amarela-acesa');
    document.getElementById('luz-verde').classList.remove('verde-acesa');
}