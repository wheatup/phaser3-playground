import Phaser from "phaser";

const config = {
   type: Phaser.AUTO,
   width: 800,
   height: 600,
   scale: {
      mode: Phaser.Scale.FIT,
      parent: 'phaser-example',
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 800,
      height: 600
   },
   physics: {
      default: 'arcade',
      arcade: {
         gravity: { y: 200 }
      }
   }
};

export default config;