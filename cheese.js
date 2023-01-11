import*as THREE from"https://cdn.skypack.dev/three@0.129.0/build/three.module.js";import{OrbitControls}from"https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";import{GLTFLoader}from"https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";const container=document.getElementById("app2"),mainScene=new THREE.Scene,mainCamera=new THREE.PerspectiveCamera(90,container.offsetWidth/container.offsetHeight,.1,1e3);mainCamera.position.set(0,2,4);const ambientlight=new THREE.AmbientLight(16777215,.5);mainScene.add(ambientlight);const fillLight=new THREE.PointLight(8016693,15,20);fillLight.position.set(0,1,4),mainScene.add(fillLight);const backLight=new THREE.PointLight(8016693,6,30);backLight.position.set(2,2,-2),mainScene.add(backLight);const backLightleft=new THREE.PointLight(13074019,3,20);backLightleft.position.set(-2,2,-2),mainScene.add(backLightleft);const rightLight=new THREE.PointLight(8016693,6,50);rightLight.position.set(3,3,1),mainScene.add(rightLight);const renderer=new THREE.WebGLRenderer({alpha:!0,antialias:!0});renderer.setSize(container.offsetWidth,container.offsetHeight),renderer.physicallyCorrectLights=!0,renderer.outputEncoding=THREE.sRGBEncoding,renderer.gammaFactor=2.2,container.appendChild(renderer.domElement);const loader=new GLTFLoader;function render(){renderer.render(mainScene,mainCamera),requestAnimationFrame(render)}fetch("https://uploads-ssl.webflow.com/637d37d31d152db9a1d8b984/63be218948f0a9084273ccc0_cheese.glb.txt").then(e=>e.arrayBuffer()).then(e=>{(new GLTFLoader).parse(e,"",e=>{mainScene.add(e.scene);const t=(new THREE.Box3).setFromObject(e.scene),n=new THREE.Vector3;t.getCenter(n);const i=new THREE.Object3D;i.position.set(0,0,0),mainScene.add(i),e.scene.position.set(0,0,0),e.scene.scale.set(1,1,1),i.add(e.scene),gsap.timeline({scrollTrigger:{trigger:".skills__flexbox",start:"top-=43% top+=30% ",end:"bottom+=20% top+=31%",markers:!1,scrub:3}}).fromTo("#app2",{opacity:0,y:-150},{opacity:1,y:100,duration:9}).fromTo(i.rotation,{y:0},{y:2*Math.PI,ease:"Power2.easeInOut",duration:10},"<").to("#app2",{scale:.7,opacity:0,duration:5})})}),window.addEventListener("resize",function(){renderer.setSize(container.offsetWidth,container.offsetHeight),mainCamera.aspect=container.offsetWidth/container.offsetHeight,mainCamera.updateProjectionMatrix()}),render();
