function exibirTextoNaTelaTodos(tag, texto) {
    let listaDeElementos = document.querySelectorAll(tag);

    listaDeElementos.forEach(function(elemento) {
        elemento.innerHTML = texto;
    });
}

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.scroll(0, 0);

exibirTextoNaTelaTodos('.foto-perfil-titulo', 'Luiz Miguel');
exibirTextoNaTelaTodos('.cabecalho-sub-titulo', 'Analista de Sistemas e NOC');
exibirTextoNaTelaTodos('.sobre-titulo', 'Sobre Mim');
exibirTextoNaTelaTodos('.sobre-paragrafo', 'Atuando como Suporte de T.I, recém formado em Análise e Desenvolvimento de Sistemas, buscando me desenvolver na área utilizando as linguagens JS, Python e C#.');
exibirTextoNaTelaTodos('.projetos-titulo', 'Meus Projetos');
exibirTextoNaTelaTodos('.projetos-titulo-caixa', 'Sem nada aqui');
exibirTextoNaTelaTodos('.paragrafo-projetos', 'Trabalhando nisso');
exibirTextoNaTelaTodos('.contato-titulo', 'Entre em Contato');

