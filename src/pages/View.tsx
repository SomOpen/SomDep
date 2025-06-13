import { MDXProvider } from "@mdx-js/react";
import Post from "../data/py.mdx";
import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import "../styles/markdown.css"

const components = {
  h1: (props: string[]) => <h1 style={{ color: "tomato" }} {...props} />,
  pre: (props: string[]) => <pre className="hljs" {...props} />,
};

export default function View() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <MDXProvider components={components}>
      <div className="content">
        <Post />
      </div>
    </MDXProvider>
  );
}
