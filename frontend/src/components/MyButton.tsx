import { useNavigate } from "react-router";

interface MyButtonProps {
  children: React.ReactNode;
  path: string;
}

const MyButton = ({ children, path }: MyButtonProps) => {
  const navigate = useNavigate();

  const handleNavigation = (navigationPath: string) => {
    navigate(navigationPath);
  };

  return (
    <div className="relative inline-flex  group">
      <div className="absolute transitiona-all duration-500 opacity-50 -inset-px bg-gradient-to-r from-[#80ffdb] via-[#FF44EC] to-[#3a0ca3] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-300 animate-tilt"></div>
      <button
        className="py-2 px-4 rounded-lg relative font-semibold text-white 0 bg-gray-900"
        onClick={() => handleNavigation(path)}
      >
        {children}
      </button>
    </div>
  );
};

export default MyButton;
