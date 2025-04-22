import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';

const CodeHighlighter = ({ code } : {code: string}) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <pre>
      <code ref={codeRef}>
        {code}
      </code>
    </pre>
  );
};

export default CodeHighlighter;
