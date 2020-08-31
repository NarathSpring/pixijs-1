// const PIXI = require("pixi.js/dist/pixi.js");
import * as PIXI from "pixi.js";
import path from "path";

function init() {

  const stage = new PIXI.Container();
  const renderer = PIXI.autoDetectRenderer({
    // @ts-ignore
    view: document.getElementById("app")
  });

  const farTexture = PIXI.Texture.from('../public/assets/bg-far.png')

  renderer.render(stage);
}

init();
