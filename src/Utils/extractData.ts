import output from "../../output/output.json";

interface CategoryItem {
  [key: string]: {
    path: string;
    contents: any[];
    contributors?: string[];
    moreInfo?: string;
    lastUpdate?: string;
  };
}

export default function extractData(category: string): {
  title: string;
  path: string;
  contents: any[];
  contributors?: string[];
  moreInfo?: string;
  lastUpdate: string;
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
    contributors: found[title]?.contributors || [],
    moreInfo: found[title]?.moreInfo || "No additional info available",
    lastUpdate: found[title]?.lastUpdate || "No update information available",
  };
}
