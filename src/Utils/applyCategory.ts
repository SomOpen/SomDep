export default function applyCategory(paths: string[]) {
  for (const path of paths) {
    switch (location.pathname) {
      case path:
        return path.slice(path.lastIndexOf("/") + 1);
    }
  }
};
