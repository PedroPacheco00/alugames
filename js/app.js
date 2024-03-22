function alterarStatus(item) {
    let game = document.getElementById(`game-${item}`);
    let botao = game.querySelector('.dashboard__item__button');
    let imagem = game.querySelector('.dashboard__item__img');

    if (botao.classList.contains('dashboard__item__button--return')) {
        if (window.confirm(`Você deseja devolver mesmo esse jogo?`)) {
            alert('O jogo foi devolvido com sucesso!');
            botao.className='dashboard__item__button';
            botao.innerHTML='Alugar';
            imagem.className='dashboard__item__img';
        }

    } else {
        botao.className='dashboard__item__button dashboard__item__button--return';
        botao.innerHTML='Devolver'
        imagem.className='dashboard__item__img dashboard__item__img--rented';
    }

    console.log(`Jogos alugados: ${document.querySelectorAll('.dashboard__item__button--return').length}`);
}