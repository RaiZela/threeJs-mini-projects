import "./style.css";
import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
//Scene Mesh Camera Renderer

//SCEENE
const scene = new THREE.Scene();

//MESH
const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2);
// const geometry = new THREE.BufferGeometry();
// const verticesArray = new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0]);

// const positionsAttributes = new THREE.BufferAttribute(verticesArray, 3);

// geometry.setAttribute("position", positionsAttributes);

const material = new THREE.MeshBasicMaterial({
  color: "purple",
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

//CAMERA
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 3;
scene.add(camera);

//RENDERER
const canvas = document.querySelector(".draw"); //select the canvas
const renderer = new THREE.WebGLRenderer({ canvas }); //add Webgl Renderer
renderer.setSize(aspect.width, aspect.height); //renderer size

//OrbitControls
const orbitControls = new OrbitControls(camera, canvas);

//mesh.position.x = 3; //per te par qe kamera rrotullohet rreth objektit dhe jo objekti ndaj vetes

//Resizing
window.addEventListener("resize", () => {
  //new size
  aspect.width = window.innerWidth;
  aspect.height = window.innerHeight;

  //new AspectRatio
  camera.aspect = aspect.width / aspect.height;
  camera.updateProjectionMatrix();

  //new RendererSize
  renderer.setSize(aspect.width, aspect.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
//Clock Class
const clock = new THREE.Clock();

const animate = () => {
  //GetElapsedTime => Calculate the time that has passed since the user has entereed the page
  const elapsedTime = clock.getElapsedTime();

  //Linear Function
  // mesh.position.x = Math.tan(elapsedTime);
  //mesh.position.y = Math.tan(elapsedTime);

  //Update.rotation on X axis
  //mesh.rotation.y = elapsedTime * 0.25; //the cube will rotate half a turn every second, so Math.PI is how much we want for the cube to rotate

  //tests
  //mesh.rotation.x += 0.01;
  //mesh.position.x += 0.01; //0.01*60fps=0.6 on X
  //mesh.position.y += 0.01;

  //renderer
  renderer.render(scene, camera);

  //RequestAnimationFrame
  window.requestAnimationFrame(animate);
};

animate();

//some devices will call the funtion 60 times per second (60fts) and others 120 times per second(120fts)
//fps => frames per second
