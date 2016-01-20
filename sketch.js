function setup() {
  createCanvas(250, 250, WEBGL);

}

function draw() {
  background(0);
  //move your mouse to change light direction
  var dirX = (mouseX / width - 0.5) *2;
  var dirY = (mouseY / height - 0.5) *(-2);
  directionalLight(250, 25, 50, 50, 10, 0.25);
  ambientMaterial(10);
  sphere(215);
  cone(100, 300);
  cone(300, 100);
  torus(mouseX, 70);
}