import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

const container = document.getElementById("pixel");
const mainScene = new THREE.Scene();
const mainCamera = new THREE.PerspectiveCamera(
    65,
    container.offsetWidth / container.offsetHeight,
    0.1,
    20
  );
  mainCamera.position.set(0, 0, 0.5);

// Add Point Lights

const ambientlight = new THREE.AmbientLight(0x943b41, 0.5);
mainScene.add(ambientlight);

const directionalLight = new THREE.DirectionalLight( 0xffd4d7, 3 );
directionalLight.position.set(6, 10, 5)
mainScene.add( directionalLight );

// Create Renderer

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(container.offsetWidth, container.offsetHeight);

renderer.physicallyCorrectLights = true;
renderer.outputEncoding =  THREE.sRGBEncoding;
renderer.gammaFactor =  2.2;
container.appendChild(renderer.domElement);


// Load 3D Model

const loader = new GLTFLoader(); 
fetch('https://uploads-ssl.webflow.com/637d37d31d152db9a1d8b984/63b8e87646576d2b8794d0c1_pixelart.glb.txt')
  .then(response => response.arrayBuffer())
  .then((arrayBuffer) => {

      loader.parse(arrayBuffer, '', (gltfModel) => {

      mainScene.add(gltfModel.scene);

      const boundingBox = new THREE.Box3().setFromObject(gltfModel.scene);
      const center = new THREE.Vector3();
      boundingBox.getCenter(center);

      const pivot = new THREE.Object3D();
      pivot.position.set(0, 0, 0);
      mainScene.add(pivot);
  
      // Set the object's position relative to the pivot point
      gltfModel.scene.position.set(0, 0, -0.1);
      gltfModel.scene.rotation.set(-0.5,0.1,0.1);
  
      // Add the object as a child of the pivot point
      pivot.add(gltfModel.scene);

      gsap.timeline({
        scrollTrigger: {
          trigger: ".about__container",
          start: "top-=50% top+=30% ",
          end: "bottom top+=31%",
          markers: true,
          scrub: 2
        }
      })

.fromTo(pivot.rotation, {y: 0, duration: 2}, {y: 0, duration: 2})
.fromTo(pivot.rotation, {y: 0, duration: 8}, {y: 2 * Math.PI, ease: "Power2.easeInOut", duration: 8})
.fromTo("#pixel", {opacity: 0, y: -100, duration: 2}, {opacity: 0, y: -100, duration: 2})
.fromTo("#pixel", {opacity: 0, y: -100, duration: 8}, {opacity: 1, y: 500, duration: 8});
        })
  });

  
// Render Scene
function render() {
  renderer.render(mainScene, mainCamera);
  requestAnimationFrame(render);
}
render();
