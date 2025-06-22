import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import rehypeRaw from "rehype-raw";

import { useState, useEffect } from "react";

const markdownFiles = import.meta.glob("../../articles/**/*.md", {
  query: "?raw",
});

interface ArticleProps {
  link: string;
}

const Article = ({ link }: ArticleProps) => {
  const [content, setContent] = useState<string>("Loading...");

  useEffect(() => {
    const path = `../../articles/${link}`;
    console.log({ path });

    const loader = markdownFiles[path];

    if (loader) {
      loader().then((mod: any) => setContent(mod.default));
    } else {
      setContent("Markdown file not found.");
    }
  }, [link]);

  return (
    <div className="max-w-none w-full h-full prose prose-invert overflow-y-auto add-custom-scrollbar">
      <div className="pr-16 py-16">
        <Markdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
        >
          {content}
        </Markdown>
      </div>
    </div>
  );
};

export default Article;
