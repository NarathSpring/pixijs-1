import * as PIXI from "pixi.js";

const wallBrick = require("../../public/assets/wall1.png").default;
const floorBrick = require("../../public/assets/blank.png").default;

export default class MapGenerater extends PIXI.Container {
  constructor() {
    super();

    const map = new PIXI.Container();
    const step = 16;
    let wall: PIXI.Sprite;

    for (let x = 0; x < 20; x++) {
      for (let y = 0; y < 20; y++) {
        if (x === 0 || y === 0 || x === 19 || y === 19) {
          wall = new PIXI.Sprite(PIXI.Texture.from(wallBrick));
        } else {
          wall = new PIXI.Sprite(PIXI.Texture.from(floorBrick));
        }

        wall.x = x * step;
        wall.y = y * step;

        map.addChild(wall);
      }
    }
    map.position.set(80, 32);
    return map;
  }
}
