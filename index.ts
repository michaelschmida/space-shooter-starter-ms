import "./style.css";
import p5 = require('p5');

import { Asteroid } from "./asteroid";
import { Laser, ShotType } from "./laser";
import { Explosion } from "./explosion";
import { Spaceship } from "./spaceship";
import { Stars } from "./stars";
import { Shots } from "./shots";
import { Sounds } from "./sounds";
import { StartButton } from "./startButton";

export let p: p5;
new p5((p5: p5) => {
    p = p5;
    p.preload = preload;
    p.setup = setup;
    p.draw = draw;
    p.mouseClicked = mouseClicked;
  });

function preload() {
}

function setup() {
  p.createCanvas(500, 400 + 100);
}

function draw() {
  p.background("black");
}

function mouseClicked() {
}
