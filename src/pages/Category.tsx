import Layout from "../Components/Layout";
import extractData from "../Utils/extractData";
import FileIcon from "../Icons/FileIcon";

interface CategoryProps {
  category: string;
}

interface Subcategory {
  name: string;
  items: string[];
}

export default function Category({ category }: CategoryProps) {
  const data = extractData(category);

  const subcategories: Subcategory[] =
    data?.contents?.map((contentObj) => {
      const key = Object.keys(contentObj)[0];
      return {
        name: key,
        items: contentObj[key],
      };
    }) || [];

  return (
    <Layout allow_bg={true}>
      <div className="flex flex-col gap-8 p-8 rounded-xl">
        {/* Table of Contents */}
        <div className="w-full md:w-2/3 space-y-6">
          <div className="text-2xl font-bold text-gray-800">{data?.title}</div>
          {/* Check if there are no subcategories */}
          {subcategories.length === 0 ? (
            <div className="bg-white p-6 rounded-xl shadow-md text-center text-gray-500">
              No subcategories available.
            </div>
          ) : (
            <div className="space-y-4">
              {subcategories.map((sub, index) => (
                <div
                  key={index}
                  className="bg-white p-4 max-w-full rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
                >
                  <div className="text-lg font-semibold text-gray-700 mb-4">
                    {sub.name}
                  </div>
                  <ul className="space-y-3">
                    {sub.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="group flex items-center gap-3 cursor-pointer rounded-lg hover:bg-gray-200 px-4 py-2 transition-all duration-200 ease-in-out"
                      >
                        <FileIcon dimension={20} color="#99a1af" />
                        <a  href={`/contents/${data?.title.toLowerCase()}/${sub.name}/${item}`} className="text-md text-gray-600 font-semibold group-hover:text-blue-600 transition-colors duration-200 ease-in-out">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
