import SmallButton from "../Buttons/SmallButton";

const NavBar = () => {
  return (
    <div className="flex flex-row w-screen bg-[#030712] gap-8 text-white font-bold mt-2 ml-2 py-3 px-4">
      <SmallButton path="/about">Alexandru-Cosmin Ciotîrnae</SmallButton>
      <SmallButton path="/projects">CV</SmallButton>
      <SmallButton path="/about">Projects</SmallButton>
      <SmallButton path="/about">Contact</SmallButton>
    </div>
  );
};

export default NavBar;
