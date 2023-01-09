document.querySelector('.busca').addEventListener('submit', (e) => {
    e.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if (input !== '') {
        showWarning('Carregando...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encondeURI(input)}&appid={API key}`;
    }

});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg
}