const confirmDialog = document.querySelector("#confirmDialog");
const HeaderElement = document.querySelector(".header");

function openConfirmModal() {
  confirmDialog.classList.add("shown");
  HeaderElement.classList.add("header_hide");
}

function closeConfirmModal() {
  confirmDialog.classList.remove("shown");
  HeaderElement.classList.remove("header_hide");
}
