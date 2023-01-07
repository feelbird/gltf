import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
const getShader = (id)=>document.getElementById(id).textContent;
console.clear();
let mouseX = 0, mouseY = 0;
			let windowHalfX = window.innerWidth / 2;
			let windowHalfY = window.innerHeight / 2;
		document.addEventListener( 'mousemove', onDocumentMouseMove );
function onDocumentMouseMove( event ) {
				mouseX = ( event.clientX - windowHalfX ) / 12;
				mouseY = ( event.clientY - windowHalfY ) / 12;
			}
class Test {
  constructor(){
  const VIEW_ANGLE = 15,
  ASPECT = window.innerWidth / window.innerHeight,
  NEAR = 0.1,
  FAR = 10000;
  this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
  this.camera.position.z = 15;
  this.scene  = new THREE.Scene();
  this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: scene});
  document.getElementById("js-canvas").appendChild(this.renderer.domElement);
  this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  this.controls.enableDamping = true;
  this.controls.dampingFactor = .2
  this.camera.position.set( 20, -20, 40 );
  this.controls.minDistance = 100;
  this.controls.maxDistance = 150;    
  this.controls.enableZoom = false;
  this.controls.enablePan = true;
  this.controls.minPolarAngle = 0;
  this.controls.maxPolarAngle = 3;
  this.controls.minAzimuthAngle = -8; // radians
  this.controls.maxAzimuthAngle = 3; // radians
  this.clock = new THREE.Clock();
  this.controls.enabled = false;    
  this.onResize = this.onResize.bind(this);
  this.onResize();
  window.addEventListener('resize', this.onResize);
  this.addObject();
  this.tick = this.tick.bind(this);
  this.tick();
}
 addObject(){
  const radius = 12;
  const geometry = new THREE.TorusBufferGeometry( radius, 3, 36, 200 );
  this.uniforms = {
  uRadius: new THREE.Uniform(radius),
  uTime: new THREE.Uniform(0),
  ...THREE.UniformsLib[ "lights" ],
  ...THREE.UniformsUtils.clone( THREE.ShaderLib.phong.uniforms)
};
const vertex = THREE.ShaderLib.phong.vertexShader.replace('#include <project_vertex>', getShader('project-vertex'));
const material = new THREE.ShaderMaterial({
	uniforms: this.uniforms,
	vertexShader: getShader('noise') + getShader('helpers')+ vertex,
  fragmentShader: THREE.ShaderLib.phong.fragmentShader.replace(
  '#include <color_fragment>', getShader('color-fragment')),
  lights: true
});
  const mesh = new THREE.Mesh(geometry,material);
  this.scene.add(mesh);
  const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.75 );
  console.log(directionalLight.position)
  directionalLight.position.z = 5;
  directionalLight.position.y = -2;
  directionalLight.position.x = -10;
  this.scene.add( directionalLight );
  directionalLight.position.x = -1;
  const light = new THREE.AmbientLight( 0xdddddd ); // soft white light
  this.scene.add( light );
  var HemisphereLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 0.5 );
  this.scene.add( HemisphereLight );
}
tick(){
  this.uniforms.uTime.value = this.clock.getElapsedTime();
  this.render();
  requestAnimationFrame(this.tick);
  this.controls.update();
}
render(){
this.camera.position.x += ( mouseX - this.camera.position.x ) * .01;
this.camera.position.y += ( - mouseY - this.camera.position.y ) * .01;
this.renderer.render(this.scene, this.camera)
}
onResize(){
this.camera.aspect = window.innerWidth / window.innerHeight;
this.camera.updateProjectionMatrix();
this.renderer.setSize(window.innerWidth, window.innerHeight);
 }
}

const t = new Test();
