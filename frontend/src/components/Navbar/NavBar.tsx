import SmallButton from "../Buttons/SmallButton";

const NavBar = () => {
  return (
    <div className="relative flex flex-row justify-between w-screen bg-[#030712] text-white font-bold py-4 px-10 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#36f4be] after:via-[#cc40ff] after:to-[#06bdff]">
      <div className="">
        <SmallButton path="/about">Alexandru-Cosmin Ciotîrnae</SmallButton>
      </div>
      <div className="flex flex-row gap-10">
        <SmallButton path="/about">About me</SmallButton>
        <SmallButton path="/about">CV</SmallButton>
        <SmallButton path="/about">Contact</SmallButton>
      </div>
    </div>
  );
};

export default NavBar;
