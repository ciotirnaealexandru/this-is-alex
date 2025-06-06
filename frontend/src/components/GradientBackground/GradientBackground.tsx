import type { ReactNode } from "react";
import "./GradientBackground.scss";

interface PageWrapperProps {
  children: ReactNode;
}

const GradientBackground = ({ children }: PageWrapperProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-900 ">
      {children}
    </div>
  );
};

export default GradientBackground;
