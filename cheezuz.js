import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import {GLTFLoader} from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
// Create Scene + Camera
const container = document.getElementById("app2");
const mainScene = new THREE.Scene();
const mainCamera = new THREE.PerspectiveCamera(
  45,
  container.offsetWidth / container.offsetHeight,
  0.1,
  20
);
mainCamera.position.set(0, 0.3, 1.2);
mainCamera.rotation.set(0, 0, -0.2);



// Add Point Lights

const ambientlight = new THREE.AmbientLight(0x943b41, 0.8);
mainScene.add(ambientlight);

const directionalLight = new THREE.DirectionalLight(0xffd4d7, 2);
directionalLight.position.set(6, 10, 5);
mainScene.add(directionalLight);



// Create Renderer

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(container.offsetWidth, container.offsetHeight);

renderer.physicallyCorrectLights = true;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.gammaFactor = 2.2;
container.appendChild(renderer.domElement);

// Load 3D Model

const loader = new GLTFLoader();
fetch(
  "https://uploads-ssl.webflow.com/637d37d31d152db9a1d8b984/63be42ff0d178c5b24c42ff0_cheese.glb.txt"
)
  .then((response) => response.arrayBuffer())
  .then((arrayBuffer) => {
    loader.parse(arrayBuffer, "", (gltfModel) => {
      mainScene.add(gltfModel.scene);

      const boundingBox = new THREE.Box3().setFromObject(gltfModel.scene);
      const center = new THREE.Vector3();
      boundingBox.getCenter(center);

      const pivot = new THREE.Object3D();
      pivot.position.set(0, 0, 0);
      mainScene.add(pivot);

      // Set the object's position relative to the pivot point
      gltfModel.scene.position.set(0, 0, 0);
      gltfModel.scene.scale.set(0.4,0.4,0.4);
      gltfModel.scene.rotation.set(-0.3,0,0);

      // Add the object as a child of the pivot point
      pivot.add(gltfModel.scene);

      gsap.registerPlugin(ScrollTrigger);

      pivot.add(gltfModel.scene);
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".skills__flexbox",
            start: "top-=43% top+=30% ",
            end: "bottom+=20% top+=31%",
                  markers: false,
                   scrub: 2
          }
        })

        .to(pivot.rotation, {
          y: 2 * Math.PI,
          ease: "Power2.easeInOut",
          duration: 20
        })
        .fromTo("#app2", { opacity: 0 }, { opacity: 1, duration: 5 }, "<")
        .to("#app2", { y: 500, duration: 20 }, "<")
        .to("#app2", { opacity: 0, scale: 0.9, duration: 5 });
    });
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
