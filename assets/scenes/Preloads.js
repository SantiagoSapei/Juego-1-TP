import { FRUIT } from "../../utils/utils.js";
const { PINE, ORANGE, APPLE, STRAW } = FRUIT;

export default class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    this.load.image("Fondo_Tarde", "./assets/images/Fondo_tarde.jpg");
    this.load.image("ground", "./assets/images/pasto.png");
    this.load.image("ground2", "./assets/images/tierra.png");
    this.load.image("ninja", "./assets/images/ninja.png");
    this.load.image(ORANGE, "./assets/images/Orange.png");
    this.load.image(APPLE, "./assets/images/Apple.png");
    this.load.image(PINE, "./assets/images/Pinapple.png");
    this.load.image(STRAW, "./assets/images/Strawberry.png");
    this.load.image("game-over", "./assets/images/Game-Over.png");
    this.load.image("congrats", "./assets/images/Victoria.jpg");
  }

  create() {
    this.scene.start("game");
  }
}
