import { Types, AUTO, Scale } from "phaser";
import GameHUD from "../Scene/GameHUD";
import GameScene from "../Scene/GameScene";
import PreloadScene from "../Scene/PreloadScene";

export type PhaserConfig = Types.Core.GameConfig;

const config: PhaserConfig = {
  title: "Explor.io",
  type: AUTO,
  scale: {
    parent: "phaser-app",
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
  fps: {
    forceSetTimeOut: true,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  backgroundColor: "#101010",
  scene: [PreloadScene, GameScene, GameHUD],
};

export default config;
