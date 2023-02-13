let searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search");

function newTab(){
  window.open
}

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  searchValue = searchBar.value;
  searchBar.value = `https://www.youtube.com/results?search_query=${searchValue}`
  });
