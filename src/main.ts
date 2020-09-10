import * as PIXI from "pixi.js";
import TilingSprite from "./lib/createTilingSprite";
import MapGenerater from "./lib/MapGenerater";
import BoxGenerater from "./lib/BoxGenerater";

function init() {
  const app = new PIXI.Application({
    width: 512,
    height: 384,
    view: <HTMLCanvasElement>document.getElementById("app")
  });

  const map = new MapGenerater();
  const box = new BoxGenerater();
  app.stage.addChild(map);
  app.stage.addChild(box);
}

init();
