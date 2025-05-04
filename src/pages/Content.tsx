import NotFound from "../Components/404";
import Category from "./Category";
import applyCategory from "../Utils/applyCategory";

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
  function handlePath() {
    if (!contentsPath.includes(location.pathname)) {
      return <NotFound />;
    } else {
      return <Category category={applyCategory(contentsPath)} />;
    }
  }
  return handlePath();
}
