import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../Components/HackerRoom";
import CanvasLoader from "../Components/CanvasLoader";
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from "../Context";
import Target from "../Components/Target";
import ReactLogo from "../Components/ReactLogo";
import Rings from "../Components/Rings";
import Cube from "../Components/Cube";
import { Leva, useControls } from "leva";

const Hero = () => {

  // const x = useControls(
  //   'rings',{
  //     positionX: { value: 0, min: -20, max: 10, step: 0.1 },
  //     positionY: { value: 0, min: -10, max: 10, step: 0.1 },
  //     positionZ: { value: 0, min: -10, max: 10, step: 0.1 },
  //     scale: { value: 1, min: 0.1, max: 5, step: 0.1 }
  //   }
  // )

  const isSmall  = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen  w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3">
        <div className="w-full text-white flex flex-col justify-center items-center mt-10">
          <p className="text-2xl sm:text-3xl text-center">
            Hello, I'm Alabhya <span className="waving-hand text-3xl">👋</span>
          </p>
          <p className="text-[20px] sm:text-4xl  font-bold text-center text-gray_gradient p-2">
            A Full Stack Developer Who Work on Oxytocin <span className="text-red-600">♥️</span>
          </p>
        </div>

        <div className="w-full h-full absolute inset-0">
          {/* <Leva/> */}
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 25]} />

              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0,-Math.PI,0]} />
              
              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Rings position={sizes.ringPosition} />
                <Cube position={sizes.cubePosition} />
              </group>
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};
export default Hero;
