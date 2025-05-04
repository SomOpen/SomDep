import CodeHighlighter from "../Components/CodeHighlighter";
import { useState, useEffect } from "react";
// @ts-ignore
import rawCode from "../Data/languages/javascript/code.js?raw";

export default function ContentPage() {
    const [code, setCode] = useState<string>("");

    useEffect(() => {
        setCode(rawCode);
    }, []);

    return (
        <CodeHighlighter code={code || "Loading..."}/>
    );
}
