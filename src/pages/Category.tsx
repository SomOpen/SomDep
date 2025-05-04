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
    <Layout>
      <div className="flex flex-col md:flex-row gap-8 p-8 bg-gradient-to-r from-blue-50 via-gray-100 to-white rounded-xl shadow-lg">
        {/* Metadata Table */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mt-6 md:mt-0 order-1 md:order-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Metadata</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-4 text-sm text-gray-600">Property</th>
                <th className="text-left py-2 px-4 text-sm text-gray-600">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 text-sm text-gray-600">Last Update</td>
                <td className="py-2 px-4 text-sm text-gray-800">{data?.lastUpdate || "N/A"}</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 text-sm text-gray-600">Contributors</td>
                <td className="py-2 px-4 text-sm text-gray-800">
                  {data?.contributors?.length ? data.contributors.join(", ") : "N/A"}
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 text-sm text-gray-600">More Info</td>
                <td className="py-2 px-4 text-sm text-gray-800">{data?.moreInfo || "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table of Contents */}
        <div className="w-full md:w-2/3 space-y-6 order-2 md:order-2">
          <div className="text-2xl font-bold text-gray-800">{data?.title}</div>

          {/* Check if there are no subcategories */}
          {subcategories.length === 0 ? (
            <div className="bg-white p-6 rounded-xl shadow-md text-center text-gray-500">
              No subcategories available.
            </div>
          ) : (
            <div className="space-y-4">
              {subcategories.map((sub, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                  <div className="text-lg font-semibold text-gray-700 mb-4">{sub.name}</div>
                  <ul className="space-y-3">
                    {sub.items.map((item, idx) => (
                      <li key={idx} className="group flex items-center gap-3 cursor-pointer rounded-lg hover:bg-gray-200 px-4 py-2 transition-all duration-200 ease-in-out">
                        <FileIcon dimension={20} color="#99a1af" />
                        <span className="text-md text-gray-600 font-semibold group-hover:text-blue-600 transition-colors duration-200 ease-in-out">
                          {item}
                        </span>
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
