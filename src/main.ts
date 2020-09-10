import * as PIXI from "pixi.js";
import TilingSprite from "./lib/createTilingSprite";
import MapGenerater from "./lib/MapGenerater";
import BoxGenerater from "./lib/BoxGenerater";

const player = require("../public/assets/explorer.png").default;

function init() {
  const app = new PIXI.Application({
    width: 512,
    height: 384,
    view: <HTMLCanvasElement>document.getElementById("app")
  });

  const explorer = new PIXI.Sprite(PIXI.Texture.from(player));
  explorer.position.set(112, 160);


  let left = keyboard(37),
    up = keyboard(38),
    right = keyboard(39),
    down = keyboard(40);
  


  const map = new MapGenerater();
  const box = new BoxGenerater();
  app.stage.addChild(map);
  app.stage.addChild(explorer);
  app.stage.addChild(box);
}

interface myKey {
  code: number;
  isDown: boolean;
  isUp: boolean;
  press: any;
  release: any;
  downHandler: Function;
  upHandler: Function;
}

function keyboard(keyCode: number) {
  let key = {} as myKey;
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = (event) => {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };

  //The `upHandler`
  key.upHandler = (event) => {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };

  //Attach event listeners
  window.addEventListener("keydown", key.downHandler.bind(key), false);
  window.addEventListener("keyup", key.upHandler.bind(key), false);
  return key;
}

init();
