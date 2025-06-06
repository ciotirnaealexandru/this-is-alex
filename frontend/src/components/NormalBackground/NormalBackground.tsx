import type { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

const NormalBackground = ({ children }: PageWrapperProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[#030712] overflow-hidden z-[-1]">
      {children}
    </div>
  );
};

export default NormalBackground;
