import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import CopyIcon from "../Icons/CopyIcon";
type Props = {
  code: string;
  filename?: string;
};

const CodeHighlighter = ({ code, filename = "" }: Props) => {
  const codeRef = useRef(null);
  const [textValue, setTextValue] = useState("");
  const [showIcon, setShowIcon] = useState(true);

  function copyText(text: string) {
    try {
      if (typeof navigator.clipboard !== "undefined") {
        navigator.clipboard.writeText(text).then(() => {
          console.log("Copied text: ", text);
          setShowIcon(false);
          setTimeout(() => {
            setShowIcon(true);
          }, 2000);
        });
        return false;
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
    const codeElement = document.getElementById("code");
    if (codeElement) {
      const value = (codeElement as HTMLElement).textContent;
      setTextValue(`${value}`);
    }
  }, [code]);

  return (
    <div className="px-1 py-2 flex items-center justify-center">
      <div className="w-[800px] max-w-full overflow-hidden rounded-md">
        <div className="min-h-[40px] bg-[#101010] border-b border-slate-700/60 flex items-center justify-between p-2">
          <span className="text-slate-400 font-mono">{filename}</span>
          <button
            onClick={() => copyText(textValue)}
            className="text-slate-400 cursor-pointer"
          >
            {showIcon ? <CopyIcon dimension={20}/> : <span className="text-emerald-400 italic">Copied!</span>}
          </button>
        </div>
        <pre className="overflow-auto">
          <code id="code" className="overflow-auto" ref={codeRef}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeHighlighter;
