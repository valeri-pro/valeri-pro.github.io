const bucketContainerElement = document.getElementById("bucketContainer");
const DarkContainerElement = document.querySelector("#dark-container");

//открытие и закрытие корзины(+)
function toggleBucket() {
  bucketContainerElement.classList.add("opened");
  HeaderElement.classList.add("header_hide");
  DarkContainerElement.classList.add("shown2");
}
function removeBucket() {
  bucketContainerElement.classList.remove("opened");
  HeaderElement.classList.remove("header_hide");
  DarkContainerElement.classList.remove("shown2");
}
