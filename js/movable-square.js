const movable = document.getElementById("movable");

setInterval(() => {
  const randomColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
  movable.style.backgroundColor = randomColor;
}, 2000);

let posX = 0;
let posY = 0;
let currentRotate = 0;
let currentTextSize = 10;
let currentSize = 1;
let isCircle = false;

const minSize = 1;
const moveAmount = 10;
const sizeIncrement = 0.1;
const flip = 180;
const rotateIncrement = 5;
const textSizeIncrement = 1;

function updateElement() {
  if (currentSize < minSize) {
    currentSize = minSize;
  }
  const transform = movable.style.transform = `translate(${posX}px, ${posY}px) scale(${currentSize}) rotate(${currentRotate}deg)`;
  movable.style.transform = transform;

  movable.className = movable.className.replace(/text-\[\d+px\]/, ""); // needed for tailwind to work with the script
  movable.classList.add(`text-[${currentTextSize}px]`);
}

document.addEventListener("keydown", (event) => {
  document.getElementById("movable");
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
    case " ":
      isCircle = !isCircle;
      movable.style.borderRadius = isCircle ? "50%" : "0"; // space turns cube into circle
      console.log(isCircle);
      break;
    case "f":
      currentRotate += flip;
    }
    updateElement();
  });
  
  // movable.addEventListener('mouseover', (e) => {
  //   currentRotate = 100;
  //   updateElement();
  // });

  //! doenst revert 
