import './index.scss';
import Phaser from 'phaser';
import config from './src/config/phaser.config';
import Main from './src/scenes/main.scene';

new Phaser.Game({ ...config, scene: Main });