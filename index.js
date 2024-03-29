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
  },
};
sideBarFunctionality.sideBarChanging();

youtubeButton = {
  youtubeIcon: document.querySelector("#youtube-logo"),
  youtubeText: document.querySelector("#youtube"),

  pressYoutubeButton: function () {
    this.youtubeIcon.addEventListener("click", () => {
      location.reload(true);
    });
    this.youtubeText.addEventListener("click", () => {
      location.reload(true);
    });
  },
};
youtubeButton.pressYoutubeButton();

const smallSearchBarDisplay = {
  smallSearchButton: document.querySelector("#small-view-search"),
  smallSearchContainer: document.querySelector(".small-search-container"),

  smallSearchShow: function () {
    this.smallSearchContainer.style.display = "flex";
    this.smallSearchContainer.id = "active-container-small";
  },

  smallSearchHide: function () {
    this.smallSearchContainer.style.display = "none";
    this.smallSearchContainer.id = "";
  },

  showOrHideSearch: function () {
    this.smallSearchButton.addEventListener("click", () => {
      if (
        this.smallSearchContainer.className === "small-search-container" &&
        this.smallSearchContainer.id !== "active-container-small"
      ) {
        this.smallSearchShow();
      } else if (this.smallSearchContainer.id === "active-container-small") {
        this.smallSearchHide();
      }
    });
  },
};
smallSearchBarDisplay.showOrHideSearch();

const smallSearchBarFunctionality = {
  searchBar: document.getElementById("search-bar-small"),
  searchButton: document.getElementById("search-small"),

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
smallSearchBarFunctionality.addListenerToSearchBar();


// adding link to each video image to link to video page

const linkToVideo = {
  linkBox: document.querySelectorAll(".video-image"),

  link: function () {
    this.linkBox.forEach((element) => {
      const link = document.createElement("a");
      link.href = "./video.html";
      element.insertAdjacentElement("beforebegin", link);
      link.appendChild(element);
    });
  },
};
linkToVideo.link();

// const uploadVideoButton = document.querySelector('.record-logo')
// uploadVideoButton.addEventListener('click', () => {
//   console.log('hello')
// })
