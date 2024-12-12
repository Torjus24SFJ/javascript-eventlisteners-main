const movable = document.getElementById("movable");

let posX = 0;
let posY = 0;
let currentRotate = 0;
let currentTextSize = 10;
let currentSize = 1;
const minSize = 1;

const moveAmount = 10;
const sizeIncrement = 0.1;
const rotateIncrement = 5;
const textSizeIncrement = 1;

function updateElement() {
  if (currentSize < minSize) {
    currentSize = minSize;
  }
  const transform = movable.style.transform = `translate(${posX}px, ${posY}px) scale(${currentSize}) rotate(${currentRotate}deg)`;
  movable.style.transform = transform;
}

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  switch (event.key) {
    case "ArrowUp":
      posY -= moveAmount;
      break;
    case "ArrowDown":
      posY += moveAmount;
      break;
    case "ArrowLeft":
      posX -= moveAmount;
      break;
    case "ArrowRight":
      posX += moveAmount;
      break;
    case "l":
      currentRotate -= rotateIncrement;
      break;
    case "r":
      currentRotate += rotateIncrement;
      break;
    case "+":
      currentSize += sizeIncrement;
      break;
    case "-":
      currentSize -= sizeIncrement;
      break;
  }
  updateElement();
});
