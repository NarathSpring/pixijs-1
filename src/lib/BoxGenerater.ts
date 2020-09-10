import * as PIXI from "pixi.js";

const boxBrick = require("../../public/assets/treasure.png").default;

export default class BoxGenerater extends PIXI.Sprite {
  constructor(public num?: number) {
    super();
    this.setup();
  }

  private setup() {
    const level = 1;
    for (let i = 1; i <= level * 1; i++) {
      const box = new PIXI.Sprite(PIXI.Texture.from(boxBrick));
      box.x = Math.floor(Math.random() * 18) * 16;
      box.y = Math.floor(Math.random() * 18) * 16;
      this.addChild(box);
    }
    this.position.set(96, 48);
  }
}
