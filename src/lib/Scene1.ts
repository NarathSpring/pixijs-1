import * as PIXI from "pixi.js";
import MapGenerater from "./MapGenerater";
import BoxGenerater from "./BoxGenerater";

interface Board extends PIXI.Graphics {
  id?: number;
}

export default class Scene1 extends PIXI.Container {
  private player: any;

  constructor() {
    super();
    this.createMap();
    this.createBox();
    this.createPlayer();
    this.createBoard();
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
    this.player = new PIXI.Sprite(PIXI.Texture.from(playerUrl));
    this.player.position.set(16, 16);
    // this.player.width = 21;
    // this.player.height = 32;
    this.player.hitArea = new PIXI.Rectangle(0, 0, 21, 32);
    // console.log(this.player.getBounds());
    console.log(this.player);

    this.addChild(this.player);
  }

  private createBoard() {
    const up: Board = new PIXI.Graphics();
    up.id = 1;
    up.beginFill(0x66ccff);
    up.drawRect(140, 400, 50, 50);
    up.interactive = true;
    up.on("tap", this.playerMove, this.player);

    const down: Board = new PIXI.Graphics();
    down.id = 2;
    down.beginFill(0x66ccff);
    down.drawRect(140, 470, 50, 50);
    down.interactive = true;
    down.on("tap", this.playerMove, this.player);

    const left: Board = new PIXI.Graphics();
    left.id = 3;
    left.beginFill(0x66ccff);
    left.drawRect(80, 430, 50, 50);
    left.interactive = true;
    left.on("tap", this.playerMove, this.player);

    const right: Board = new PIXI.Graphics();
    right.id = 4;
    right.beginFill(0x66ccff);
    right.drawRect(200, 430, 50, 50);
    right.interactive = true;
    right.on("tap", this.playerMove, this.player);

    this.addChild(up);
    this.addChild(down);
    this.addChild(left);
    this.addChild(right);
  }

  private playerMove(e) {
    switch (e.target.id) {
      case 1:
        this.y - 20 < 16 ? (this.y = this.y) : (this.y -= 20);
        break;
      case 2:
        this.y + 20 > 276 ? (this.y = this.y) : (this.y += 20);
        break;
      case 3:
        this.x - 20 < 16 ? (this.x = this.x) : (this.x -= 20);
        break;
      case 4:
        this.x + 20 > 280 ? (this.x = this.x) : (this.x += 20);
        break;
    }
  }
}
