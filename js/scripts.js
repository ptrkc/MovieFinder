const movieListURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes"
const movieListRequest = axios.get(movieListURL)
movieListRequest.then(treatData);
let movieArray = []
let moviesHTML = ""

function treatData(response) {
    movieArray = response.data
    console.log(movieArray)
    for (let i = 0; i < movieArray.length; i++) {
        moviesHTML += `
    <div class="movie">
    <img src="${movieArray[i].imagem}">
    <div class="title">${movieArray[i].titulo}</div>
    <button onclick="buyMovie(${movieArray[i].id})">
      Comprar
      <ion-icon name="cart-outline"></ion-icon>
    </button>
    </div>
    `
    };
    document.querySelector(".movies").innerHTML = moviesHTML
}