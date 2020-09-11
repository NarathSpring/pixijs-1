import * as PIXI from "pixi.js";
import Scene1 from "./Scene1";

import MapGenerater from "./MapGenerater";
import BoxGenerater from "./BoxGenerater";

export default class Game {
  constructor() {
    const app = new PIXI.Application({
      width: 512,
      height: 384,
      view: <HTMLCanvasElement>document.getElementById("app")
    });

    const scene1 = new Scene1();

    scene1.position.set(
      (app.screen.width - scene1.width) / 2,
      (app.screen.height - scene1.height) / 2
    );
    app.stage.addChild(scene1);
  }
}
