import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import ErrorIcon from "../Icons/ErrorIcon";
import CodeHighlighter from "../Components/CodeHighlighter";

interface DeprecationInfo {
  id: string;
  name: string;
  language: string;
  category: string;
  deprecated_in: string;
  status: string;
  replacement: string;
  description: string;
  references: string[];
  example: string;
  tags: string[];
}

export default function ContentPage() {
  const { category, subcategory, content } = useParams();
  const [depInfo, setDepInfo] = useState<DeprecationInfo | null>(null);
  const [exampleCode, setExampleCode] = useState<string>("");
  const [errors, setErrors] = useState<any[]>([]);

  const depFiles = import.meta.glob("/src/Data/**/dep.json", { as: "raw" });
  const exampleFiles = import.meta.glob("/src/Data/**/example.*", { as: "raw" });

  useEffect(() => {
    if (!category || !subcategory || !content) return;

    const basePath = `/src/Data/${category}/${subcategory}/${content}`;
    const depPath = `${basePath}/dep.json`;
    const jsPath = `${basePath}/example.js`;
    const pyPath = `${basePath}/example.py`;

    const loadDep = async () => {
      const depLoader = depFiles[depPath];
      if (depLoader) {
        const raw = await depLoader();
        setDepInfo(JSON.parse(raw));
      } else {
        setErrors((prev) => [...prev, <div key={depPath} className="flex items-center gap-2"><ErrorIcon dimension={20}/> dep.json not found at {depPath}</div>]);
      }
    };

    const loadCode = async () => {
      const codeLoader = exampleFiles[jsPath] || exampleFiles[pyPath];
      if (codeLoader) {
        const raw = await codeLoader();
        setExampleCode(raw);
      } else {
        setErrors((prev) => [...prev, <div key={basePath} className="flex items-center gap-2"><ErrorIcon dimension={20}/> dep.json not found at {basePath}</div>]);
      }
    };

    loadDep();
    loadCode();
  }, [category, subcategory, content]);

  return (
    <Layout>
      <div className="p-6 max-w-4xl mx-auto space-y-8">
        {/* Error UI */}
        {errors.length > 0 && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md space-y-2">
            <h2 className="font-semibold text-lg font-mono">⚠️ Some files were not found:</h2>
            <ul className="flex flex-col gap-2 font-mono">
              {errors.map((err, idx) => (
                <li key={idx}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Content */}
        {depInfo && (
          <div className="bg-white border border-slate-200 shadow-md rounded-xl p-6 space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-slate-700">{depInfo.name}</h1>
              <p className="text-gray-600 text-sm">{depInfo.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
              <div><strong>Status:</strong> {depInfo.status}</div>
              <div><strong>Deprecated In:</strong> {depInfo.deprecated_in}</div>
              <div><strong>Replacement:</strong> {depInfo.replacement}</div>
              <div><strong>Language:</strong> {depInfo.language}</div>
              <div><strong>Category:</strong> {depInfo.category}</div>
              <div><strong>Tags:</strong> {depInfo.tags.join(", ")}</div>
              <div className="col-span-2">
                <strong>References:</strong>{" "}
                {depInfo.references.map((ref, i) => (
                  <a key={i} href={ref} target="_blank" rel="noreferrer" className="text-blue-600 underline ml-1">
                    [link {i + 1}]
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {exampleCode && (
            <CodeHighlighter code={exampleCode}/>
        )}
      </div>
    </Layout>
  );
}
