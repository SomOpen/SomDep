import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

async function getFolders() {
  try {
    const folders = await fs.readdir("./src/Data").then((data) => data);
    if (folders && folders.length > 0) {
      return folders;
    }
    throw new Error("Empty! There are no folders!");
  } catch (error) {
    console.error(error.message);
  }
}

const directories = await getFolders();

function getMainFolders() {
  const mainDir = {};
  for (let dir of directories) {
    mainDir[dir] = [];
  }
  return mainDir;
}

const mainFolders = getMainFolders();

function setPath(main) {
  if (main) {
    return path.join(
      path.dirname(fileURLToPath(import.meta.url)),
      "..",
      "src",
      "Data",
      `${main}`
    );
  }
}

async function getContents(directories, key) {
  let subFolders = {}, folders = [];
  for (let dir of directories) {
    if (dir === key) {
      folders.push(await fs.readdir(`./src/Data/${dir}`));
    }
    for(let i = 0; i < folders.length; i++) {
      if (dir === key) {
        subFolders[dir] = {path: setPath(dir), contents: folders[i]};
      }
    }
  }
  return subFolders;
}

async function generateData() {
  const data = [];
  for (const [key, value] of Object.entries(mainFolders)) {
    const sub = await getContents(directories, key);  
    data.push(sub);
  }
  return data;
}
const output = await generateData();

async function generateJson() {
  try {
    const isExist = await fs.access("output").then(() => true).catch(() => false);
    if(!isExist) {
      await fs.mkdir("./output");
    }
    await fs.writeFile("./output/output.json", JSON.stringify(output, null, 2))
  } catch (error) {
    console.error(error);
  }
}

await generateJson();