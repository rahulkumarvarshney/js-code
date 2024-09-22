const canvas = document.querySelector("canvas");
const pen = canvas.getContext("2d");
pen.fillStyle = "yellow";
// cs --> cell size
let cs = 15;
let w = 1200;
let h = 735;
let food = null;
let init_len = 5;
let cells = [];
const snake = {
  direction: "right",

  createSnake: function () {
    for (let i = 0; i < init_len; i++) {
      cells.push({
        x: i,
        y: 0,
      });
    }
  },
  drawSnake: function () {
    for (let cell of cells) {
      pen.fillRect(cell.x * cs, cell.y * cs, cs - 1, cs - 1);
    }
  },
  updatesnake: function () {
    let headx = cells[cells.length - 1].x;
    let heady = cells[cells.length - 1].y;
    let nextx, nexty;
    if (this.direction === "right") {
      nextx = headx + 1;
      nexty = heady;

      //check conditions
    } else if (this.direction === "left") {
      nextx = headx - 1;
      nexty = heady;
    } else if (this.direction === "up") {
      nextx = headx;
      nexty = heady + 1;
    } else {
      nextx = headx;
      nexty = heady - 1;
    }

    cells.push({
      x: nextx,
      y: nexty,
    });
  },
};

function randomfood() {
  let foodx = parseInt((Math.random() * (w - cs)) / cs);
  let foody = parseInt((Math.random() * (h - cs)) / cs);

  food = {
    x: foodx,
    y: foody,
  };
  return food;
}

function init() {
  snake.createSnake();
  function keypressed(e) {
    if (e.key === "Arrowup") {
      snake.direction = "up";
    } else if (e.key === "ArrowDown") {
      snake.direction = "down";
    } else if (e.key === "ArrowLeft") {
      snake.direction = "left";
    } else {
      snake.direction = "right";
    }
  }
}
document.addEventListener("keydown", keypressed);
init();
snake.createSnake();
snake.drawSnake();
