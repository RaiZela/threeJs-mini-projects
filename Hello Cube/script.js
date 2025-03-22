import * as THREE from "../three/three.js-master/build/three.module.min.js";

//Scene Objects Camera Renderer

//Scene
const scene = new THREE.Scene();

//Group
const group = new THREE.Group();

//Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);

mesh.position.z = 1;
//scene.add(mesh);

//Mesh
const geometryT = new THREE.BoxGeometry(1, 1, 1);
const materialT = new THREE.MeshBasicMaterial({ color: "green" });
const meshT = new THREE.Mesh(geometryT, materialT);
meshT.position.y = 2;
//scene.add(meshT);

group.add(mesh, meshT);
group.position.x = 1;
scene.add(group);

//Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height); //near value is 1 and far value is 2000
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

//Renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(aspect.width, aspect.height);
renderer.render(scene, camera);
