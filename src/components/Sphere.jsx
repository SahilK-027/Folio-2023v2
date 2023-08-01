import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import { useControls, Leva, folder } from "leva";
import { BallCollider, RigidBody, CylinderCollider } from "@react-three/rapier";

const geometryTypes = {
  Sphere: new THREE.SphereGeometry(0.7, 32, 32),
  Box: new THREE.BoxGeometry(1, 1, 1),
  Cone: new THREE.ConeGeometry(0.7, 2, 32),
  Cylinder: new THREE.CylinderGeometry(0.5, 0.5, 1.2, 32),
  Dodecahedron: new THREE.DodecahedronGeometry(0.8),
  Icosahedron: new THREE.IcosahedronGeometry(1),
  Octahedron: new THREE.OctahedronGeometry(1),
  Tetrahedron: new THREE.TetrahedronGeometry(1),
  Torus: new THREE.TorusGeometry(0.7, 0.3, 32, 64),
};

function getRandomColor() {
  return new THREE.Color(Math.random(), Math.random(), Math.random());
}

export function Bubble({ vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread }) {
  const api = useRef();

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current.applyImpulse(
      vec
        .copy(api.current.translation())
        .normalize()
        .multiply({ x: -50 * delta * scale, y: -150 * delta * scale, z: -50 * delta * scale }),
    );
  });

  const bubbleColor2 = useMemo(() => getRandomColor(), []);
  // Create dynamic colors for bauble and emission using leva
  const { bubbleColor, emissionColor } = useControls({
    bubbleColor: "#ad91ff",
    emissionColor: "#7f2eff",
  });

  // Create the baubleMaterial with the dynamic colors
  const bubbleMaterial = new THREE.MeshLambertMaterial({
    color: bubbleColor2,
    emissive: emissionColor,
  });

  // Use Leva `select` function to create a control for selecting the geometry type
  const { geometryType } = useControls(
    {
      geometryType: {
        value: "Sphere", // Default geometry is Sphere
        options: Object.keys(geometryTypes), // Options for the select dropdown
      },
    },
    { collapsed: true } // Optional: Hide the control panel by default
  );

  return (
    <RigidBody linearDamping={0.75} angularDamping={0.15} friction={0.2} position={[r(20), r(20) - 25, r(20) - 10]} ref={api} colliders={"hull"} dispose={null}>
      <BallCollider args={[scale]} />
      <CylinderCollider rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 1.2 * scale]} args={[0.15 * scale, 0.275 * scale]} />
      <mesh castShadow receiveShadow scale={scale} geometry={geometryTypes[geometryType]} material={bubbleMaterial} />
    </RigidBody>
  );
}
