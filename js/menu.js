const wineryElement = document.getElementById("winery");
const productsElement = document.getElementById("products");

const submenu1Element = document.getElementById("submenu_1");
const submenu2Element = document.getElementById("submenu_2");

function showSubmenu1() {
  submenu1Element.classList.add("submenu_show");
  submenu2Element.classList.remove("submenu_show");
}

function removeSubmenu1() {
  submenu1Element.classList.remove("submenu_show");
}

function showSubmenu2() {
  submenu2Element.classList.add("submenu_show");
  submenu1Element.classList.remove("submenu_show");
}
function removeSubmenu2() {
  submenu2Element.classList.remove("submenu_show");
}

function removeSubmenus() {
  submenu1Element.classList.remove("submenu_show");
  submenu2Element.classList.remove("submenu_show");
}
