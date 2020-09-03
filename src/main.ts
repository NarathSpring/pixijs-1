import * as PIXI from "pixi.js";
import CreateTilingSprite from "./lib/createTilingSprite.ts";

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

  // const f = PIXI.Texture.from(far.default);
  // const fSprite = new PIXI.TilingSprite(f, 512, 384);
  // fSprite.x = 0;
  // fSprite.y = 0;
  // app.stage.addChild(fSprite);

  // const m = PIXI.Texture.from(mid.default);
  // const mSprite = new PIXI.TilingSprite(m, 512, 256);
  // mSprite.x = 0;
  // mSprite.y = 128;
  // mSprite.interactive = true;
  // app.stage.addChild(mSprite);
  const mSprite = new CreateTilingSprite(mid, 512, 256);

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
