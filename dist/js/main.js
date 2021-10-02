// Header Bottom Slider
let headerBottom = document.querySelector(".headerBottom");

let imgsArry = [
  "https://cdn.shopify.com/s/files/1/0332/6420/5963/files/slider13_49090674-d1ef-4c34-95b9-19c1edac4d15_4100x.jpg?v=1585640180",
  "https://cdn.shopify.com/s/files/1/0332/6420/5963/files/slider12_4d489365-da55-49c6-9504-a1f5f82b4111_1296x.jpg?v=1585640309",
  "https://cdn.shopify.com/s/files/1/0332/6420/5963/files/slider11_2bfeeb77-be99-4c7c-8354-a628a9d424d5_1296x.jpg?v=1585640322",
];

let sliderContentArry = [
  ...document.querySelectorAll(".headerBottom__content"),
];

let bullet = [...document.querySelector(".headerBottom__pagination").children];


var currentSlide = 0;

// onload select background image
headerBottom.style.backgroundImage = `url("${imgsArry[currentSlide]}")`;

bullet.forEach((btn, index) => {

  btn.addEventListener("click", function () {

    reset();

    currentSlide = index;

    headerBottom.style.backgroundImage = `url("${imgsArry[currentSlide]}")`;

    sliderContentArry[currentSlide].classList.add("active");

    btn.classList.add("active");

    if (currentSlide == 1) {
      sliderContentArry[currentSlide].style.textAlign = "right";
    }
  });
});

// Remove class active for all slides
function reset() {
  for (let i = 0; i < bullet.length; i++) {
    bullet[i].classList.remove("active");

    sliderContentArry[i].classList.remove("active");
  }
}

