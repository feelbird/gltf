import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import {GLTFLoader} from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
const container1 = document.getElementById("app2");
const mainScene1 = new THREE.Scene();
const mainCamera1 = new THREE.PerspectiveCamera(
  45,
  container1.offsetWidth / container1.offsetHeight,
  0.1,
  20
);
mainCamera1.position.set(0, 0.3, 1.2);
mainCamera1.rotation.set(0, 0, -0.2);



// Add Point Lights

const ambientlight = new THREE.AmbientLight(0x943b41, 0.8);
mainScene.add(ambientlight);

const directionalLight = new THREE.DirectionalLight(0xffd4d7, 2);
directionalLight.position.set(6, 10, 5);
mainScene.add(directionalLight);

var fillLight = new THREE.PointLight(0xfc9003, 15, 100);
fillLight.position.set(5, 0, 5);
mainScene.add(fillLight);

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
fetch('https://uploads-ssl.webflow.com/637d37d31d152db9a1d8b984/63be218948f0a9084273ccc0_cheese.glb.txt')
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
                        gltfModel1.scene.position.set(0, 0, 0);
                        gltfModel1.scene.scale.set(0.4,0.4,0.4);
                        gltfModel1.scene.rotation.set(-0.3,0,0);
                        // Add the object as a child of the pivot1 point
                        pivot1.add(gltfModel1.scene);
                        gsap.timeline(
                                {
                                        scrollTrigger:
                                        {
                                          trigger: ".skills__flexbox",
                                          start: "top-=43% top+=30% ",
                                          end: "bottom+=20% top+=31%",
                                                markers: false,
                                                 scrub: 2
                                        }
                                })
                                .to(pivot1.rotation
                                , {
                                        y: 2 * Math.PI
                                        , ease: "Power2.easeInOut"
                                        , duration: 20
                                })
                                .fromTo("#app2"
                                , {
                                        opacity: 0
                                }
                                , {
                                        opacity: 1
                                        , duration: 5
                                }, "<")
                                .to("#app2"
                                , {
                                        y: 100
                                        , duration: 20
                                }, "<")
                                .to("#app2"
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
