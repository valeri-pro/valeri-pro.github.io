const plusElement = document.getElementById("button-plus");
const minusElement = document.getElementById("button-minus");
const counterElement = document.getElementById("counter");

const COUNTER2_KEY = "count";
let count = JSON.parse(localStorage.getItem(COUNTER2_KEY)) || 0;

render();
function render() {
  counterElement.textContent = count;
  localStorage.setItem(COUNTER2_KEY, count);
}

plusElement.addEventListener("click", plus);
function plus() {
  count++;
  render();
}

minusElement.addEventListener("click", minus);
function minus() {
  if (count >= 2) {
    count--;
  }
  render();
}
