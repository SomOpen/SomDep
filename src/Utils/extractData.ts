import output from "../../output/output.json";

interface CategoryItem {
  [key: string]: {
    path: string;
    contents: any[];
  };
}

export default function extractData(category: string): {
  title: string;
  path: string;
  contents: any[];
} | null {
  const found = ((output as unknown) as CategoryItem[]).find(
    (item) => Object.keys(item)[0] === category
  );

  if (!found) return null;

  const title = Object.keys(found)[0];
  const { path, contents } = found[title];

  return {
    title,
    path,
    contents,
  };
}
