import SourceCodeIcon from "../Icons/SourceCodeIcon";
import CubesIcon from "../Icons/CubesIcon";
import LibraryIcon from "../Icons/LibraryIcon";
import RuntimeIcon from "../Icons/RuntimeIcon";
import PlatformIcon from "../Icons/PlatformIcon";
import DatabaseIcon from "../Icons/DatabaseIcon";
import DevToolsIcon from "../Icons/DevToolsIcon";

export default function applyIcon(key: string) {
  return key === "languages" ? (
    <SourceCodeIcon />
  ) : key === "frameworks" ? (
    <CubesIcon />
  ) : key === "libraries" ? (
    <LibraryIcon />
  ) : key === "platforms" ? (
    <PlatformIcon />
  ) : key === "databases" ? (
    <DatabaseIcon />
  ) : key === "runtime" ? (
    <RuntimeIcon />
  ) : (
    <DevToolsIcon />
  );
}
