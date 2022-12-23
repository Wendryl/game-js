import { Entity } from "./Entity.js";

export class Snake extends Entity {
  lastKeyPress = null;
  body = [];

  constructor() {
    super();
    window.addEventListener("keydown", (ev) => {
      this.lastKeyPress = ev.key;
    });
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    this.handleControls();
    this.body[0] = {
      x: this.x,
      y: this.y,
    };
    ctx.fillStyle = "#ffff00";
    for (let i = 0; i < this.body.length; i++) {
      ctx.fillRect(
        this.body[i].x,
        this.body[i].y,
        this.tileSize,
        this.tileSize
      );
    }
  }

  handleControls() {
    if (this.lastKeyPress === "w") {
      this.y -= this.tileSize;
    }
    if (this.lastKeyPress === "s") {
      this.y += this.tileSize;
    }
    if (this.lastKeyPress === "a") {
      this.x -= this.tileSize;
    }
    if (this.lastKeyPress === "d") {
      this.x += this.tileSize;
    }
  }
}
