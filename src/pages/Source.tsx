import output from "../../output/output.json";
import SourceCodeIcon from "../Icons/SourceCodeIcon";
import CubesIcon from "../Icons/CubesIcon";
import LibraryIcon from "../Icons/LibraryIcon";
import PlatformIcon from "../Icons/PlatformIcon";
import DatabaseIcon from "../Icons/DatabaseIcon";
import DevToolsIcon from "../Icons/DevToolsIcon";
import RuntimeIcon from "../Icons/RuntimeIcon";
import FolderIcon from "../Icons/FolderIcon";
import Layout from "../Components/Layout";

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
                  <div className="text-indigo-300 border rounded-full p-1">
                    {key === "languages" ? (
                      <SourceCodeIcon />
                    ) : key === "frameworks" ? (
                      <CubesIcon />
                    ) : key === "libraries" ? (
                      <LibraryIcon />
                    ) : key === "platforms" ? (
                      <PlatformIcon />
                    ) : key === "databases" ? (
                      <DatabaseIcon />
                    ) : key === "runtime" ? (
                      <RuntimeIcon />
                    ) : (
                      <DevToolsIcon />
                    )}
                  </div>
                </div>
                <h1>{key[0].toUpperCase() + key.slice(1)}</h1>
              </div>
              <div className="w-full">
                <span className="flex gap-4 items-center justify-between bg-indigo-50 px-2">
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
