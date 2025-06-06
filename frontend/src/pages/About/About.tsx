import NavBar from "../../components/Navbar/NavBar";
import Markdown from "react-markdown";

const markdown = "# Hi, *Alex*!";

const About = () => {
  return (
    <div className="bg-blue-500 w-screen h-screen pt-0.5">
      <NavBar />
      <div className="prose">
        <Markdown>{markdown}</Markdown>
      </div>
    </div>
  );
};

export default About;
