import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

// Create Scene + Camera
const container = document.getElementById("app");
const mainScene = new THREE.Scene();
const mainCamera = new THREE.PerspectiveCamera(
  65,
  container.offsetWidth / container.offsetHeight,
  0.1,
  1000
);
mainCamera.position.set(0, 0, 2);

// Add Point Lights

const ambientlight = new THREE.AmbientLight(0x77bf8a, 5);
mainScene.add(ambientlight);

const backLight = new THREE.PointLight(0x23ad66, 10, 10);
backLight.position.set(-5, 5, -5);
mainScene.add(backLight);

const fillLight = new THREE.PointLight(0x00aaff, 15, 100);
fillLight.position.set(-5, 0, 5);
mainScene.add(fillLight);

const keyLight = new THREE.PointLight(0xdb094f, 10, 50);
keyLight.position.set(5, 0, 0);
mainScene.add(keyLight);

// Create Renderer

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(container.offsetWidth, container.offsetHeight);
container.appendChild(renderer.domElement);

// Load 3D Model

const loader = new GLTFLoader(); 
fetch('https://uploads-ssl.webflow.com/637d37d31d152db9a1d8b984/63b3a62fe0edaf9fddfcac5a_xbox2.glb.txt')
  .then(response => response.arrayBuffer())
  .then((arrayBuffer) => {
    // use the GLTFLoader to load the GLB file
    const loader = new GLTFLoader();
    loader.parse(arrayBuffer, '', (gltfModel) => {
      // Add the model to the scene
      mainScene.add(gltfModel.scene);

      // Determine the center point of the object
      const boundingBox = new THREE.Box3().setFromObject(gltfModel.scene);
      const center = new THREE.Vector3();
      boundingBox.getCenter(center);

      // Create a pivot point for the model
      const pivot = new THREE.Object3D();
      pivot.position.set(center.x, center.y, center.z);
      mainScene.add(pivot);

      // Set the object's position relative to the pivot point
      gltfModel.scene.position.set(0, 0, -0.7);
      gltfModel.scene.scale.set(1.3, 1.3, 1.3);

      // Add the object as a child of the pivot point
      pivot.add(gltfModel.scene);

      // Enable the ScrollTrigger plugin and create the timeline
    gsap.timeline({
      scrollTrigger: {
        trigger: ".skills__flexbox",
        start: "top-=70% top+=20%",
        end: "bottom-=20% top+=21%",
        scrub: 2,
        toggleActions: "play none none reverse",
        markers: false
      }
    })

.fromTo("#app",      
            
              { opacity:0, y: -200 },
              { opacity:1, y: 100, duration: 9 }           
            )

    .fromTo(pivot.rotation,
      
              { y: 0 },
              { y: 2 * Math.PI, ease: "Power2.easeInOut", duration: 10 },
            
            "<"
            )
            
            .to("#app",      
            
            { scale: 0.7, opacity:0, duration: 5 }           
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
