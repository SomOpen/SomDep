import { useEffect, useRef } from "react";
import hljs from "highlight.js";

const CodeHighlighter = ({ code }: { code: string }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  

  return (
    <div className="px-1 py-2 flex items-center justify-center">
      <div className="w-[800px] max-w-full overflow-hidden rounded-md">
      <div className="min-h-[40px] bg-[#101010]"></div>
        <pre className="overflow-auto">
          <code className="overflow-auto" ref={codeRef}>{code}</code>
        </pre>
    </div>
    </div>
  );
};

export default CodeHighlighter;
