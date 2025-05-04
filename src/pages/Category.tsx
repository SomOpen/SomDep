import { useState } from "react";
import Layout from "../Components/Layout";
import FolderIcon from "../Icons/FolderIcon";
import PlayArrowIcon from "../Icons/PlayArrowIcon";
import extractData from "../Utils/extractData";
import FileIcon from "../Icons/FileIcon";

interface CategoryProps {
  category: string;
}

function CollapsibleFolder({
  name,
  items,
  basePath,
}: {
  name: string;
  items: string[];
  basePath: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-l-2 border-gray-200 pl-4 mt-2">
      <div
        className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`transition-transform duration-300 transform ${
            open ? "rotate-90" : ""
          } text-gray-500`}
        >
          <PlayArrowIcon dimension={22} />
        </span>
        <span className="text-lg text-gray-800 font-medium flex items-center gap-2">
          <FolderIcon />
          {name}
        </span>
      </div>

      {open && (
        <ul className="ml-6 mt-2 space-y-4">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={`/contents/${basePath}/${name}/${item}`}
                className="flex items-center gap-3 cursor-pointer p-1 rounded-lg hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <span className="text-xl text-gray-500">
                  <FileIcon dimension={20}/>
                </span>
                <span className="text-md text-gray-700 font-semibold hover:text-blue-500 transition-all duration-200 ease-in-out">
                  {item}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Category({ category }: CategoryProps) {
  const data = extractData(category);
  const [open, setOpen] = useState(true);

  const subcategories =
    data?.contents?.map((contentObj) => {
      const key = Object.keys(contentObj)[0];
      return {
        name: key,
        items: contentObj[key],
      };
    }) || [];

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        {/* Root folder */}
        <div
          className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 px-4 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`transition-transform duration-300 transform ${
              open ? "rotate-90" : ""
            } text-gray-500`}
          >
            <PlayArrowIcon dimension={22} />
          </span>
          <span className="text-xl text-gray-800 font-semibold flex items-center gap-2">
            <FolderIcon />
            {data?.title}
          </span>
        </div>

        {/* Subfolders */}
        {open && (
          <div className="ml-6 mt-4 space-y-4">
            {subcategories.map((sub, index) => (
              <CollapsibleFolder
                key={index}
                name={sub.name}
                items={sub.items}
                basePath={data?.title?.toLowerCase() || "default-path"}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
