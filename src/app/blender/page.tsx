"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { BergeniaBow } from "../assets/Blender/BergeniaBow";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Socials from "../components/Socials";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { PerspectiveCamera } from "three";

export default function Blender() {
  function CameraLookAt() {
    const { camera } = useThree();

    useEffect(() => {
      camera.lookAt(0, 0, 1);
    }, [camera]);

    return null;
  }

  return (
    <main className="w-full flex justify-center fade-in">
      <div className="flex flex-col max-w-screen-xl mx-6 min-h-dvh">
        <div className="flex w-full justify-center">
          <Header />
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-4 md:mx-4">
          <div className="md:w-8/12">
            <div className="w-[600px] h-[600px]">
              <Canvas
                camera={{
                  position: [0, -2, 0],
                }}
              >
                <ambientLight intensity={5} />
                <OrbitControls enableZoom={true} />
                <CameraLookAt />
                <BergeniaBow />
              </Canvas>
            </div>
          </div>
          <div className="flex flex-col md:w-4/12 md:mx-6 gap-4">
            <p className="font-bold times italic text-6xl md:text-7xl text-white drop-shadow-[0_1.2px_1.2px_rgba(100,0,0,0.8)]">
              Blender Portfolio
            </p>
            <Socials />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
