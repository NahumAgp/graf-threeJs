import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear geometría para los cubos (todos iguales)
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Crear 3 cubos con diferentes colores
const cube1 = new THREE.Mesh(
    geometry, 
    new THREE.MeshStandardMaterial({ color: 0xff0000 }) // Rojo
);
const cube2 = new THREE.Mesh(
    geometry, 
    new THREE.MeshStandardMaterial({ color: 0x00ff00 }) // Verde
);
const cube3 = new THREE.Mesh(
    geometry, 
    new THREE.MeshStandardMaterial({ color: 0x0000ff }) // Azul
);

// Posicionar los cubos con buena separación
cube1.position.set(-3, 0, 0);   // Izquierda
cube2.position.set(0, 0, 0);    // Centro
cube3.position.set(3, 0, 0);    // Derecha

// Agregar cubos a la escena
scene.add(cube1);
scene.add(cube2);
scene.add(cube3);

// Agregar una luz direccional y ajustar su posición
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Agregar luz ambiental para mejor iluminación
const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
scene.add(ambientLight);

// Posicionar la cámara
camera.position.z = 7;

// Función de animación con diferentes rotaciones para cada cubo
function animate() {
    // Cubo 1 (rojo): rota principalmente en eje X con velocidad media
    cube1.rotation.x += 0.02;
    cube1.rotation.y += 0.005;
    
    // Cubo 2 (verde): rota principalmente en eje Y con velocidad rápida
    cube2.rotation.x += 0.005;
    cube2.rotation.y += 0.03;
    
    // Cubo 3 (azul): rota principalmente en eje Z con velocidad lenta
    cube3.rotation.z += 0.015;
    cube3.rotation.x += 0.01;
    
    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);

// Manejar redimensionado de ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});