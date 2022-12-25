import { Entity } from "./Entity.js";

export class Game {
  ctx = "";
  tileSize;
  gameInterval;
  /**
   * @param {Snake} snake
   */
  snake = null;
  /**
   * @param {Food} food
   */
  food = null;
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {number} tileSize
   * @param {Snake} snake
   * @param {Food} food
   */
  constructor(canvas, tileSize, snake, food) {
    this.canvas = canvas;
    this.canvas.width = 640;
    this.canvas.height = 480;
    this.ctx = canvas.getContext("2d");
    this.tileSize = tileSize;
    this.snake = snake;
    this.snake.tileSize = this.tileSize;
    this.snake.position = { x: 5, y: 5 };
    this.food = food;
    this.food.tileSize = this.tileSize;
    this.food.position = { x: 15, y: 15 };
    this.gameInterval = setInterval(() => {
      this.draw();
    }, 90);
  }

  draw() {
    try {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = "#000000";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.food.draw(this.ctx);
      this.snake.draw(this.ctx);
      this.handleColisions();
    } catch (e) {
      this.ctx.fillStyle = "#000000";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.ctx.fillStyle = "#ff0000";
      this.ctx.font = "50px sans";
      this.ctx.fillText(
        "Game Over",
        this.canvas.width / 2 - 150,
        this.canvas.height / 2
      );
      clearInterval(this.gameInterval);
    }
  }

  handleColisions() {
    if (this.snake.x != this.food.x || this.snake.y != this.food.y) {
      this.snake.body.pop();
    } else {
      this.food.position = {
        x: Math.floor(Math.random() * this.tileSize),
        y: Math.floor(Math.random() * this.tileSize),
      };
    }

    if (
      this.snake.x >= this.canvas.width ||
      this.snake.x <= 0 - this.tileSize ||
      this.snake.y >= this.canvas.height ||
      this.snake.y <= 0 - this.tileSize
    ) {
      throw new Error("snake wall colision");
    }

    const bodyColision = this.snake.body.some(
      (p, i) =>
        p.x === this.snake.position.x &&
        p.y === this.snake.position.y &&
        i !== 0
    );

    if (bodyColision) throw new Error("snake self colision");

    this.snake.body.unshift(this.snake.position);
  }
}
