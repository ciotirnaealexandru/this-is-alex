import { useEffect, useState } from "react";

interface PageWrapperProps {
  diameter: number;
  top: number;
  left: number;
  color: string;
  blur: number;
  delay: number;
}

const Circle = ({
  diameter,
  top,
  left,
  color,
  blur,
  delay,
}: PageWrapperProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, delay * 1000); // convert seconds to ms
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      style={{
        width: `${diameter}vw`,
        height: `${diameter}vw`,
        top: `${top}vw`,
        left: `${left}vw`,
        backgroundColor: `${color}`,
        filter: `blur(${blur}px)`,
        transform: visible ? "translateY(0)" : "translateY(150vh)",
        transition: "transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
      className="absolute rounded-full"
    ></div>
  );
};

export default Circle;
