import * as THREE from "three"

import { resizeRendererToDisplaySize } from "./utils"

const canvas = document.getElementById("canvas") as HTMLCanvasElement

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })

const scene = new THREE.Scene()

// Initialize Camera
const camera = new THREE.PerspectiveCamera(75, 2, 0.01, 1000)
camera.position.z = 4
scene.add(camera)

// Starter Light
const color = 0xffffff
const intensity = 1
const light = new THREE.DirectionalLight(color, intensity)
light.position.set(-1, 2, 4)
scene.add(light)

// Starter Box
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const boxMaterial = new THREE.MeshStandardMaterial({
  color: "teal",
})
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)
scene.add(boxMesh)

function render(time: number) {
  requestAnimationFrame(render)

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement
    camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.updateProjectionMatrix()
  }

  boxMesh.rotation.y = boxMesh.rotation.y + (0.01 % (Math.PI * 2))
  renderer.render(scene, camera)
}

requestAnimationFrame(render)
