import CopyIcon from "../Icons/CopyIcon";
export function showIcon(icon: React.ReactElement | string) {
  return icon;
}

export function copyText(text: string) {
  try {
    if (typeof navigator.clipboard !== "undefined") {
      navigator.clipboard.writeText(text).then(() => {
        console.log("Copied text: ", text);
        showIcon("Copied!")
        setTimeout(() => {
          showIcon(<CopyIcon dimension={20}/>)
        }, 2000)
      });
      return false;
    }
  } catch (error) {
    console.error(error);
  }
}
