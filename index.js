// function to use the search bar
let searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search");

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
  navBar.style.overflowY = "scroll";
});
navBar.addEventListener("mouseleave", () => {
  navBar.style.overflowY = "hidden";
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

// chevron to show more subs

const showMoreContent = document.querySelector(".hidden-subscriptions");
const showMoreButton = document.querySelector(".listing-chevron");
const hideMoreContent = document.querySelector(".listing-chevron-hide");

showMoreButton.addEventListener("click", () => {
  showMoreButton.style.display = "none";
  showMoreContent.style.display = "flex";
});

hideMoreContent.addEventListener("click", () => {
  showMoreButton.style.display = "flex";
  showMoreContent.style.display = "none";
});

// menu button to show small or large sidebar

const menuButton = document.querySelector(".menu-logo");
const largeNav = document.querySelector(".nav-bar-large");
const smallNav = document.querySelector(".nav-bar-small");
const videoIndividuals = document.querySelectorAll(".video-container");
const navBarAll = document.querySelector("nav");
const videoArea = document.querySelector(".video-area");

menuButton.addEventListener("click", () => {
  if ((largeNav.style.display = "flex")) {
    largeNav.style.display = "none";
    smallNav.style.display = "flex";
    smallNav.style.width = "100px";
    navBarAll.style.width = "100px";
    videoArea.style.paddingLeft = "90px";
    videoArea.style.gap = "70px";

    if ((largeNav.style.display = "none")) {
    }
  }
});
