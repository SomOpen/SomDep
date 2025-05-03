import Layout from "../Components/Layout";
import FolderIcon from "../Icons/FolderIcon";
import extractData from "../Utils/extractData";

export default function Category({ category }: any) {
  const data = extractData(category);
  return (
    <Layout>
      <div>
        <h1 className="w-full bg-emerald-50 p-2">{data?.title}</h1>
        <button className="flex gap-4 items-center justify-center p-2 cursor-pointer">
          {data?.contents?.map((content, index) => (
            <a
              key={index}
              href={`/contents/${data.title.toLowerCase()}/${content}`}
              className="flex items-center gap-2 border-2 border-slate-300/30 shadow-md max-w-full w-[250px] p-2 rounded-md"
            >
              <span className="text-indigo-300">{<FolderIcon />}</span>
              <h2>{content}</h2>
            </a>
          ))}
        </button>
      </div>
    </Layout>
  );
}
