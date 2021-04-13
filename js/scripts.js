getMovies()

function getMovies() {
    const movieListURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes";
    const movieListRequest = axios.get(movieListURL);
    movieListRequest.then(treatData);
}
function treatData(response) {
    const movieArray = response.data;
    let moviesHTML = "";
    for (let i = 0; i < movieArray.length; i++) {
        moviesHTML += `
    <div class="movie">
    <img src="${movieArray[i].imagem}">
    <div class="title">${movieArray[i].titulo}</div>
    <button onclick="buyMovie('${movieArray[i].id}')">
      Comprar
      <ion-icon name="cart-outline"></ion-icon>
    </button>
    </div>
    `;
    };
    document.querySelector(".movies").innerHTML = moviesHTML
}

function buyMovie(id) {
    const name = prompt("Qual seu nome?");
    const quantity = parseInt(prompt("Quantos ingressos?"));
    const data = {
        nome: name,
        quantidade: quantity
    };
    const buyRequest = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/${id}/ingresso`, data);
    buyRequest.then(buyOK);
    buyRequest.catch(buyError);
}
function buyOK(response) {
    alert("Ingresso comprado com sucesso!")
}
function buyError(response) {
    alert("Os ingressos para este filme estão esgotados!")
}