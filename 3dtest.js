Closure Compiler logo Closure CompilerREST API | Help
Add a URL:	
http://
 
Example: http://www.example.com/bigfile.js
Optimization:	 Whitespace only     Simple     Advanced
   Which optimization is right for my code?
Formatting:	 Pretty print     Print input delimiter
 	 Reset
// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level SIMPLE_OPTIMIZATIONS
// @formatting pretty_print
// ==/ClosureCompiler==
​
const container1 = document.getElementById("pixel");
const mainScene1 = new THREE.Scene();
const mainCamera1 = new THREE.PerspectiveCamera(65, container1.offsetWidth / container1.offsetHeight, 0.1, 20);
mainCamera1.position.set(0, 0, 0.5);
// Add Point Lights
const ambientlight1 = new THREE.AmbientLight(0x943b41, 0.5);
mainScene1.add(ambientlight1);
const directionallight1 = new THREE.DirectionalLight(0xffd4d7, 3);
directionallight1.position.set(6, 10, 5)
mainScene1.add(directionallight1);
// Create renderer1
const renderer1 = new THREE.WebGLrenderer(
{
        alpha: true
        , antialias: true
});
renderer1.setSize(container1.offsetWidth, container1.offsetHeight);
renderer1.physicallyCorrectLights = true;
renderer1.outputEncoding = THREE.sRGBEncoding;
renderer1.gammaFactor = 2.2;
container1.appendChild(renderer1.domElement);
// Load 3D Model
const loader = new GLTFLoader();
fetch('https://uploads-ssl.webflow.com/637d37d31d152db9a1d8b984/63b8e87646576d2b8794d0c1_pixelart.glb.txt')
        .then(response => response.arrayBuffer())
        .then((arrayBuffer) =>
 	Compilation was a success!
Original Size:	2.17KB gzipped (9.78KB uncompressed)
Compiled Size:	1.52KB gzipped (6.3KB uncompressed)
Saved 29.84% off the gzipped size (35.58% without gzip)
The code may also be accessed at default.js.

var container1 = document.getElementById("pixel"), mainScene1 = new THREE.Scene(), mainCamera1 = new THREE.PerspectiveCamera(65, container1.offsetWidth / container1.offsetHeight, 0.1, 20);
mainCamera1.position.set(0, 0, 0.5);
var ambientlight1 = new THREE.AmbientLight(9714497, 0.5);
mainScene1.add(ambientlight1);
var directionallight1 = new THREE.DirectionalLight(16766167, 3);
directionallight1.position.set(6, 10, 5);
mainScene1.add(directionallight1);
var renderer1 = new THREE.WebGLrenderer({alpha:!0, antialias:!0});
renderer1.setSize(container1.offsetWidth, container1.offsetHeight);
renderer1.physicallyCorrectLights = !0;
renderer1.outputEncoding = THREE.sRGBEncoding;
renderer1.gammaFactor = 2.2;
container1.appendChild(renderer1.domElement);
var loader = new GLTFLoader();
fetch("https://uploads-ssl.webflow.com/637d37d31d152db9a1d8b984/63b8e87646576d2b8794d0c1_pixelart.glb.txt").then(function(c) {
  return c.arrayBuffer();
}).then(function(c) {
  loader2.parse(c, "", function(b) {
    mainScene1.add(b.scene);
    var a = (new THREE.Box3()).setFromObject(b.scene), d = new THREE.Vector3();
    a.getCenter(d);
    a = new THREE.Object3D();
    a.position.set(0, 0, 0);
    mainScene1.add(a);
    b.scene.position.set(0, 0, -0.1);
    b.scene.rotation.set(-0.5, 0.1, 0.1);
    a.add(b.scene);
    gsap.timeline({scrollTrigger:{trigger:".about__container1", start:"top-=50% top+=30% ", end:"bottom top+=31%", markers:!1, scrub:2}}).to(a.rotation, {y:2 * Math.PI, ease:"Power2.easeInOut", duration:20}).fromTo("#pixel", {opacity:0}, {opacity:1, duration:5}, "<").to("#pixel", {y:100, duration:20}, "<").to("#pixel", {opacity:0, scale:0.9, duration:5});
  });
});
window.addEventListener("resize", function() {
  renderer1.setSize(container1.offsetWidth, container1.offsetHeight);
  mainCamera1.aspect = container1.offsetWidth / container1.offsetHeight;
  mainCamera1.updateProjectionMatrix();
});
function render() {
  renderer1.render(mainScene1, mainCamera1);
  requestAnimationFrame(render);
}
render();
var container2 = document.getElementById("app2"), mainScene2 = new THREE.Scene(), mainCamera2 = new THREE.PerspectiveCamera(90, container2.offsetWidth / container2.offsetHeight, 0.1, 1000);
mainCamera2.position.set(0, 2, 4);
var ambientlight2 = new THREE.AmbientLight(16777215, 0.5);
mainScene2.add(ambientlight2);
var fillLight = new THREE.PointLight(8016693, 15, 20);
fillLight.position.set(0, 1, 4);
mainScene2.add(fillLight);
var backLight = new THREE.PointLight(8016693, 6, 30);
backLight.position.set(2, 2, -2);
mainScene2.add(backLight);
var backLightleft = new THREE.PointLight(13074019, 3, 20);
backLightleft.position.set(-2, 2, -2);
mainScene2.add(backLightleft);
var rightLight = new THREE.PointLight(8016693, 6, 50);
rightLight.position.set(3, 3, 1);
mainScene2.add(rightLight);
var renderer2 = new THREE.WebGLRenderer({alpha:!0, antialias:!0});
renderer2.setSize(container2.offsetWidth, container2.offsetHeight);
renderer2.physicallyCorrectLights = !0;
renderer2.outputEncoding = THREE.sRGBEncoding;
renderer2.gammaFactor = 2.2;
container2.appendChild(renderer2.domElement);
fetch("https://uploads-ssl.webflow.com/637d37d31d152db9a1d8b984/63be218948f0a9084273ccc0_cheese.glb.txt").then(function(c) {
  return c.arrayBuffer();
}).then(function(c) {
  loader.parse(c, "", function(b) {
    mainScene2.add(b.scene);
    var a = (new THREE.Box3()).setFromObject(b.scene), d = new THREE.Vector3();
    a.getCenter(d);
    a = new THREE.Object3D();
    a.position.set(0, 0, 0);
    mainScene2.add(a);
    b.scene.position.set(0, 0, 0);
    b.scene.scale.set(1, 1, 1);
    a.add(b.scene);
    gsap.timeline({scrollTrigger:{trigger:".skills__flexbox", start:"top-=43% top+=30% ", end:"bottom+=20% top+=31%", markers:!1, scrub:3}}).fromTo("#app2", {opacity:0, y:-150}, {opacity:1, y:100, duration:9}).fromTo(a.rotation, {y:0}, {y:2 * Math.PI, ease:"Power2.easeInOut", duration:10}, "<").to("#app2", {scale:0.7, opacity:0, duration:5});
  });
});
window.addEventListener("resize", function() {
  renderer2.setSize(container2.offsetWidth, container2.offsetHeight);
  mainCamera2.aspect = container2.offsetWidth / container2.offsetHeight;
  mainCamera2.updateProjectionMatrix();
});
function render() {
  renderer2.render(mainScene2, mainCamera2);
  requestAnimationFrame(render);
}
render();
var container3 = document.getElementById("app"), mainScene3 = new THREE.Scene(), mainCamera3 = new THREE.PerspectiveCamera(65, container3.offsetWidth / container3.offsetHeight, 0.1, 1000);
mainCamera3.position.set(0, 0, 2);
var ambientlight3 = new THREE.AmbientLight(7847818, 5);
mainScene3.add(ambientlight3);
var backlight3 = new THREE.PointLight(2338150, 10, 10);
backlight3.position.set(-5, 5, -5);
mainScene3.add(backlight3);
var fillLight3 = new THREE.PointLight(43775, 15, 100);
fillLight3.position.set(-5, 0, 5);
mainScene3.add(fillLight3);
var keylight3 = new THREE.PointLight(14354767, 10, 50);
keylight3.position.set(5, 0, 0);
mainScene3.add(keylight3);
var renderer3 = new THREE.WebGLRenderer({alpha:!0, antialias:!0});
renderer3.setSize(container3.offsetWidth, container3.offsetHeight);
container3.appendChild(renderer3.domElement);
var loader3 = new GLTFLoader();
fetch("https://uploads-ssl.webflow.com/637d37d31d152db9a1d8b984/63b3a62fe0edaf9fddfcac5a_xbox2.glb.txt").then(function(c) {
  return c.arrayBuffer();
}).then(function(c) {
  loader3.parse(c, "", function(b) {
    mainScene3.add(b.scene);
    var a = (new THREE.Box3()).setFromObject(b.scene), d = new THREE.Vector3();
    a.getCenter(d);
    a = new THREE.Object3D();
    a.position.set(d.x, d.y, d.z);
    mainScene3.add(a);
    b.scene.position.set(0, 0, -0.7);
    b.scene.scale.set(1.3, 1.3, 1.3);
    a.add(b.scene);
    gsap.timeline({scrollTrigger:{trigger:".skills__flexbox", start:"top-=70% top+=20%", end:"bottom-=20% top+=21%", scrub:2, toggleActions:"play none none reverse", markers:!1}}).fromTo("#app", {opacity:0, y:-200}, {opacity:1, y:100, duration:9}).fromTo(a.rotation, {y:0}, {y:2 * Math.PI, ease:"Power2.easeInOut", duration:10}, "<").to("#app", {scale:0.7, opacity:0, duration:5});
  });
});
window.addEventListener("resize", function() {
  renderer3.setSize(container3.offsetWidth, container3.offsetHeight);
  mainCamera3.aspect = container3.offsetWidth / container3.offsetHeight;
  mainCamera3.updateProjectionMatrix();
});
function render() {
  renderer3.render(mainScene3, mainCamera3);
  requestAnimationFrame(render);
}
render();
©2009 Google - Terms of Service - Privacy Policy - Google Home
