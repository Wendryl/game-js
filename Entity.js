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
}
