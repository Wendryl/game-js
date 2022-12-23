import { Entity } from "./Entity.js";

export class Food extends Entity {
  /**
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    super();
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(this.x, this.y, this.tileSize, this.tileSize);
  }
}
