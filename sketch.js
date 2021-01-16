var NONE = 0;
var ESC = 1;
var F1 = 2;
var F2 = 3;
var F3 = 4;
var F4 = 5;
var F5 = 6;
var F6 = 7;
var F7 = 8;
var F8 = 9;
var F9 = 10;
var F10 = 11;
var F11 = 12;
var F12 = 13;

gameState = NONE;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(112)) {
    gameState = F1;
  }

  if(keyDown(113)) {
    gameState = F2;
  }
  
  if(keyDown(114)) {
    gameState = F3;
  }
  
  if(keyDown(115)) {
    gameState = F4;
  }
  
  if(keyDown(116)) {
    gameState = F5;
  }
  
  if(keyDown(117)) {
    gameState = F6;
  }
  
  if(keyDown(118)) {
    gameState = F7;
  }
  
  if(keyDown(119)) {
    gameState = F8;
  }
  
  if(keyDown(120)) {
    gameState = F9;
  }
  
  if(keyDown(121)) {
    gameState = F10;
  }
  
  if(keyDown(122)) {
    gameState = F11;
  }
  
  if(keyDown(123)) {
    gameState = F12;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }
  
  if(keyDown(27)) {
    gameState = ESC;
  }

  if(gameState === ESC) {
    textFont("Courier");
    textSize(100);
    textAlign(CENTER);
    fill(255);
    text("27", width/2, height/2);
  }

  if(gameState === F1) {
    textFont("Courier");
    textSize(100);
    textAlign(CENTER);
    fill(255);
    text("112", width/2, height/2);
  }
  
  if(gameState === F2) {
    textFont("Courier");
    textSize(100);
    textAlign(CENTER);
    fill(255);
    text("113", width/2, height/2);
  }
  
  if(gameState === F3) {
    textFont("Courier");
    textSize(100);
    textAlign(CENTER);
    fill(255);
    text("114", width/2, height/2);
  }
  
  if(gameState === F4) {
    textFont("Courier");
    textSize(100);
    textAlign(CENTER);
    fill(255);
    text("115", width/2, height/2);
  }
  
  if(gameState === F5) {
    textFont("Courier");
    textSize(100);
    textAlign(CENTER);
    fill(255);
    text("116", width/2, height/2);
  }
  
  if(gameState === F6) {
    textFont("Courier");
    textSize(100);
    textAlign(CENTER);
    fill(255);
    text("117", width/2, height/2);
  }
  
  if(gameState === F7) {
    textFont("Courier");
    textSize(100);
    textAlign(CENTER);
    fill(255);
    text("118", width/2, height/2);
  }
  
  if(gameState === F8) {
    textFont("Courier");
    textSize(100);
    textAlign(CENTER);
    fill(255);
    text("119", width/2, height/2);
  }
  
  if(gameState === F9) {
    textFont("Courier");
    textSize(100);
    textAlign(CENTER);
    fill(255);
    text("120", width/2, height/2);
  }
  
  if(gameState === F10) {
    textFont("Courier");
    textSize(100);
    textAlign(CENTER);
    fill(255);
    text("121", width/2, height/2);
  }
  
  if(gameState === F11) {
    textFont("Courier");
    textSize(100);
    textAlign(CENTER);
    fill(255);
    text("122", width/2, height/2);
  }
  
  if(gameState === F12) {
    textFont("Courier");
    textSize(100);
    textAlign(CENTER);
    fill(255);
    text("123", width/2, height/2);
  }
  
  if(gameState === F1) {
    textFont("Courier");
    textSize(100);
    textAlign(CENTER);
    fill(255);
    text("112", width/2, height/2);
  }
  
  if(gameState === F1) {
    textFont("Courier");
    textSize(100);
    textAlign(CENTER);
    fill(255);
    text("112", width/2, height/2);
  }
  
  if(gameState === F1) {
    textFont("Courier");
    textSize(100);
    textAlign(CENTER);
    fill(255);
    text("112", width/2, height/2);
  }
}