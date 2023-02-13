let searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search");

function searchQuery() {
  searchValue = searchBar.value;
  searchBar.value = `https://www.youtube.com/results?search_query=${searchValue}`;
}

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  searchQuery();
});

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
