import MenuElement from "./MenuElement";

interface DropdownMenuProps {
  setArticle?(article: string): void;
}

const DropdownMenu = ({ setArticle }: DropdownMenuProps) => {
  return (
    <div className="w-full h-full py-8 pr-4 pl-12">
      <MenuElement text="Who am I?" emoji="👋" type="domain" open={true}>
        <MenuElement
          text="About me"
          type="article"
          article="Who_am_I/About_me.md"
          setArticle={setArticle}
        ></MenuElement>
        <MenuElement
          text="Experience"
          type="article"
          article="Who_am_I/Experience.md"
          setArticle={setArticle}
        ></MenuElement>
      </MenuElement>
      <MenuElement text="Software" emoji="💻" type="domain" open={true}>
        <MenuElement
          text="Holbein and linear transformations"
          type="article"
          article="Software/Holbein_and_linear_transformations.md"
          setArticle={setArticle}
        ></MenuElement>
      </MenuElement>
      <MenuElement text="Hardware" emoji="🛠️" type="domain" open={true}>
        <MenuElement
          text="Fake project without link"
          type="article"
          article="Hardware/Fake1.md"
          setArticle={setArticle}
        ></MenuElement>
        <MenuElement
          text="Another inexistent project"
          type="article"
          article="Hardware/Fake2.md"
          setArticle={setArticle}
        ></MenuElement>
      </MenuElement>
      <MenuElement text="Electronics" emoji="⚡" type="domain" open={true}>
        <MenuElement
          text="8-bit computer"
          type="article"
          article="Electronics/8-bit_computer.md"
          setArticle={setArticle}
        ></MenuElement>
      </MenuElement>
    </div>
  );
};

export default DropdownMenu;
