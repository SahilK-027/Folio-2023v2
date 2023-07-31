import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Environment} from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { Physics} from "@react-three/rapier";
import { Leva, useControls } from "leva";
import { Bubble } from "./components/Sphere";
import { HelloWorld } from "./components/HelloWorld";
import { Pointer } from "./components/Pointer";

THREE.ColorManagement.legacyMode = false;
const spheres = [...Array(45)].map(() => ({ scale: [0.75, 0.75, 1, 1, 1.25][Math.floor(Math.random() * 5)] }));

export const App = () => {
  const { aoColor, directionalLightColor, spotLightColor, bgColor } = useControls(
    {
      aoColor: "#8764ef",
      directionalLightColor: "#9687ff",
      spotLightColor: "#afaffc",
      bgColor: "#d5c6ff"
    },
  );

  return (
    <>
      <Leva />
      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
      >
        <color attach="background" args={[bgColor]} />
        <ambientLight intensity={1} />
        <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color={spotLightColor} castShadow shadow-mapSize={[512, 512]} />
        <directionalLight position={[0, 5, -4]} intensity={4} color={directionalLightColor} />
        <directionalLight position={[0, -15, -0]} intensity={4} color={directionalLightColor} />
        <Physics colliders gravity={[0, 0, 0]}>
          <Pointer />
          {spheres.map((props, i) => (
            <Bubble key={i} {...props} />
          ))}
          <Physics>
            <HelloWorld />
          </Physics>
        </Physics>
        <Environment files="/adamsbridge.hdr" />
        <EffectComposer disableNormalPass multisampling={0}>
          <N8AO color={aoColor} aoRadius={1} intensity={1} />
        </EffectComposer>
      </Canvas>
    </>
  );
};
