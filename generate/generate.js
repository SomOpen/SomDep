import fs from "fs/promises";

async function getFolders() {
  try {
    const folders = await fs.readdir("./src/Data/");
    const subFolders = await getSubFolders(folders);
    const innerFolders = await getInnerFolders(subFolders);
    return restructure(folders, innerFolders);
  } catch (error) {
    console.error(error);
  }
}

async function getSubFolders(mainFolders) {
  const subFolders = [];
  try {
    for (let i = 0; i < mainFolders.length; i++) {
      const key = mainFolders[i];
      const contents = await fs.readdir(`./src/Data/${mainFolders[i]}`);
      subFolders.push({ [key]: contents });
    }
  } catch (error) {
    console.error(error);
  }
  return subFolders;
}

async function getInnerFolders(subFolders) {
  const innerFolders = [];
  try {
    for (let i = 0; i < subFolders.length; i++) {
      for (let [key, value] of Object.entries(subFolders[i])) {
        if (value.length > 0) {
          for (let v of value) {
            const contents = await fs.readdir(`./src/Data/${key}/${v}`);
            innerFolders.push({ [key]: { contents: [{ [v]: contents }] } });
          }
        }
      }
    }
    return innerFolders;
  } catch (error) {
    console.error(error);
  }
}

function restructure(mainFolders, innerFolders) {
  const output = [];
  try {
    if (mainFolders && innerFolders) {
      for (const dir of mainFolders) {
        output.push({
          [dir]: {
            path: "",
            contents: innerFolders.filter((value) =>
              Object.keys(value).includes(dir)
            ),
          },
        });
      }
    }
    for (let i = 0; i < output.length; i++) {
      const newValue = output[i][mainFolders[i]]["contents"]
        .map((value) => value[mainFolders[i]]["contents"])
        .flat(1);
      output[i][mainFolders[i]]["contents"] = newValue.slice(0);
    }
    return output;
  } catch (error) {
    console.error(error);
  }
}

const result = await getFolders();

async function generateJson() {
  try {
    const isExist = await fs.access("./output").then(() => true).catch(() => false);
    if(!isExist) {
      await fs.mkdir("./output");
    }
    await fs.writeFile("./output/output.json", JSON.stringify(result, null, 2));
    console.log("Json file is created successfully!");
  } catch (error) {
    console.error(error);
  }
};

await generateJson();