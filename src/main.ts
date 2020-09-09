import * as PIXI from "pixi.js";
import TilingSprite from "./lib/createTilingSprite";
import MapGenerater from "./lib/MapGenerater"

const far = require("../public/assets/bg-far.png");
const mid = require("../public/assets/bg-mid.png");

function init() {
  const app = new PIXI.Application({
    width: 512,
    height: 384,
    view: <HTMLCanvasElement>document.getElementById("app")
  });

  // const fSprite = new TilingSprite(far.default, 512, 256);
  // const mSprite = new TilingSprite(mid.default, 512, 256);
  // mSprite.y = 152
 
  
  

  // fSprite
  //   .on("pointerdown", onDragStart)
  //   .on("pointerup", onDragEnd)
  //   .on("pointerupoutside", onDragEnd)
  //   .on("pointermove", onDragMove);

  // mSprite
  //   .on("pointerdown", onDragStart)
  //   .on("pointerup", onDragEnd)
  //   .on("pointerupoutside", onDragEnd)
  //   .on("pointermove", onDragMove);

  // app.stage.addChild(fSprite);
  // app.stage.addChild(mSprite);

  const map = new MapGenerater()

  app.stage.addChild(map)

  
}

function onDragStart(this, event: PIXI.InteractionEvent) {
  console.log(this);
  
  this.data = event.data;
  const position = this.data.getLocalPosition(this);
  this.pivot.set(position.x, position.y);
  this.position.set(this.data.global.x, this.data.global.y);
  this.dragging = true;
}
function onDragEnd(this, event: PIXI.InteractionEvent) {
  this.dragging = false;
  this.data = null;
}
function onDragMove(this, event: PIXI.InteractionEvent) {
  if (this.dragging) {
    const newPosition = this.data.getLocalPosition(this.parent);
    console.log(newPosition);
    this.x = newPosition.x;
  }
}

init();
