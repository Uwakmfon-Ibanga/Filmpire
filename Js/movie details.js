const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");
console.log(movieId);