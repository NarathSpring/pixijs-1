import * as PIXI from "pixi.js";
import MapGenerater from "./MapGenerater";
import BoxGenerater from "./BoxGenerater";

export default class Scene1 extends PIXI.Container {
  constructor() {
    super();
    this.createMap();
    this.createBox();
    this.createPlayer();
    
  }

  private createMap() {
    const map = new MapGenerater();
    this.addChild(map);
  }

  private createBox() {
    const box = new BoxGenerater();
    this.addChild(box);
  }

  private createPlayer() {
    const playerUrl = require("../../public/assets/explorer.png").default;
    const player = new PIXI.Sprite(PIXI.Texture.from(playerUrl));
    player.position.set(16, 16);
    this.addChild(player);
  }
}
