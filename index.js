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

// chevrons

const allIcons = document.querySelector(".categories");
const suggestionsChevronLeft = document.querySelector(".scroll-left-chevron");
const suggestionsChevronRight = document.querySelector(".scroll-right-chevron");

suggestionsChevronLeft.addEventListener("click", () => {
  allIcons.scrollBy({
    left: -200,
    behavior: "smooth",
  });
});

suggestionsChevronRight.addEventListener("click", () => {
  allIcons.scrollBy({
    left: 200,
    behavior: "smooth",
  });
});
