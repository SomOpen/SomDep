import output from "../../output/output.json";

type OutputCategoryData = {
  contents?: string[];
  path?: string;
};

type OutputItem = {
  [category: string]: OutputCategoryData;
};

type ExtractedData = {
  title: string;
  contents?: string[];
  path?: string;
};

export default function extractData(
  category: string
): ExtractedData | undefined {
  if (!category) return;

  const outputItems = output as unknown as OutputItem[];

  const matched = outputItems.find((item) => Object.keys(item)[0] === category);
  if (!matched) return;

  const key = Object.keys(matched)[0];
  const data = matched[key];

  return {
    title: key.charAt(0).toUpperCase() + key.slice(1),
    contents: data?.contents,
    path: data?.path,
  };
}
