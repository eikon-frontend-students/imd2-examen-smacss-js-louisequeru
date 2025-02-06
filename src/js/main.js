var product1 = document.querySelector(".product1");
var detail1 = document.querySelector(".product-detail1");

function changeProduct1() {
  product1.classList.toggle("is-active");
  detail1.classList.toggle("is-active");
}

product1.addEventListener("click", changeProduct1);

var product2 = document.querySelector(".product2");
var detail2 = document.querySelector(".product-detail2");

function changeProduct2() {
  detail2.classList.toggle("is-active");
}

product2.addEventListener("click", changeProduct2);

var product3 = document.querySelector(".product3");
var detail3 = document.querySelector(".product-detail3");

function changeProduct3() {
  product3.classList.toggle("is-active");
  detail3.classList.toggle("is-active");
}

product3.addEventListener("click", changeProduct3);

var header = document.querySelector(".l-header");
var titleHeader = document.querySelector(".l-title-header");

function changeColor() {
  header.classList.toggle("is-active");
  titleHeader.classList.toggle("is-active");
}

header.addEventListener("click", changeColor);
