const movable = document.getElementById("movable");

let posX = 0;
let posY = 0;
let currentRotate = 0;
let currentTextSize = 10;
let currentSize = 50;

const moveAmount = 10;
const sizeIncrement = 10;
const rotateIncrement = 5;
const textSizeIncrement = 1;

function updateElement() {
  movable.style.transform = `translate(${posX}px, ${posY}px)`;
}

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  switch (event.key) {
    case "ArrowUp":
      posY -= moveAmount;
      break;
    case "ArrowDown":
      posY += moveAmount;
    // try to add more way to controll the cube:
    // move left
    // move right
    // rotate left (ex. use "l" as case)
    // rotate right (ex. use "r" as case)
    // increase size of cube (text should also increase at the same time)
  }
  updateElement();
});
