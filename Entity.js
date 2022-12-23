export class Entity {
  x;
  y;
  tileSize;
  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    throw new Error("Abstract classes can't be instantiated.");
  }

  set position(position) {
    this.x = position.x * this.tileSize;
    this.y = position.y * this.tileSize;
  }

  get position() {
    return { x: this.x, y: this.y };
  }
}
