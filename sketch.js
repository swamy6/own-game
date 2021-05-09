var canvas, backgroundImg;
var gameState = 0;
var playerCount;
var allPlayers;
var database;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

var form, player, game;
function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
}
function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
 
  game.start();
  
}


function draw(){
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
