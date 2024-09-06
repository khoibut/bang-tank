import Phaser from "phaser";
let keyA;
let keyD;
let keyW;
let keyS;
let keyShift;
export class Game extends Phaser.Scene {
    constructor() {
        super('Game');
        this.player=null
        this.speed=300
    }
    preload() {
        this.load.image('dude', 'assets/testPlayer.png');
        this.load.image('background', 'assets/bg.png');
    }
    create() {
        keyShift=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
        keyA=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.add.image(512, 384, 'background');
        this.player=this.physics.add.image(100, 450, 'dude');
    }
    update(){
        if(keyShift.isDown){
            this.speed=600;
        }else{
            this.speed=300;
        }
        if(keyA.isDown){
            this.player.setVelocityX(-this.speed);
        }
        if(keyD.isDown){
            this.player.setVelocityX(this.speed);
        }
        if(keyW.isDown){
            this.player.setVelocityY(-this.speed);
        }
        if(keyS.isDown){
            this.player.setVelocityY(this.speed);
        }
        this.input.keyboard.on('keyup', (event) => {
            if (event.key === 'a' || event.key === 'd') {
                this.player.setVelocityX(0);
            }
            if (event.key === 'w' || event.key === 's') {
                this.player.setVelocityY(0);
            }
        })
    }
}
