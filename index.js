let searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search");

// function to use the search bar
function searchQuery() {
  searchValue = searchBar.value;
  if (searchValue === "") {
    return;
  } else
    searchBar.value = `https://www.youtube.com/results?search_query=${searchValue}`;
}

// adding event listener to search bar
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  searchQuery();
});

// shows the scroll bar when section is hovered
const navBar = document.querySelector(".nav-bar-large");
navBar.addEventListener("mouseenter", () => {
  navBar.style.overflow = "scroll";
});
navBar.addEventListener("mouseleave", () => {
  navBar.style.overflow = "hidden";
});

const categoriesSection = document.querySelector(".categories");
categoriesSection.addEventListener("mouseenter", () => {
  categoriesSection.style.overflow = "scroll";
});

categoriesSection.addEventListener("mouseleave", () => {
  categoriesSection.style.overflow = "hidden";
});
