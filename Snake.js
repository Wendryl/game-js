import { Entity } from "./Entity.js";

export class Snake extends Entity {
  lastKeyPress = null;
  body = [];
  direction = null;

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

  handleSelfColision() {
    if (this.direction === "up" && this.lastKeyPress == "s")
      throw new Error("self colision");

    if (this.direction === "down" && this.lastKeyPress == "w")
      throw new Error("self colision");

    if (this.direction === "left" && this.lastKeyPress == "d")
      throw new Error("self colision");

    if (this.direction === "right" && this.lastKeyPress == "a")
      throw new Error("self colision");
  }

  handleControls() {
    // this.handleSelfColision();
    if (this.lastKeyPress === "w") {
      this.direction = "up";
      this.y -= this.tileSize;
    }
    if (this.lastKeyPress === "s") {
      this.direction = "down";
      this.y += this.tileSize;
    }
    if (this.lastKeyPress === "a") {
      this.direction = "left";
      this.x -= this.tileSize;
    }
    if (this.lastKeyPress === "d") {
      this.direction = "right";
      this.x += this.tileSize;
    }
  }
}
