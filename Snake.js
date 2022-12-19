import { Entity } from "./Entity.js";

export class Snake extends Entity {
  speed = 1;
  lastKeyPress = null;

  constructor() {
    super();
    this.x = 0;
    this.y = 300;
      // this.x = Math.round(ev.clientX / this.tileSize) * this.tileSize;
      // this.y = Math.round(ev.clientY / this.tileSize) * this.tileSize;
    window.addEventListener("keydown", (ev) => {
      this.lastKeyPress = ev.key;
    });
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.fillStyle = "#ffff00";
    ctx.fillRect(this.x, this.y, this.tileSize, this.tileSize);
    this.handleControls();
  }

  handleControls() {
    if (this.lastKeyPress === "w") {
      // this.y -= this.speed * this.tileSize;
      this.y = Math.round((this.y - this.speed) / this.tileSize) * this.tileSize;
    }
    if (this.lastKeyPress === "s") {
      this.y += this.speed * this.tileSize;
    }
    if (this.lastKeyPress === "a") {
      this.x -= this.speed * this.tileSize;
    }
    if (this.lastKeyPress === "d") {
      this.x += this.speed * this.tileSize;
    }
  }
}
