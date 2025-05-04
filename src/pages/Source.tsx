import output from "../../output/output.json";
import FolderIcon from "../Icons/FolderIcon";
import Layout from "../Components/Layout";
import applyIcon from "../Utils/applyIcon";
console.log(output.map(value => Object.keys(value)[0]));

export default function AllFiles() {
  return (
    <Layout>
      <div className="w-full flex gap-5 items-center justify-center flex-wrap p-2">
        {Object.values(output).map((value: any) =>
          Object.keys(value).map((key: any) => (
            <div
              key={key}
              className="max-w-full w-[300px] border border-slate-300/80 shadow-md rounded flex items-center justify-center flex-col gap-2"
            >
              <div className="flex items-center flex-col p-2">
                <div className="p-1">
                  <div className="text-emerald-300 border rounded-full p-1">
                    {applyIcon(key)}
                  </div>
                </div>
                <h1>{key[0].toUpperCase() + key.slice(1)}</h1>
              </div>
              <div className="w-full">
                <span className="flex gap-4 items-center justify-between bg-emerald-50 font-mono text-slate-400 px-2">
                  <FolderIcon />
                  {value[key].contents.length}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
}
