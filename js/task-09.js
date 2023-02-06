const btnChangeClr = document.querySelector(".change-color")
const bodyChangeClr = document.querySelector(".color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const color = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

btnChangeClr.addEventListener("click", () => {
  document.body.style.backgroundColor = color()
  bodyChangeClr.textContent = color()
});
