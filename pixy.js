import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import
{
        OrbitControls
}
from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import
{
        GLTFLoader
}
from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
const container = document.getElementById("pixel"),
        mainScene = new THREE.Scene,
        mainCamera = new THREE.PerspectiveCamera(65, container.offsetWidth / container.offsetHeight, .1, 20);
mainCamera.position.set(0, 0, .5);
const ambientlight = new THREE.AmbientLight(9714497, .5);
mainScene.add(ambientlight);
const directionalLight = new THREE.DirectionalLight(16766167, 3);
directionalLight.position.set(6, 10, 5), mainScene.add(directionalLight);
const renderer = new THREE.WebGLRenderer(
{
        alpha: !0,
        antialias: !0
});
renderer.setSize(container.offsetWidth, container.offsetHeight), renderer.physicallyCorrectLights = !0, renderer.outputEncoding = THREE.sRGBEncoding, renderer.gammaFactor = 2.2, container.appendChild(renderer.domElement);
const loader = new GLTFLoader;

function render()
{
        renderer.render(mainScene, mainCamera), requestAnimationFrame(render)
}
fetch("https://uploads-ssl.webflow.com/637d37d31d152db9a1d8b984/63b8e87646576d2b8794d0c1_pixelart.glb.txt")
        .then(e => e.arrayBuffer())
        .then(e =>
        {
                loader.parse(e, "", e =>
                {
                        mainScene.add(e.scene);
                        const t = (new THREE.Box3)
                                .setFromObject(e.scene),
                                n = new THREE.Vector3;
                        t.getCenter(n);
                        const r = new THREE.Object3D;
                        r.position.set(0, 0, 0), mainScene.add(r), e.scene.position.set(0, 0, -.1), e.scene.rotation.set(-.5, .1, .1), r.add(e.scene), gsap.timeline(
                                {
                                        scrollTrigger:
                                        {
                                                trigger: ".about__container",
                                                start: "top-=20% top+=10% ",
                                                end: "bottom+=10% top+=10%",
                                                markers: !1,
                                                scrub: 2
                                        }
                                })
                                .to(r.rotation,
                                {
                                        y: 2 * Math.PI,
                                        ease: "Power2.easeInOut",
                                        duration: 20
                                })
                                .fromTo("#pixel",
                                {
                                        opacity: 0
                                },
                                {
                                        opacity: 1,
                                        duration: 5
                                }, "<")
                                .to("#pixel",
                                {
                                        y: 100,
                                        duration: 20
                                }, "<")
                                .to("#pixel",
                                {
                                        opacity: 0,
                                        scale: .9,
                                        duration: 5
                                })
                })
        }), window.addEventListener("resize", function()
        {
                renderer.setSize(container.offsetWidth, container.offsetHeight), mainCamera.aspect = container.offsetWidth / container.offsetHeight, mainCamera.updateProjectionMatrix()
        }), render();
