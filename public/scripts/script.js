let controllers = []

let controller;

let canvas;

function setup() {
  canvas = createCanvas(innerWidth, innerHeight, WEBGL);
  background(120,0,0)
  noStroke()
  window.addEventListener("gamepadconnected", function(e) {
  gamepadHandler(e, true);
  console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index, e.gamepad.id,
    e.gamepad.buttons.length, e.gamepad.axes.length);      
  });
	window.addEventListener("gamepaddisconnected", function(e) {
  console.log("Gamepad disconnected from index %d: %s",
    e.gamepad.index, e.gamepad.id);      
    colour=color(120,0,0)
    gamepadHandler(e, false);
  });
  controller = new Controller(navigator.getGamepads()[0]);
}

function windowResized(){
  resizeCanvas(innerWidth, innerHeight);
}

function draw() {
	background(0,0,0);
  controller.update(navigator.getGamepads()[0]);

  

  
}

function gamepadHandler(event, connecting) {
  let gamepad = event.gamepad;
  if (connecting) {
 		 print("Connecting to controller "+gamepad.index)
    controllers[gamepad.index] = gamepad
  } else {
    delete controllers[gamepad.index]
  }
}
