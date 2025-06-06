import SmallButton from "../Buttons/SmallButton";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between w-screen bg-[#030712] text-white font-bold py-4 px-8">
      <div className="">
        <SmallButton path="/about">Alexandru-Cosmin Ciotîrnae</SmallButton>
      </div>
      <div className="flex flex-row gap-6">
        <SmallButton path="/about">About me</SmallButton>
        <SmallButton path="/about">CV</SmallButton>
        <SmallButton path="/about">Contact</SmallButton>
      </div>
    </div>
  );
};

export default NavBar;
