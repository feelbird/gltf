import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import {GLTFLoader} from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
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
const loader2 = new GLTFLoader();
fetch('https://uploads-ssl.webflow.com/637d37d31d152db9a1d8b984/63b8e87646576d2b8794d0c1_pixelart.glb.txt')
        .then(response => response.arrayBuffer())
        .then((arrayBuffer) =>
        {
                loader2.parse(arrayBuffer, '', (gltfModel1) =>
                {
                        mainScene1.add(gltfModel1.scene);
                        const boundingBox = new THREE.Box3()
                                .setFromObject(gltfModel1.scene);
                        const center1 = new THREE.Vector3();
                        boundingBox.getCenter(center1);
                        const pivot1 = new THREE.Object3D();
                        pivot1.position.set(0, 0, 0);
                        mainScene1.add(pivot1);
                        // Set the object's position relative to the pivot1 point
                        gltfModel1.scene.position.set(0, 0, -0.1);
                        gltfModel1.scene.rotation.set(-0.5, 0.1, 0.1);
                        // Add the object as a child of the pivot1 point
                        pivot1.add(gltfModel1.scene);
                        gsap.timeline(
                                {
                                        scrollTrigger:
                                        {
                                                trigger: ".about__container1"
                                                , start: "top-=50% top+=30% "
                                                , end: "bottom top+=31%"
                                                , markers: false
                                                , scrub: 2
                                        }
                                })
                                .to(pivot1.rotation
                                , {
                                        y: 2 * Math.PI
                                        , ease: "Power2.easeInOut"
                                        , duration: 20
                                })
                                .fromTo("#pixel"
                                , {
                                        opacity: 0
                                }
                                , {
                                        opacity: 1
                                        , duration: 5
                                }, "<")
                                .to("#pixel"
                                , {
                                        y: 100
                                        , duration: 20
                                }, "<")
                                .to("#pixel"
                                , {
                                        opacity: 0
                                        , scale: 0.9
                                        , duration: 5
                                });
                })
        });
window.addEventListener("resize", function ()
{
        renderer1.setSize(container1.offsetWidth, container1.offsetHeight);
        mainCamera1.aspect = container1.offsetWidth / container1.offsetHeight;
        mainCamera1.updateProjectionMatrix();
});
// Render Scene
function render()
{
        renderer1.render(mainScene1, mainCamera1);
        requestAnimationFrame(render);
}
render();


// Create Scene 2 + Camera 2
const container2 = document.getElementById("app2");
const mainScene2 = new THREE.Scene();
const mainCamera2 = new THREE.PerspectiveCamera(
  90,
  container2.offsetWidth / container2.offsetHeight,
  0.1,
  1000
);
mainCamera2.position.set(0, 2, 4);

const ambientlight2 = new THREE.AmbientLight(0xFFFFFF, 0.5);
mainScene2.add(ambientlight2);

const fillLight = new THREE.PointLight(0x7a5335, 15, 20);
fillLight.position.set(0,1,4);
mainScene2.add(fillLight);

const backLight = new THREE.PointLight(0x7a5335, 6, 30);
backLight.position.set(2, 2, -2);
mainScene2.add(backLight);

const backLightleft = new THREE.PointLight(0xc77e63, 3, 20);
backLightleft.position.set(-2, 2, -2);
mainScene2.add(backLightleft);

const rightLight = new THREE.PointLight(0x7a5335, 6, 50);
rightLight.position.set(3,3,1);
mainScene2.add(rightLight);

const renderer2 = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer2.setSize(container2.offsetWidth, container2.offsetHeight);

