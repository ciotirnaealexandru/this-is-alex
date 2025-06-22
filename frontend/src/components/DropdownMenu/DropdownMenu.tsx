import "./DropdownMenu.scss";
import MenuElement from "./MenuElement";

const DropdownMenu = () => {
  return (
    <div className="w-full h-full py-8 pr-4 pl-12">
      <MenuElement text="Who am I?" emoji="👋" open={true}>
        <MenuElement text="About me"></MenuElement>
        <MenuElement text="Experience"></MenuElement>
      </MenuElement>
      <MenuElement text="Software" emoji="💻" open={true}>
        <MenuElement text="Subarea 1" open={true}>
          <MenuElement text="Proiect 1"></MenuElement>
          <MenuElement text="Proiect 2"></MenuElement>
        </MenuElement>
        <MenuElement text="Subarea 2" open={true}>
          <MenuElement text="Proiect 1"></MenuElement>
          <MenuElement text="Proiect 2"></MenuElement>
        </MenuElement>
      </MenuElement>
      <MenuElement text="Hardware" emoji="🛠️" open={true}>
        <MenuElement text="Proiect 1"></MenuElement>
        <MenuElement text="Proiect 2"></MenuElement>
      </MenuElement>
      <MenuElement text="Electronics" emoji="⚡" open={true}>
        <MenuElement text="Nada"></MenuElement>
      </MenuElement>
    </div>
  );
};

export default DropdownMenu;
