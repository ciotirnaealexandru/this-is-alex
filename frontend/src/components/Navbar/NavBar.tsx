import SmallButton from "../Buttons/SmallButton";
import { IoMenu } from "react-icons/io5";
import Constants from "../../Constants";

interface MenuProps {
  menu: boolean;
  setMenu(menu: boolean): void;
}

const NavBar = ({ menu, setMenu }: MenuProps) => {
  return (
    <div className="flex flex-row gap-5 px-5 md:px-10 justify-between w-screen bg-[#030712] text-white font-bold py-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#36f4be] after:via-[#cc40ff] after:to-[#06bdff]">
      <div className="flex flex-row items-center">
        {!Constants.IS_MOBILE_WIDTH ? (
          <SmallButton path="/about">Alexandru-Cosmin Ciotîrnae</SmallButton>
        ) : (
          <button
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <IoMenu className="text-2xl mx-4" />
          </button>
        )}
      </div>

      <div className="flex flex-row md:gap-10">
        <SmallButton path="/about">About me</SmallButton>
        <SmallButton path="/about">CV</SmallButton>
        <SmallButton path="/about">Contact</SmallButton>
      </div>
    </div>
  );
};

export default NavBar;
