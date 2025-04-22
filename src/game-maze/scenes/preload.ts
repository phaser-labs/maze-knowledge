import Phaser from 'phaser';

import { Game } from './game';

export class Preload extends Phaser.Scene {
  gameEvents: Phaser.Events.EventEmitter;
  constructor(gameEvents: Phaser.Events.EventEmitter) {
    super('Preload');
    this.gameEvents = gameEvents;
  }

  preload() {
    this.load.image('tileset', 'assets/dungeon.png');
    this.load.tilemapTiledJSON('map', 'assets/dungeon.json');
    this.load.spritesheet('player', '/assets/img/player.png', {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spritesheet('enemy', 'assets/img/enemy.png', {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.image('lives', 'assets/img/lives.png');

    this.load.image('A', 'assets/img/A.png');
    this.load.image('B', 'assets/img/B.png');
    this.load.image('D', 'assets/img/D.png');
    this.load.image('C', 'assets/img/C.png');

    this.load.image('sound', 'assets/img/volOn.png');
    this.load.image('mute', 'assets/img/volOff.png');
    this.load.image('control', 'assets/img/control.png');
    this.load.image('pregunta', 'assets/img/pregunta.png');

    this.load.image('end', 'assets/img/end.png');

    this.load.audio('music', 'assets/sounds/music.ogg');
    this.load.audio('success', 'assets/sounds/rise.ogg');
    this.load.audio('wrong', 'assets/sounds/bz.ogg');
    this.load.audio('lost', 'assets/sounds/lost.ogg');
    this.load.audio('hit', 'assets/sounds/hit.ogg');

    this.load.once('complete', () => {
      this.gameEvents.emit('preloadComplete');
    });
  }

  create() {
    // this.cameras.main.setBackgroundColor(0xfbfbfbd);

    this.gameEvents.on('startGame', (correctLetter: string) => {
      const gameScene = this.scene.get('Game') as Game;
      if (gameScene.gameOver) {
        gameScene.gameOver = false;
      }
      this.scene.start('Game', { correctLetter });
    });
  }
}
