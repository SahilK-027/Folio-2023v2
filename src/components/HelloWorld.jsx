import { useControls } from "leva"
import { useThree } from "@react-three/fiber"
import { Center, MeshTransmissionMaterial, Text3D,Float } from "@react-three/drei"

export function HelloWorld() {
    const config = useControls({
      backside: false,
      samples: { value: 16, min: 1, max: 32, step: 1 },
      resolution: { value: 256, min: 64, max: 2048, step: 64 },
      transmission: { value: 0.95, min: 0, max: 1 },
      roughness: { value: 0.1, min: 0, max: 1, step: 0.01 },
      clearcoat: { value: 0.1, min: 0, max: 1, step: 0.01 },
      clearcoatRoughness: { value: 0.1, min: 0, max: 1, step: 0.01 },
      thickness: { value: 200, min: 0, max: 200, step: 0.01 },
      backsideThickness: { value: 200, min: 0, max: 200, step: 0.01 },
      ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
      chromaticAberration: { value: 1, min: 0, max: 1 },
      anisotropy: { value: 1, min: 0, max: 10, step: 0.01 },
      distortion: { value: 0, min: 0, max: 1, step: 0.01 },
      distortionScale: { value: 0.2, min: 0.01, max: 1, step: 0.01 },
      temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
      attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
      attenuationColor: '#ffffff',
      color: '#b474ff',
    })
    const { width, height } = useThree((state) => state.viewport)
    return (
      <>
        <Center rotation={[0.2, -0.2, 0]}>
          <Float
            speed={1}
            rotationIntensity={1.3}
            floatIntensity={1.3}
            floatingRange={[0, -0.1]}
          >
            <Text3D
              curveSegments={32}
              bevelEnabled
              bevelSize={0.04}
              bevelThickness={0.2}
              height={0.5}
              lineHeight={0.6}
              letterSpacing={-0.06}
              size={1.5}
              font="./inter_bold.json"
            >
              {`Hellø\nWørld`}
              <MeshTransmissionMaterial {...config} color={config.color} toneMapped={false} />
            </Text3D>
          </Float>
        </Center>
      </>
    )
  }