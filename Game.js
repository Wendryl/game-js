import { Entity } from "./Entity.js";

export class Game {
  ctx = "";
  tileSize;
  gameObjects = [];
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {number} tileSize
   */
  constructor(canvas, tileSize) {
    this.canvas = canvas;
    this.canvas.width = 640;
    this.canvas.height = 480;
    this.ctx = canvas.getContext("2d");
    this.tileSize = tileSize;
    requestAnimationFrame(() => this.draw());
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.gameObjects.forEach((gameObject) => {
      gameObject.draw(this.ctx);
    });
    requestAnimationFrame(() => this.draw());
  }

  /**
   * @param {Entity} gameObject
   */
  addObject(gameObject) {
    gameObject.tileSize = this.tileSize;
    this.gameObjects.push(gameObject);
  }
}
