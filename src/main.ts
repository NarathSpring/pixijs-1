
import Game from './lib/Game'

// const player = require("../public/assets/explorer.png").default;

// function init() {
//   const app = new PIXI.Application({
//     width: 512,
//     height: 384,
//     view: <HTMLCanvasElement>document.getElementById("app")
//   });

//   const explorer = new PIXI.Sprite(PIXI.Texture.from(player));
//   explorer.position.set(112, 160);

//   window.addEventListener(
//     "keydown",
//     (e) => {
//       console.log(e);
//       if (e.keyCode === 68) {
//         explorer.x += 16;
//       }
//     },
//     false
//   );

//   const map = new MapGenerater();
//   const box = new BoxGenerater();
//   app.stage.addChild(map);
//   app.stage.addChild(explorer);
//   app.stage.addChild(box);
// }

// init();
const game= new Game()
// console.log(game);
