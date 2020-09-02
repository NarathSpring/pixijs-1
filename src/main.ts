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
  const fSprite = new PIXI.TilingSprite(f, 512, 384);
  fSprite.x = 0;
  fSprite.y = 0;
  app.stage.addChild(fSprite);

  const m = PIXI.Texture.from(mid.default);
  const mSprite = new PIXI.TilingSprite(m, 512, 384);
  mSprite.x = 0;
  mSprite.y = 128;
  mSprite.interactive = true;
  app.stage.addChild(mSprite);

  mSprite
    .on("pointerdown", onDragStart)
    .on("pointerup", onDragEnd)
    .on("pointerupoutside", onDragEnd)
    .on("pointermove", onDragMove);
}

function mapMove(f: PIXI.Sprite, m: PIXI.Sprite) {
  f.position.x -= 0.128;
  m.position.x -= 0.64;
}

function onDragStart(this, event: PIXI.InteractionEvent) {
  console.log("拖拽开始");
  // console.log(event.data);
  this.data = event.data;
  this.dragging = true;
  this.anchor.set(0.5)
}
function onDragEnd(this, event: PIXI.InteractionEvent) {
  console.log("拖拽结束");
  // console.log(event.data);
  this.dragging = false;
  this.data = null;
}
function onDragMove(this, event: PIXI.InteractionEvent) {
  // console.log("正在拖拽");
  // console.log(event);
  if (this.dragging) {
    const newPosition = this.data.getLocalPosition(this.parent);
    this.x = newPosition.x;
    this.y = newPosition.y;
    
    // this.anchor.set(event.data.global.x, event.data.global.y);
  }
}

init();
