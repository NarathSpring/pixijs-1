import * as PIXI from "pixi.js";

const wallBrick = require("../../public/assets/wall1.png").default;
const floorBrick = require("../../public/assets/blank.png").default;

export default class MapGenerater extends PIXI.Container {
  private wall: PIXI.Sprite = new PIXI.Sprite();

  constructor(public row?: number, public column?: number) {
    super();
    if (row && column) {
      this.setup(row, column);
    } else {
      this.setup(20, 20);
    }
  }

  private setup(row: number, column: number) {
    const step = 16;
    for (let x = 0; x < row; x++) {
      for (let y = 0; y < column; y++) {
        if (x === 0 || y === 0 || x === row - 1 || y === column - 1) {
          this.wall = new PIXI.Sprite(PIXI.Texture.from(wallBrick));
        } else {
          this.wall = new PIXI.Sprite(PIXI.Texture.from(floorBrick));
        }
        this.wall.x = x * step;
        this.wall.y = y * step;
        this.addChild(this.wall);
      }
    }
    // this.position.set(80, 32);
  }
}
