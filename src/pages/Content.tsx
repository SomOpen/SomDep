import NotFound from "../Components/404";
import Category from "./Category";

const contentsPath = [
  "/contents/languages",
  "/contents/frameworks",
  "/contents/libraries",
  "/contents/databases",
  "/contents/platforms",
  "/contents/runtime",
  "/contents/tools",
];

export default function Contents() {
  function applyCategory() {
    for (const path of contentsPath) {
      switch (location.pathname) {
        case path:
          return path.slice(path.lastIndexOf("/") + 1);
      }
    }
  }
  function handlePath() {
    if (!contentsPath.includes(location.pathname)) {
      return <NotFound />;
    } else {
      return <Category category={applyCategory()} />;
    }
  }
  return handlePath();
}
