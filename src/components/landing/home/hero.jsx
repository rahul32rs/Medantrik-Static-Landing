import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Center, Html, useGLTF } from "@react-three/drei";

// 3D model component
function DeviceModel(props) {
  const { scene } = useGLTF("/3d-model/assembly_5.0_.glb");
  return (
    <Center position={[0, -0.1, 0]}>
      <primitive object={scene} scale={14} {...props} />
    </Center>
  );
}

useGLTF.preload("/3d-model/assembly_5.0_.glb");

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-white text-[#0b133c] min-h-screen flex items-center"
    >
      {/* page background blob (kept subtle) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[42rem] w-[42rem] rounded-[999px] bg-gradient-to-tr from-[#0b133c]/10 via-indigo-400/10 to-fuchsia-400/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: short details */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0b133c]/30 bg-[#0b133c]/5 px-3 py-1 text-xs text-[#0b133c]/80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Nodex 3d Model
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl bg-gradient-to-r from-[#0b133c] to-[#202a63] bg-clip-text text-transparent">
              Your Personal Lung<br />  Health Station
            </h1>
            <p className="text-[#1b244b]/80 leading-relaxed max-w-prose">
              Nodex is a smart, compact respiratory device that leverages AI for early lung disease detection and wellness tracking. A smart device for respiratory diagnosis, therapy, and training—designed for hospitals, patients, and everyday wellness users.
            </p>
       <div className="flex flex-wrap gap-3">
<Link
  to="/products"
  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#ff8a02] to-[#ff4d00] px-6 py-2.5 font-semibold text-white shadow-md shadow-orange-300/30 hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
>
  Explore Products
</Link>


  <Link
    to="/contact"
    className="inline-flex items-center justify-center rounded-2xl bg-transparent px-6 py-2.5 font-semibold text-[#0b133c] ring-1 ring-[#0b133c]/30 hover:bg-[#0b133c] hover:text-white hover:ring-[#0b133c] transition-all duration-300"
  >
    Get in Touch
  </Link>
</div>

          </div>

          {/* Right: 3D model */}
          <div className="relative">
            

            {/* Soft orange blurred circle behind the model */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-4 md:-top-10 h-95 w-64 sm:h-80 sm:w-80 md:h-[30rem] md:w-[30rem] rounded-full bg-orange-300/35 blur-3xl"
            />

            <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[410px] w-full rounded-[2rem]">
              <Canvas
                dpr={[1, 2]}
                camera={{ position: [0, 0.8, 2.5], fov: 45 }}
                shadows
                gl={{ alpha: true }} // make canvas background transparent
              >
                <ambientLight intensity={0.8} />
                <directionalLight position={[3, 3, 3]} intensity={1.4} castShadow />

                <Suspense fallback={<Html center className="text-[#0b133c]/80">Loading model…</Html>}>
                  <DeviceModel />
                  <Environment preset="city" />
                </Suspense>

                <OrbitControls
                  enablePan={false}
                  enableZoom={false} // zoom disabled as requested
                  enableDamping
                  dampingFactor={0.08}
                  minDistance={1}
                  maxDistance={5}
                  autoRotate
                  autoRotateSpeed={2.0}
                />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
