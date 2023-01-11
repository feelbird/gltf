import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
var container = document.getElementById("app"), mainScene = new THREE.Scene(), mainCamera = new THREE.PerspectiveCamera(65, container.offsetWidth / container.offsetHeight, 0.1, 1000);
mainCamera.position.set(0, 0, 2);
var ambientlight = new THREE.AmbientLight(7847818, 5);
mainScene.add(ambientlight);
var backLight = new THREE.PointLight(2338150, 10, 10);
backLight.position.set(-5, 5, -5);
mainScene.add(backLight);
var fillLight = new THREE.PointLight(43775, 15, 100);
fillLight.position.set(-5, 0, 5);
mainScene.add(fillLight);
var keyLight = new THREE.PointLight(14354767, 10, 50);
keyLight.position.set(5, 0, 0);
mainScene.add(keyLight);
var renderer = new THREE.WebGLRenderer({alpha:!0, antialias:!0});
renderer.setSize(container.offsetWidth, container.offsetHeight);
container.appendChild(renderer.domElement);
var loader = new GLTFLoader();
fetch("https://uploads-ssl.webflow.com/637d37d31d152db9a1d8b984/63b3a62fe0edaf9fddfcac5a_xbox2.glb.txt").then(function(d) {
  return d.arrayBuffer();
}).then(function(d) {
  (new GLTFLoader()).parse(d, "", function(b) {
    mainScene.add(b.scene);
    var a = (new THREE.Box3()).setFromObject(b.scene), c = new THREE.Vector3();
    a.getCenter(c);
    a = new THREE.Object3D();
    a.position.set(c.x, c.y, c.z);
    mainScene.add(a);
    b.scene.position.set(0, 0, -0.7);
    b.scene.scale.set(1.3, 1.3, 1.3);
    a.add(b.scene);
    gsap.timeline({scrollTrigger:{trigger:".skills__flexbox", start:"top-=70% top+=20%", end:"bottom-=20% top+=21%", scrub:2, toggleActions:"play none none reverse", markers:!1}}).fromTo("#app", {opacity:0, y:-200}, {opacity:1, y:100, duration:9}).fromTo(a.rotation, {y:0}, {y:2 * Math.PI, ease:"Power2.easeInOut", duration:10}, "<").to("#app", {scale:0.7, opacity:0, duration:5});
  });
});
window.addEventListener("resize", function() {
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  mainCamera.aspect = container.offsetWidth / container.offsetHeight;
  mainCamera.updateProjectionMatrix();
});
function render() {
  renderer.render(mainScene, mainCamera);
  requestAnimationFrame(render);
}
render();
