import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

// Create Scene + Camera
const container = document.getElementById("app2");
const mainScene = new THREE.Scene();
const mainCamera = new THREE.PerspectiveCamera(
  90,
  container.offsetWidth / container.offsetHeight,
  0.1,
  1000
);
mainCamera.position.set(0, 2, 4);

const ambientlight = new THREE.AmbientLight(0xFFFFFF, 0.5);
mainScene.add(ambientlight);

const fillLight = new THREE.PointLight(0x7a5335, 15, 20);
fillLight.position.set(0,1,4);
mainScene.add(fillLight);

const backLight = new THREE.PointLight(0x7a5335, 6, 30);
backLight.position.set(2, 2, -2);
mainScene.add(backLight);

const backLightleft = new THREE.PointLight(0xc77e63, 3, 20);
backLightleft.position.set(-2, 2, -2);
mainScene.add(backLightleft);

const rightLight = new THREE.PointLight(0x7a5335, 6, 50);
rightLight.position.set(3,3,1);
mainScene.add(rightLight);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(container.offsetWidth, container.offsetHeight);

renderer.physicallyCorrectLights = true;
renderer.outputEncoding =  THREE.sRGBEncoding;
renderer.gammaFactor =  2.2;
container.appendChild(renderer.domElement);
// Load 3D Model
const loader = new GLTFLoader(); 
fetch('https://uploads-ssl.webflow.com/637d37d31d152db9a1d8b984/63be218948f0a9084273ccc0_cheese.glb.txt')
  .then(response => response.arrayBuffer())
  .then((arrayBuffer) => {

    const loader = new GLTFLoader();
    loader.parse(arrayBuffer, '', (gltfModel) => {

      mainScene.add(gltfModel.scene);

      const boundingBox = new THREE.Box3().setFromObject(gltfModel.scene);
      const center = new THREE.Vector3();
      boundingBox.getCenter(center);

      const pivot = new THREE.Object3D();
      pivot.position.set(0, 0, 0);
      mainScene.add(pivot);

      gltfModel.scene.position.set(0, 0, 0);
      gltfModel.scene.scale.set(1, 1, 1);
      pivot.add(gltfModel.scene);
      gsap.timeline({
        scrollTrigger: {
          trigger: ".skills__flexbox",
          start: "top-=43% top+=30% ",
          end: "bottom+=20% top+=31%",
          markers: false,
          scrub: 3
        }
      })
.fromTo("#app2",      
            
              { opacity:0, y: -150 },
              { opacity:1, y: 100, duration: 9 }           
            )
    .fromTo(pivot.rotation,{ y: 0 },{ y: 2 * Math.PI, ease: "Power2.easeInOut", duration: 10 },
       "<")
            .to("#app2",{ scale: 0.7, opacity:0, duration: 5 }           
          );
        })
  });

window.addEventListener("resize", function () {
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  mainCamera.aspect = container.offsetWidth / container.offsetHeight;
  mainCamera.updateProjectionMatrix();
});
// Render Scene
function render() {
  renderer.render(mainScene, mainCamera);
  requestAnimationFrame(render);
}
render();
