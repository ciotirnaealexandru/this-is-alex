import NormalBackground from "../../components/NormalBackground/NormalBackground";
import NavBar from "../../components/Navbar/NavBar";
import Markdown from "react-markdown";

import Test from "../../articles/Test.md?raw";

const Projects = () => {
  return (
    <NormalBackground>
      <NavBar />

      <div className="flex flex-row w-full h-full">
        {/* The title column*/}
        <div className="bg-[#030712] w-lg"></div>
        <div className="pt-16 px-16 max-w-none w-full prose prose-invert overflow-auto">
          <Markdown>{Test}</Markdown>
        </div>
      </div>
    </NormalBackground>
  );
};

export default Projects;
