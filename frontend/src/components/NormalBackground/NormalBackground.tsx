import type { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

const NormalBackground = ({ children }: PageWrapperProps) => {
  return (
    <div className="top-0 left-0 w-screen h-screen bg-[#0f131d] z-[-1]">
      {children}
    </div>
  );
};

export default NormalBackground;
