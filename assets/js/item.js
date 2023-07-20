const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = minPrice / rangeInput[0].max;
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = maxPrice / rangeInput[1].max;
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = minVal / rangeInput[0].max;
      range.style.right = maxVal / rangeInput[1].max;
    }
  });
});
const applyBtn = document.querySelector(".range-btn");
const minInput = document.querySelector(".input-min");
const maxInput = document.querySelector(".input-max");
const minRange = document.querySelector(".range-min");
const maxRange = document.querySelector(".range-max");

applyBtn.addEventListener("click", () => {
  const minPrice = parseInt(minInput.value);
  const maxPrice = parseInt(maxInput.value);

  minRange.value = minPrice;
  maxRange.value = maxPrice;

  const minPercent = (minPrice / minRange.max) * 100;
  const maxPercent = (maxPrice / maxRange.max) * 100;

});

minInput.addEventListener("input", () => {
  const minPrice = parseInt(minInput.value);
  const maxPrice = parseInt(maxInput.value);

  if (minPrice > maxPrice) {
    maxInput.value = minPrice;
  }

  const minPercent = (minPrice / minRange.max) * 100;
  const maxPercent = (maxPrice / maxRange.max) * 100;

 
});

maxInput.addEventListener("input", () => {
  const minPrice = parseInt(minInput.value);
  const maxPrice = parseInt(maxInput.value);

  if (maxPrice < minPrice) {
    minInput.value = maxPrice;
  }

  const minPercent = (minPrice / minRange.max) * 100;
  const maxPercent = (maxPrice / maxRange.max) * 100;

});

// const gridViewBtn = document.querySelector('.grid-view');
// const listViewBtn = document.querySelector('.list-view');
// const listCardHolder = document.querySelector('.list-card-holder');

// gridViewBtn.addEventListener('click', () => {
//   listCardHolder.classList.remove('list-card-holder','list-card');
//   listCardHolder.classList.add('grid-view-list-card','grid-view-list-card-holder');
// });

// listViewBtn.addEventListener('click', () => {
//   listCardHolder.classList.remove('grid-view-list-card','grid-view-list-card-holder');
//   listCardHolder.classList.add('list-card-holder','list-card');
// });


