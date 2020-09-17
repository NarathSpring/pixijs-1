import * as PIXI from "pixi.js";
import utils from "./utils";
import MapGenerater from "./MapGenerater";
import BoxGenerater from "./BoxGenerater";

interface Board extends PIXI.Graphics {
  id?: number;
}

export default class Scene1 extends PIXI.Container {
  private player: any;
  private box: any;
  private utils: utils = new utils();

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
    this.box = new BoxGenerater();
    this.addChild(this.box);
  }

  private createPlayer() {
    const playerUrl = require("../../public/assets/explorer.png").default;
    this.player = new PIXI.Sprite(PIXI.Texture.from(playerUrl));
    this.player.position.set(16, 16);
    // this.player.anchor.set(0.5, 0.5);
    this.player.width = 16;
    this.player.height = 16;

    this.addChild(this.player);
  }

  private createBoard() {
    const up: Board = new PIXI.Graphics();
    up.id = 1;
    up.beginFill(0x66ccff);
    up.drawRect(140, 400, 50, 50);
    up.interactive = true;
    up.on("tap", this.playerMove, this);

    const down: Board = new PIXI.Graphics();
    down.id = 2;
    down.beginFill(0x66ccff);
    down.drawRect(140, 470, 50, 50);
    down.interactive = true;
    down.on("tap", this.playerMove, this);

    const left: Board = new PIXI.Graphics();
    left.id = 3;
    left.beginFill(0x66ccff);
    left.drawRect(80, 430, 50, 50);
    left.interactive = true;
    left.on("tap", this.playerMove, this);

    const right: Board = new PIXI.Graphics();
    right.id = 4;
    right.beginFill(0x66ccff);
    right.drawRect(200, 430, 50, 50);
    right.interactive = true;
    right.on("tap", this.playerMove, this);

    this.addChild(up);
    this.addChild(down);
    this.addChild(left);
    this.addChild(right);
  }

  private playerMove(e) {
    let hitBox: PIXI.Sprite;
    switch (e.target.id) {
      case 1:
        this.player.y - 16 < 16
          ? (this.player.y = this.player.y)
          : (this.player.y -= 16);
        hitBox = this.checkHitBox();
        if (hitBox) {
          hitBox.y - 16 < 16 ? (hitBox.y = hitBox.y) : (hitBox.y -= 16);
        }
        break;
      case 2:
        this.player.y + 16 > 288
          ? (this.player.y = this.player.y)
          : (this.player.y += 16);
        hitBox = this.checkHitBox();
        if (hitBox) {
          hitBox.y + 16 > 288 ? (hitBox.y = hitBox.y) : (hitBox.y += 16);
        }
        break;
      case 3:
        this.player.x - 16 < 16
          ? (this.player.x = this.player.x)
          : (this.player.x -= 16);
        hitBox = this.checkHitBox();
        if (hitBox) {
          hitBox.x - 16 < 16 ? (hitBox.x = hitBox.x) : (hitBox.x -= 16);
        }
        break;
      case 4:
        this.player.x + 16 > 288
          ? (this.player.x = this.player.x)
          : (this.player.x += 16);
        hitBox = this.checkHitBox();
        if (hitBox) {
          hitBox.x + 16 > 288 ? (hitBox.x = hitBox.x) : (hitBox.x += 16);
        }
        break;
    }
  }

  private checkHitBox() {
    for (let i = 0; i < this.box.children.length; i++) {
      if (this.utils.hitCheck(this.player, this.box.children[i])) {
        return this.box.children[i];
      }
    }
  }
}
