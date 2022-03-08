// declar all vairables for open and close
const searchBtn = document.querySelector(".bi-search");
const searchBar = document.querySelector("#search-container");

// declar all vairables for logins
const formOpen = document.querySelector("#openForm");
const formClose = document.querySelector("#closeForm");
const formPopUp = document.querySelector(".loginFormContainer");
const NavMenuBar = document.querySelector("#menuBar");
const MenuList = document.querySelector(".navBar");

const VidControls = document.querySelectorAll(".vidBtn");
const VidSlider = document.querySelector("#videoSlider");

VidControls.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");

    let vidSrc = btn.getAttribute("data-src");
    VidSlider.src = vidSrc;
  });
});

// On window scroll the search bar shouldnt appear
window.onscroll = () => {
  searchBtn.classList.remove("bi-x");
  searchBar.classList.remove("active");
  NavMenuBar.classList.remove("bi-x");
  MenuList.classList.remove("active");
};

// add eventlistener to toggle the Menu bar
NavMenuBar.addEventListener("click", () => {
  NavMenuBar.classList.toggle("bi-x");
  MenuList.classList.toggle("active");
});

// add eventlistener to toggle the active and search icons changes
searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("bi-x");
  searchBar.classList.toggle("active");
});

// add eventlistener to open logins form
formOpen.addEventListener("click", () => {
  formPopUp.classList.add("active");
});

// add eventlistener to open logins form
formClose.addEventListener("click", () => {
  formPopUp.classList.remove("active");
});

// Packages slider animations
const SliderBtnNext = document.querySelectorAll(".bi-chevron-right");
const SliderBtnPrev = document.querySelectorAll(".bi-chevron-left");
const slides = document.querySelectorAll(".slide");
const slides1 = document.querySelectorAll(".slideA");
const slides2 = document.querySelectorAll(".slideB");
const slides3 = document.querySelectorAll(".slideC");
const slides4 = document.querySelectorAll(".slideD");
const slides5 = document.querySelectorAll(".slideE");

// To give an actual position to all slides and multiply it by 100%
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
slides1.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
slides2.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
slides3.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
slides4.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
slides5.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

// A function That trasnform and translate the position of each slides
let counter = 0;
const carousel = () => {
  if (counter === slides.length) {
    counter = 0;
  } else if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const carousela = () => {
  if (counter === slides1.length) {
    counter = 0;
  } else if (counter < 0) {
    counter = slides1.length - 1;
  }

  slides1.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
const carouselb = () => {
  if (counter === slides2.length) {
    counter = 0;
  } else if (counter < 0) {
    counter = slides2.length - 1;
  }

  slides2.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
const carouselc = () => {
  if (counter === slides3.length) {
    counter = 0;
  } else if (counter < 0) {
    counter = slides3.length - 1;
  }

  slides3.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
const carouseld = () => {
  if (counter === slides4.length) {
    counter = 0;
  } else if (counter < 0) {
    counter = slides4.length - 1;
  }

  slides4.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
const carousele = () => {
  if (counter === slides5.length) {
    counter = 0;
  } else if (counter < 0) {
    counter = slides5.length - 1;
  }

  slides5.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

setInterval(() => {
  counter += 1;

  carousel();
  carousela();
  carouselb();
  carouselc();
  carouseld();
  carousele();
}, 5000);

// SliderBtnNext.addEventListener("click", () => {
//   counter++;
//   countera++;

//   carousel();
//   carousels();
// });

// SliderBtnPrev.addEventListener("click", () => {
//   counter--;

//   carousel();
// });

SliderBtnNext.forEach((btn) => {
  btn.addEventListener("click", () => {
    counter++;

    carousel();
    carousela();
    carouselb();
    carouselc();
    carouseld();
    carousele();
  });
});

SliderBtnPrev.forEach((btn) => {
  btn.addEventListener("click", () => {
    counter--;

    carousel();
    carousela();
    carouselb();
    carouselc();
    carouseld();
    carousele();
  });
});

const ImgThumb = document.querySelectorAll(".thumbImg");
const ImgPopUpBox = document.querySelector(".fullImage");
const ImgPopUp = document.querySelector(".PopImg");
const CloseImgPopUp = document.querySelector(".CloseGallery");

CloseImgPopUp.addEventListener("click", () => {
  ImgPopUpBox.classList.remove("active");
});

ImgThumb.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    ImgPopUpBox.classList.add("active");
    let myImg = thumb.src;
    ImgPopUp.src = myImg;
  });
});
