import PIXI from "pixi.js";

export default class CreateTilingSprite extends PIXI.Sprite {
  private textureX: PIXI.Texture;
  private sprite: PIXI.Sprite;

  constructor(
    public imgUrl: string,
    public width: number,
    public height: number
  ) {
    super()
    this.textureX = PIXI.Texture.from(imgUrl);
    this.sprite = new PIXI.TilingSprite(this.texture, width, height);
  }
}
