document.querySelector('.busca').addEventListener('submit', (e) => {
    e.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if (input !== '') {
        showWarning('Carregando')
    }

});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg
}