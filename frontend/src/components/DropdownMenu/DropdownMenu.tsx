import "./DropdownMenu.scss";
import MenuElement from "./MenuElement";

const DropdownMenu = () => {
  return (
    <div className="w-full h-full py-4 px-4">
      <MenuElement text="💻 Software">
        <MenuElement text="Subarea 1">
          <MenuElement text="Proiect 1"></MenuElement>
          <MenuElement text="Proiect 2"></MenuElement>
        </MenuElement>
        <MenuElement text="Subarea 2">
          <MenuElement text="Proiect 1"></MenuElement>
          <MenuElement text="Proiect 2"></MenuElement>
        </MenuElement>
      </MenuElement>
      <MenuElement text="🤖 Hardware">
        <MenuElement text="Subarea 1">
          <MenuElement text="Proiect 1"></MenuElement>
          <MenuElement text="Proiect 2"></MenuElement>
        </MenuElement>
        <MenuElement text="Subarea 2">
          <MenuElement text="Proiect 1"></MenuElement>
          <MenuElement text="Proiect 2"></MenuElement>
        </MenuElement>
      </MenuElement>
      <MenuElement text="🔌 Electronics">
        <MenuElement text="Subarea 1">
          <MenuElement text="Proiect 1"></MenuElement>
          <MenuElement text="Proiect 2"></MenuElement>
        </MenuElement>
        <MenuElement text="Subarea 2">
          <MenuElement text="Proiect 1"></MenuElement>
          <MenuElement text="Proiect 2"></MenuElement>
        </MenuElement>
      </MenuElement>
    </div>
  );
};

export default DropdownMenu;
