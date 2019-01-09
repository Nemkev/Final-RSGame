import Konva from 'konva';
import { orksArr, spellAnimations, knightAnimation } from './index';

export default class Vizualization {
  constructor() {
    this.stage = new Konva.Stage({
      container: 'canvas',
      width: 1250,
      height: window.innerHeight * 0.6,
    });
    this.knightLayer = new Konva.Layer();
    this.knightSprite = new Image();
    this.knight = '';

    this.monsterLayer = new Konva.Layer();
    this.monsterSprite = new Image();
    this.monster = '';

    this.fireBallLayer = new Konva.Layer();
    this.fireBallSprite = new Image();
    this.fireBall = '';

    this.healLayer = new Konva.Layer();
    this.healSprite = new Image();
    this.heal = '';

    this.fireAttackLayer = new Konva.Layer();
    this.fireAttackSprite = new Image();
    this.fireAttack = '';

    this.preload();
  }

  preload() {
    this.knightSprite.src = './assets/sprites/knight_sprite.png';
    this.monsterSprite.src = './assets/sprites/monster_sprite.png';
    this.fireBallSprite.src = './assets/sprites/darkness_002.png';
    this.healSprite.src = './assets/sprites/heal_001.png';
    this.fireAttackSprite.src = './assets/sprites/thunder_002.png';
  }

  drawMonster() {
    const i = Math.round(Math.random() * 2);
    const j = Math.round(Math.random() * 2);
    const k = Math.round(Math.random() * 2);
    this.monsterLayer.clear();

    const leftHand = new Konva.Image({
      x: 900,
      y: 200,
      image: this.monsterSprite,
      width: orksArr.leftHand[i][2],
      height: orksArr.leftHand[i][3],
    });
    leftHand.crop({
      x: orksArr.leftHand[i][0],
      y: orksArr.leftHand[i][1],
      width: orksArr.leftHand[i][2],
      height: orksArr.leftHand[i][3],
    });
    this.monsterLayer.add(leftHand);

    const weapon = new Konva.Image({
      x: 760,
      y: 240,
      image: this.monsterSprite,
      width: orksArr.weapon[i][2],
      height: orksArr.weapon[i][3],
    });
    weapon.crop({
      x: orksArr.weapon[i][0],
      y: orksArr.weapon[i][1],
      width: orksArr.weapon[i][2],
      height: orksArr.weapon[i][3],
    });
    this.monsterLayer.add(weapon);

    const leftLeg = new Konva.Image({
      x: 980,
      y: 340,
      image: this.monsterSprite,
      width: orksArr.leftLeg[i][2],
      height: orksArr.leftLeg[i][3],
    });
    leftLeg.crop({
      x: orksArr.leftLeg[i][0],
      y: orksArr.leftLeg[i][1],
      width: orksArr.leftLeg[i][2],
      height: orksArr.leftLeg[i][3],
    });
    this.monsterLayer.add(leftLeg);

    const rightLeg = new Konva.Image({
      x: 1030,
      y: 340,
      image: this.monsterSprite,
      width: orksArr.rightLeg[i][2],
      height: orksArr.rightLeg[i][3],
    });
    rightLeg.crop({
      x: orksArr.rightLeg[i][0],
      y: orksArr.rightLeg[i][1],
      width: orksArr.rightLeg[i][2],
      height: orksArr.rightLeg[i][3],
    });
    this.monsterLayer.add(rightLeg);

    const body = new Konva.Image({
      x: 950,
      y: 160,
      image: this.monsterSprite,
      width: orksArr.body[j][2],
      height: orksArr.body[j][3],
    });
    body.crop({
      x: orksArr.body[j][0],
      y: orksArr.body[j][1],
      width: orksArr.body[j][2],
      height: orksArr.body[j][3],
    });
    this.monsterLayer.add(body);

    const head = new Konva.Image({
      x: 930,
      y: 80,
      image: this.monsterSprite,
      width: orksArr.head[k][2],
      height: orksArr.head[k][3],
    });
    head.crop({
      x: orksArr.head[k][0],
      y: orksArr.head[k][1],
      width: orksArr.head[k][2],
      height: orksArr.head[k][3],
    });
    this.monsterLayer.add(head);
    const amplitude = 5;
    const period = 2000;
    const anim = new Konva.Animation(((frame) => {
      head.setY(amplitude * Math.sin(frame.time * 2 * Math.PI / period) + 80);
    }), this.monsterLayer);

    anim.start();
    const rightHand = new Konva.Image({
      x: 1090,
      y: 210,
      image: this.monsterSprite,
      width: orksArr.rightHand[i][2],
      height: orksArr.rightHand[i][3],
    });
    rightHand.crop({
      x: orksArr.rightHand[i][0],
      y: orksArr.rightHand[i][1],
      width: orksArr.rightHand[i][2],
      height: orksArr.rightHand[i][3],
    });
    this.monsterLayer.add(rightHand);
    this.monsterLayer.add(rightHand);
    this.stage.add(this.monsterLayer);
    this.monsterLayer.draw();
  }

  drawKnight() {
    const animations = knightAnimation;
    this.knight = new Konva.Sprite({
      x: 50,
      y: 150,
      image: this.knightSprite,
      animation: 'idle',
      animations,
      frameRate: 7,
      frameIndex: 0,
    });
    this.knightLayer.add(this.knight);

    this.stage.add(this.knightLayer);

    this.knight.start();
  }

  setKnightAnimation(anim) {
    this.knight.setAnimation(anim);
  }

  drawFireBall() {
    const animations = {
      fire: spellAnimations.fireBall,
    };
    this.fireBall = new Konva.Sprite({
      x: 100,
      y: 100,
      image: this.fireBallSprite,
      animation: 'fire',
      animations,
      frameRate: 17,
      frameIndex: 0,
    });
    this.fireBallLayer.add(this.fireBall);
    this.stage.add(this.fireBallLayer);

    this.fireBall.start();
    this.fireBall.on('frameIndexChange', () => {
      if (this.fireBall.frameIndex() === 16) {
        setTimeout(() => {
          this.fireBall.stop();
          this.fireBallLayer.clear();
        }, 1000 / this.fireBall.frameRate());
      }
    });
  }

  drawHeal() {
    const animations = {
      heal: spellAnimations.heal,
    };
    this.heal = new Konva.Sprite({
      x: 100,
      y: 100,
      image: this.healSprite,
      animation: 'heal',
      animations,
      frameRate: 29,
      frameIndex: 0,
    });
    this.healLayer.add(this.heal);
    this.stage.add(this.healLayer);

    this.heal.start();
    this.heal.on('frameIndexChange', () => {
      if (this.heal.frameIndex() === 28) {
        setTimeout(() => {
          this.heal.stop();
          this.healLayer.clear();
        }, 1000 / this.heal.frameRate());
      }
    });
  }

  drawFireAttack() {
    const animations = {
      attack: spellAnimations.fireAttack,
    };
    this.fireAttack = new Konva.Sprite({
      x: 400,
      y: 100,
      image: this.fireAttackSprite,
      animation: 'attack',
      animations,
      frameRate: 29,
      frameIndex: 0,
    });
    this.fireAttackLayer.add(this.fireAttack);
    this.stage.add(this.fireAttackLayer);
    this.fireAttack.start();
    this.fireAttack.on('frameIndexChange', () => {
      if (this.fireAttack.frameIndex() === 28) {
        setTimeout(() => {
          this.fireAttack.stop();
          this.fireAttackLayer.clear();
        }, 1000 / this.fireAttack.frameRate());
      }
    });
  }
}
