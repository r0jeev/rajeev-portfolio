import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/* =========================================================
   UNIQUE COLOUR PALETTE
========================================================= */

const PURPLE = "#8B5CF6";
const LIME = "#B8FF3D";
const CORAL = "#FF6B8A";
const DARK = "#0B0912";
const PANEL = "#15111F";

/* =========================================================
   MONITOR
========================================================= */

function Monitor() {
  const group = useRef<THREE.Group>(null);
  const scan = useRef<THREE.Mesh>(null);
  const pulse = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (group.current) {
      group.current.position.y =
        1.15 + Math.sin(t * 0.8) * 0.06;

      group.current.rotation.y =
        Math.sin(t * 0.35) * 0.025;
    }

    if (scan.current) {
      scan.current.position.y =
        -0.9 + ((t * 0.45) % 1.8);
    }

    if (pulse.current) {
      const scale =
        1 + Math.sin(t * 3) * 0.18;

      pulse.current.scale.setScalar(scale);
    }
  });

  return (
    <group
      ref={group}
      position={[0, 1.15, 0]}
    >
      {/* MONITOR BODY */}

      <mesh>
        <boxGeometry args={[5.4, 3.35, 0.32]} />

        <meshStandardMaterial
          color={DARK}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* SCREEN */}

      <mesh position={[0, 0, 0.19]}>
        <boxGeometry args={[5.05, 3.0, 0.05]} />

        <meshStandardMaterial
          color="#090810"
          emissive="#180D2B"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* SCREEN BORDER */}

      <mesh position={[0, 0, 0.23]}>
        <boxGeometry args={[5.12, 3.07, 0.025]} />

        <meshBasicMaterial
          color={PURPLE}
          transparent
          opacity={0.28}
        />
      </mesh>

      {/* ================= SCREEN UI ================= */}

      {/* Header */}

      <mesh position={[-1.55, 1.05, 0.24]}>
        <boxGeometry args={[1.7, 0.16, 0.025]} />

        <meshBasicMaterial color={LIME} />
      </mesh>

      <mesh position={[1.75, 1.05, 0.24]}>
        <boxGeometry args={[0.65, 0.12, 0.025]} />

        <meshBasicMaterial color={CORAL} />
      </mesh>

      {/* Main dashboard panels */}

      <mesh position={[-1.65, 0.35, 0.24]}>
        <boxGeometry args={[1.65, 1.05, 0.025]} />

        <meshBasicMaterial
          color={PANEL}
        />
      </mesh>

      <mesh position={[0.25, 0.35, 0.24]}>
        <boxGeometry args={[1.65, 1.05, 0.025]} />

        <meshBasicMaterial
          color={PANEL}
        />
      </mesh>

      <mesh position={[1.95, 0.35, 0.24]}>
        <boxGeometry args={[1.0, 1.05, 0.025]} />

        <meshBasicMaterial
          color={PANEL}
        />
      </mesh>

      {/* Dashboard indicators */}

      <mesh position={[-2.15, 0.55, 0.27]}>
        <boxGeometry args={[0.65, 0.08, 0.03]} />

        <meshBasicMaterial color={LIME} />
      </mesh>

      <mesh position={[-2.15, 0.30, 0.27]}>
        <boxGeometry args={[0.95, 0.06, 0.03]} />

        <meshBasicMaterial color="#625A70" />
      </mesh>

      <mesh position={[-2.15, 0.10, 0.27]}>
        <boxGeometry args={[0.75, 0.06, 0.03]} />

        <meshBasicMaterial color="#625A70" />
      </mesh>

      {/* Network graph */}

      <mesh position={[0.25, 0.62, 0.27]}>
        <boxGeometry args={[1.1, 0.05, 0.03]} />

        <meshBasicMaterial color={PURPLE} />
      </mesh>

      <mesh position={[0.25, 0.35, 0.27]}>
        <boxGeometry args={[0.75, 0.05, 0.03]} />

        <meshBasicMaterial color={CORAL} />
      </mesh>

      <mesh position={[0.25, 0.08, 0.27]}>
        <boxGeometry args={[1.35, 0.05, 0.03]} />

        <meshBasicMaterial color={LIME} />
      </mesh>

      {/* Server status */}

      <mesh position={[1.95, 0.55, 0.27]}>
        <sphereGeometry args={[0.11, 16, 16]} />

        <meshBasicMaterial color={LIME} />
      </mesh>

      <mesh position={[1.95, 0.18, 0.27]}>
        <sphereGeometry args={[0.07, 16, 16]} />

        <meshBasicMaterial color={CORAL} />
      </mesh>

      {/* Bottom bars */}

      <mesh position={[-1.55, -0.75, 0.27]}>
        <boxGeometry args={[2.0, 0.08, 0.03]} />

        <meshBasicMaterial color="#413A4C" />
      </mesh>

      <mesh position={[0.75, -0.75, 0.27]}>
        <boxGeometry args={[1.4, 0.08, 0.03]} />

        <meshBasicMaterial color={PURPLE} />
      </mesh>

      {/* Animated scan line */}

      <mesh
        ref={scan}
        position={[0, -0.9, 0.29]}
      >
        <boxGeometry args={[4.7, 0.018, 0.025]} />

        <meshBasicMaterial
          color={LIME}
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* Monitor status light */}

      <mesh
        ref={pulse}
        position={[0, -1.55, 0.23]}
      >
        <sphereGeometry args={[0.045, 16, 16]} />

        <meshBasicMaterial color={LIME} />
      </mesh>

      {/* STAND */}

      <mesh position={[0, -1.95, 0]}>
        <boxGeometry args={[0.34, 0.9, 0.34]} />

        <meshStandardMaterial
          color="#15121D"
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>

      {/* BASE */}

      <mesh position={[0, -2.4, 0]}>
        <boxGeometry args={[1.8, 0.18, 0.8]} />

        <meshStandardMaterial
          color="#111018"
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   KEYBOARD
========================================================= */

