import { useNavigate } from "react-router";

interface SmallButtonProps {
  children: React.ReactNode;
  path: string;
}

const SmallButton = ({ children, path }: SmallButtonProps) => {
  const navigate = useNavigate();

  const handleNavigation = (navigationPath: string) => {
    navigate(navigationPath);
  };

  return (
    <div className="relative inline-flex  group">
      <div className="absolute transitiona-all duration-500 opacity-0 -inset-px bg-gradient-to-r from-[#36f4be] via-[#cc40ff] to-[#06bdff] rounded-lg blur-md group-hover:opacity-90 group-hover:-inset-0.5 group-hover:duration-300 animate-tilt"></div>
      <button
        className="hover:cursor-pointer text-lg py-2 px-4 rounded-lg relative font-semibold text-white 0 bg-[#030712]"
        onClick={() => handleNavigation(path)}
      >
        {children}
      </button>
    </div>
  );
};

export default SmallButton;
