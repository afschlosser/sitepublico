document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao');
    const imagem = document.getElementById('imagem');

    botao.addEventListener('click', () => {
        imagem.src = 'https://github.com/afschlosser/sitepublico/blob/main/ander.jpeg'; // Substitua pelo caminho correto da sua imagem
        imagem.style.display = 'block';
    });
});