function Keyboard() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (group.current) {
      group.current.position.y =
        -2.62 + Math.sin(t * 1.2) * 0.025;
    }
  });

  return (
    <group
      ref={group}
      position={[0, -2.62, 0.45]}
      rotation={[-0.12, 0, 0]}
    >
      {/* BODY */}

      <mesh>
        <boxGeometry args={[4.7, 0.24, 1.55]} />

        <meshStandardMaterial
          color="#111018"
          metalness={0.75}
          roughness={0.25}
        />
      </mesh>

      {/* KEYS */}

      {Array.from({ length: 48 }).map((_, i) => {
        const row = Math.floor(i / 12);
        const column = i % 12;

        const special =
          i % 11 === 0 ||
          i % 17 === 0;

        return (
          <mesh
            key={i}
            position={[
              -1.85 + column * 0.34,
              0.16,
              -0.48 + row * 0.31,
            ]}
          >
            <boxGeometry
              args={[0.25, 0.07, 0.21]}
            />

            <meshStandardMaterial
              color={
                special
                  ? LIME
                  : "#292431"
              }
              emissive={
                special
                  ? LIME
                  : "#000000"
              }
              emissiveIntensity={
                special ? 0.45 : 0
              }
            />
          </mesh>
        );
      })}

      {/* SPACE BAR */}

      <mesh position={[0, 0.16, -0.51]}>
        <boxGeometry
          args={[1.8, 0.07, 0.21]}
        />

        <meshStandardMaterial
          color="#453C50"
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   MOUSE
========================================================= */

function Mouse() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (group.current) {
      group.current.position.y =
        -2.35 + Math.sin(t * 1.3) * 0.025;

      group.current.rotation.z =
        Math.sin(t * 0.6) * 0.025;
    }
  });

  return (
    <group
      ref={group}
      position={[3, -2.35, 0.45]}
    >
      <mesh scale={[0.72, 0.42, 1]}>
        <sphereGeometry
          args={[0.62, 32, 20]}
        />

        <meshStandardMaterial
          color="#15121D"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Mouse LED */}

      <mesh position={[0, 0.27, 0.18]}>
        <boxGeometry
          args={[0.07, 0.025, 0.30]}
        />

        <meshBasicMaterial color={CORAL} />
      </mesh>
    </group>
  );
}

/* =========================================================
   FLOATING TECH PARTICLES
========================================================= */

function TechParticles() {
  const particles = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (particles.current) {
      particles.current.rotation.y =
        t * 0.05;

      particles.current.position.y =
        Math.sin(t * 0.35) * 0.08;
    }
  });

  return (
    <group ref={particles}>
      {Array.from({ length: 18 }).map(
        (_, i) => {
          const angle =
            (i / 18) * Math.PI * 2;

          const radius =
            3.5 + (i % 3) * 0.45;

          return (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * radius,
                ((i % 5) - 2) * 0.75,
                Math.sin(angle) * 1.2,
              ]}
            >
              <sphereGeometry
                args={[0.025 + (i % 3) * 0.015, 8, 8]}
              />

              <meshBasicMaterial
                color={
                  i % 3 === 0
                    ? LIME
                    : i % 3 === 1
                    ? CORAL
                    : PURPLE
                }
              />
            </mesh>
          );
        }
      )}
    </group>
  );
}

/* =========================================================
   DESK
========================================================= */

function Desk() {
  return (
    <>
      <mesh position={[0, -3.05, 0]}>
        <boxGeometry
          args={[7, 0.08, 3]}
        />

        <meshStandardMaterial
          color="#110D18"
          metalness={0.5}
          roughness={0.4}
        />
      </mesh>

      {/* Purple underglow */}

      <mesh position={[0, -3.10, -0.15]}>
        <boxGeometry
          args={[6.5, 0.02, 2.5]}
        />

        <meshBasicMaterial
          color={PURPLE}
          transparent
          opacity={0.12}
        />
      </mesh>
    </>
  );
}

/* =========================================================
   SCENE
========================================================= */

function Scene() {
  return (
    <>
      <ambientLight intensity={1.4} />

      <pointLight
        position={[4, 4, 5]}
        intensity={7}
        color={PURPLE}
      />

      <pointLight
        position={[-4, 2, 4]}
        intensity={5}
        color={LIME}
      />

      <pointLight
        position={[3, -2, 3]}
        intensity={3}
        color={CORAL}
      />

      <directionalLight
        position={[0, 5, 6]}
        intensity={2}
      />

      <Monitor />

      <Keyboard />

      <Mouse />

      <Desk />

      <TechParticles />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function Scene3D() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "570px",
      }}
    >
      <Canvas
        camera={{
          position: [0, 0.15, 10],
          fov: 42,
        }}
        dpr={[1, 1.25]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}