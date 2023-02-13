let searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search");

function searchQuery(){
  searchValue = searchBar.value;
  searchBar.value = `https://www.youtube.com/results?search_query=${searchValue}`
}

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  searchQuery()
  });
