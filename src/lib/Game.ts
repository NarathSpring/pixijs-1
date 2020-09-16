import * as PIXI from "pixi.js";
import Scene1 from "./Scene1";

export default class Game extends PIXI.Application {
  constructor() {
    super();
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      view: <HTMLCanvasElement>document.getElementById("app")
    });

    this.gameStart(app);

    const restart = new PIXI.Text("restart", {
      fontSize: 36,
      fill: "#ffffff"
    });
    restart.anchor.set(0.5, 0.5);
    restart.position.set(app.view.width / 2, 700);
    restart.interactive = true;
    restart.on("tap", () => {
      app.stage.removeChild();
      this.gameStart(app);
    });
    app.stage.addChild(restart);
  }

  private gameStart(app: PIXI.Application) {
    const scene1 = new Scene1();
    scene1.position.set(
      (app.screen.width - scene1.width) / 2,
      (app.screen.height - scene1.height) / 3
    );
    app.stage.addChild(scene1);
  }
}
