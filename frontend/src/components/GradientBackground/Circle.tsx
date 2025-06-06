interface PageWrapperProps {
  diameter: number;
  top: number;
  left: number;
  color: string;
  blur: number;
}

const Circle = ({ diameter, top, left, color, blur }: PageWrapperProps) => {
  return (
    <div
      style={{
        width: `${diameter}vw`,
        height: `${diameter}vw`,
        top: `${top}vw`,
        left: `${left}vw`,
        backgroundColor: `${color}`,
        filter: `blur(${blur}px)`,
      }}
      className="absolute rounded-full z"
    ></div>
  );
};

export default Circle;
