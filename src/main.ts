import * as PIXI from "pixi.js";
import path from "path";

const far = require("../public/assets/bg-far.png");
const mid = require("../public/assets/bg-mid.png");

// const loader = new PIXI.Loader();
// loader.add("far", far.default);

function init() {
  const app = new PIXI.Application({
    width: 512,
    height: 384,
    view: <HTMLCanvasElement>document.getElementById("app")
  });

  const f = PIXI.Texture.from(far.default);
  const fSprite = new PIXI.Sprite(f);
  fSprite.position.x = 0;
  fSprite.position.y = 0;
  app.stage.addChild(fSprite);

  const m = PIXI.Texture.from(mid.default);
  const mSprite = new PIXI.Sprite(m);
  mSprite.position.x = 0;
  mSprite.position.y = 128;
  app.stage.addChild(mSprite);
}

init();
