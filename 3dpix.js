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
const loader = new GLTFLoader();
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
