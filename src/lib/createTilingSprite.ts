import * as PIXI from "pixi.js";

export default class CreateTilingSprite extends PIXI.Sprite{
  public texture: PIXI.Texture;

  constructor(
    public imgUrl: string,
    public width: number,
    public height: number
  ) {
    super()
    this.texture = PIXI.Texture.from(imgUrl);
    new PIXI.TilingSprite(this.texture, width, height);
  }
}
