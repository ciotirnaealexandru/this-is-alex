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
      <div className="absolute transitiona-all duration-500 opacity-0 -inset-px bg-gradient-to-r from-[#80ffdb] via-[#ff44ec] to-[#3a0ca3] rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-300 animate-tilt"></div>
      <button
        className="hover:cursor-pointer text-xl py-2 px-4 rounded-lg relative font-semibold text-white 0 bg-[#030712]"
        onClick={() => handleNavigation(path)}
      >
        {children}
      </button>
    </div>
  );
};

export default SmallButton;
