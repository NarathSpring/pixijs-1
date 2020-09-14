import * as PIXI from "pixi.js";
import Scene1 from "./Scene1";

import MapGenerater from "./MapGenerater";
import BoxGenerater from "./BoxGenerater";

export default class Game extends PIXI.DisplayObject {
  constructor() {
    super();
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      view: <HTMLCanvasElement>document.getElementById("app")
    });

    const scene1 = new Scene1();
    scene1.position.set(
      (app.screen.width - scene1.width) / 2,
      (app.screen.height - scene1.height) / 3
    );
    app.stage.addChild(scene1);
  }
  keyboardEvent() {
    // window.addEventListener('keydown', () => { },false)
    // PIXI.utils.EventEmitter()
  }

}