renderer2.physicallyCorrectLights = true;
renderer2.outputEncoding =  THREE.sRGBEncoding;
renderer2.gammaFactor =  2.2;
container2.appendChild(renderer2.domElement);
// Load 3D Model
const loader2 = new GLTFLoader(); 
fetch('https://uploads-ssl.webflow.com/637d37d31d152db9a1d8b984/63be218948f0a9084273ccc0_cheese.glb.txt')
  .then(response => response.arrayBuffer())
  .then((arrayBuffer) => {

    loader2.parse(arrayBuffer, '', (gltfModel2) => {

      mainScene2.add(gltfModel2.scene);

      const boundingBox = new THREE.Box3().setFromObject(gltfModel2.scene);
      const center = new THREE.Vector3();
      boundingBox.getCenter(center);

      const pivot2 = new THREE.Object3D();
      pivot2.position.set(0, 0, 0);
      mainScene2.add(pivot2);

      gltfModel2.scene.position.set(0, 0, 0);
      gltfModel2.scene.scale.set(1, 1, 1);
      pivot2.add(gltfModel2.scene);
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
    .fromTo(pivot2.rotation,{ y: 0 },{ y: 2 * Math.PI, ease: "Power2.easeInOut", duration: 10 },
       "<")
            .to("#app2",{ scale: 0.7, opacity:0, duration: 5 }           
          );
        })
  });

window.addEventListener("resize", function () {
  renderer2.setSize(container2.offsetWidth, container2.offsetHeight);
  mainCamera2.aspect = container2.offsetWidth / container2.offsetHeight;
  mainCamera2.updateProjectionMatrix();
});
// Render Scene
function render() {
  renderer2.render(mainScene2, mainCamera2);
  requestAnimationFrame(render);
}
render();



// Create Scene 3 + Camera 3
const container3 = document.getElementById("app");
const mainScene3 = new THREE.Scene();
const mainCamera3 = new THREE.PerspectiveCamera(
  65,
  container3.offsetWidth / container3.offsetHeight,
  0.1,
  1000
);
mainCamera3.position.set(0, 0, 2);

// Add Point Lights

const ambientlight3 = new THREE.AmbientLight(0x77bf8a, 5);
mainScene3.add(ambientlight3);

const backlight3 = new THREE.PointLight(0x23ad66, 10, 10);
backlight3.position.set(-5, 5, -5);
mainScene3.add(backlight3);

const fillLight3 = new THREE.PointLight(0x00aaff, 15, 100);
fillLight3.position.set(-5, 0, 5);
mainScene3.add(fillLight3);

const keylight3 = new THREE.PointLight(0xdb094f, 10, 50);
keylight3.position.set(5, 0, 0);
mainScene3.add(keylight3);

// Create Renderer

const renderer3 = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer3.setSize(container3.offsetWidth, container3.offsetHeight);
container3.appendChild(renderer3.domElement);

// Load 3D Model

const loader3 = new GLTFLoader(); 
fetch('https://uploads-ssl.webflow.com/637d37d31d152db9a1d8b984/63b3a62fe0edaf9fddfcac5a_xbox2.glb.txt')
  .then(response => response.arrayBuffer())
  .then((arrayBuffer) => {
    // use the GLTFLoader to load the GLB file

    loader3.parse(arrayBuffer, '', (gltfModel3) => {
      // Add the model to the scene
      mainScene3.add(gltfModel3.scene);

      // Determine the center3 point of the object
      const boundingbox3 = new THREE.Box3().setFromObject(gltfModel3.scene);
      const center3 = new THREE.Vector3();
      boundingbox3.getCenter(center3);

      // Create a pivot3 point for the model
      const pivot3 = new THREE.Object3D();
      pivot3.position.set(center3.x, center3.y, center3.z);
      mainScene3.add(pivot3);

      // Set the object's position relative to the pivot3 point
      gltfModel3.scene.position.set(0, 0, -0.7);
      gltfModel3.scene.scale.set(1.3, 1.3, 1.3);

      // Add the object as a child of the pivot3 point
      pivot3.add(gltfModel3.scene);

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

    .fromTo(pivot3.rotation,
      
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
  renderer3.setSize(container3.offsetWidth, container3.offsetHeight);
  mainCamera3.aspect = container3.offsetWidth / container3.offsetHeight;
  mainCamera3.updateProjectionMatrix();
});

// Render Scene

function render() {
  renderer3.render(mainScene3, mainCamera3);
  requestAnimationFrame(render);
}
render();
