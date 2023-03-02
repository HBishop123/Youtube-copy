// Controls the Search function of the search-bar
const searchBarFunctionality = {
  searchBar: document.getElementById("search-bar"),
  searchButton: document.getElementById("search"),

  searchQuery: function () {
    searchValue = this.searchBar.value;
    if (searchValue === "") {
      return;
    } else
      this.searchBar.value = `https://www.youtube.com/results?search_query=${searchValue}`;
  },

  addListenerToSearchBar: function () {
    this.searchButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.searchQuery();
    });
  },
};
searchBarFunctionality.addListenerToSearchBar();

// shows the scroll bar when section is hovered
const scrollBarHovering = {
  navBar: document.querySelector(".nav-bar-large"),

  scrollShowing: function () {
    this.navBar.addEventListener("mouseenter", () => {
      this.navBar.style.overflowY = "scroll";
    });
    this.navBar.addEventListener("mouseleave", () => {
      this.navBar.style.overflowY = "hidden";
    });
  },
};
scrollBarHovering.scrollShowing();

// chevrons functionality
const chevronFunctionality = {
  allIcons: document.querySelector(".categories"),
  suggestionsChevronLeft: document.querySelector(".scroll-left-chevron"),
  suggestionsChevronRight: document.querySelector(".scroll-right-chevron"),

  chevronMovement: function () {
    this.suggestionsChevronLeft.addEventListener("click", () => {
      this.allIcons.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    });

    this.suggestionsChevronRight.addEventListener("click", () => {
      this.allIcons.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    });
  },
};
chevronFunctionality.chevronMovement();

// chevron to show more subs
const showMoreChevron = {
  showMoreContent: document.querySelector(".hidden-subscriptions"),
  showMoreButton: document.querySelector(".listing-chevron"),
  hideMoreContent: document.querySelector(".listing-chevron-hide"),

  showMoreChevronFunctionality: function () {
    this.showMoreButton.addEventListener("click", () => {
      this.showMoreButton.style.display = "none";
      this.showMoreContent.style.display = "flex";
    });

    this.hideMoreContent.addEventListener("click", () => {
      this.showMoreButton.style.display = "flex";
      this.showMoreContent.style.display = "none";
    });
  },
};
showMoreChevron.showMoreChevronFunctionality();

// menu button to show small or large sidebar
const sideBarFunctionality = {
  menuButton: document.querySelector(".menu-logo"),
  largeNav: document.querySelector(".nav-bar-large"),
  smallNav: document.querySelector(".nav-bar-small"),
  videoArea: document.querySelector(".video-area"),

  smallNavDesign: function () {
    this.largeNav.style.display = "none";
    this.smallNav.style.display = "flex";
    this.videoArea.style.paddingLeft = "90px";
    this.videoArea.style.gap = "70px";
    this.menuButton.id = "menu-logo-small";
  },

  largeNavDesign: function () {
    this.smallNav.style.display = "none";
    this.largeNav.style.display = "flex";
    this.videoArea.style.paddingLeft = "250px";
    this.videoArea.style.gap = "70px";
    this.menuButton.id = "";
  },

  sideBarChanging: function () {
    this.menuButton.addEventListener("click", () => {
      if (
        this.menuButton.className === "menu-logo" &&
        this.menuButton.id !== "menu-logo-small"
      ) {
        this.smallNavDesign();
      } else if (this.menuButton.id === "menu-logo-small") {
        this.largeNavDesign();
      }
    });
  }
};
sideBarFunctionality.sideBarChanging()
