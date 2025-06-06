import type { ReactNode } from "react";
import Circle from "./Circle";

interface PageWrapperProps {
  children: ReactNode;
}

const GradientBackground = ({ children }: PageWrapperProps) => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-[#030712] overflow-hidden z-[-1]">
        {/*
      <Circle
        top={5}
        left={25}
        diameter={10}
        color="#8268CB"
        blur={30}
      ></Circle>
      <Circle
        top={10}
        left={2}
        diameter={25}
        color="#80ffdb"
        blur={70}
      ></Circle>
      <Circle
        top={30}
        left={22}
        diameter={20}
        color="#00BCFF"
        blur={50}
      ></Circle>

      <Circle
        top={8}
        left={70}
        diameter={15}
        color="#00BCFF"
        blur={50}
      ></Circle>
      <Circle
        top={25}
        left={78}
        diameter={10}
        color="#00BCFF"
        blur={30}
      ></Circle>
      <Circle
        top={25}
        left={56}
        diameter={25}
        color="#8268CB"
        blur={50}
      ></Circle>
      */}
        <Circle
          top={-5}
          left={15}
          diameter={25}
          color="#8268CB"
          blur={80}
        ></Circle>
        <Circle
          top={15}
          left={-5}
          diameter={32}
          color="#80ffdb"
          blur={100}
        ></Circle>
        <Circle
          top={35}
          left={28}
          diameter={15}
          color="#00BCFF"
          blur={70}
        ></Circle>

        <Circle
          top={0}
          left={60}
          diameter={25}
          color="#00BCFF"
          blur={80}
        ></Circle>
        <Circle
          top={25}
          left={60}
          diameter={35}
          color="#8268CB"
          blur={80}
        ></Circle>
        <Circle
          top={25}
          left={82}
          diameter={12}
          color="#80ffdb"
          blur={30}
        ></Circle>
      </div>
      {children}
    </>
  );
};

export default GradientBackground;
