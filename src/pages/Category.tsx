import Layout from "../Components/Layout";
import FolderIcon from "../Icons/FolderIcon";
import applyIcon from "../Utils/applyIcon";
import extractData from "../Utils/extractData";

export default function Category({ category }: any) {
  const data = extractData(category);
  return (
    <Layout>
      <div>
        <h1 className="w-full bg-emerald-50 p-2 font-bold text-slate-500 flex gap-2 items-center">
          {data?.title ? applyIcon(data?.title.toLowerCase()) : null}
          {data?.title}
          </h1>
        <div className="flex gap-4 items-center justify-center p-2 cursor-pointer w-full">
          {data?.contents?.map((content, index) => (
            <a
              key={index}
              href={`/contents/${data.title.toLowerCase()}/${content}`}
              className="flex items-center gap-2 border-2 border-slate-300/30 shadow-md max-w-full w-[250px] p-2 rounded-md"
            >
              <span className="text-emerald-300">{<FolderIcon />}</span>
              <h2>{content}</h2>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
