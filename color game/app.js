const body = document.querySelector("body");
const button = document.querySelector("#btn");
const h1 = document.querySelector("#h1");
function randomNumber() {
  return Math.floor(Math.random() * 254) + 1;
}

button.addEventListener("click", () => {
  let newColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});
