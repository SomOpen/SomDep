import logo from "../assets/somdep.svg";
import ContactIcon from "../Icons/ContactIcon";
import DiscordIcon from "../Icons/DiscordIcon";
import GithubIcon from "../Icons/GithubIcon";
import HeartIcon from "../Icons/HeartIcon";
import HomeIcon from "../Icons/HomeIcon";
import SideBarIcon from "../Icons/SideBarIcon";
import { useEffect, useRef } from "react";

const main_sections = ["Home", "Contribute", "Contact"];

const main_icons = [<HomeIcon />, <HeartIcon />, <ContactIcon />];

export default function SideBar() {
  const closeRef = useRef(null);
  useEffect(() => {
    const closeBtn = closeRef.current;
    const sideBar = document.getElementById("sidebar");

    function close() {
      if (sideBar) {
        (sideBar as HTMLElement).style.display = "none";
        document.body.style.overflow =
          getComputedStyle(sideBar).display === "block" ? "hidden" : "";
      }
    }
    if (sideBar && closeBtn) {
      (closeBtn as HTMLElement).addEventListener("click", close);
    }
    return () => {
      if (sideBar && closeBtn) {
        (closeBtn as HTMLElement).removeEventListener("click", close);
      }
    };
  }, []);
  return (
    <aside
      id="sidebar"
      className="max-w-[250px] max-[450px]:max-w-full overflow-auto z-999 block max-[850px]:hidden w-full bg-white border-r-2 border-slate-100 fixed top-0 left-0 right-0 bottom-0"
    >
      {/* Header */}
      <div className="p-2 border-b border-slate-200 flex gap-2 items-center justify-between">
        <div className="flex gap-2">
          <img src={logo} width={16} height={16} />
          <h1
            style={{ fontFamily: "Grand Hotel, sans-serif" }}
            className="text-[1.5rem]"
          >
            <a href="/">SomDep</a>
          </h1>
        </div>
        <button
          ref={closeRef}
          className="hidden max-[850px]:block text-emerald-500 cursor-pointer"
        >
          <SideBarIcon dimension={28} />
        </button>
      </div>
      {/* Main Sections */}
      <ul className="p-2 border-b border-slate-200 flex flex-col gap-3">
        {main_sections.map((category, index) => (
          <li key={index} className="flex gap-2 items-center p-2">
            <span className="text-slate-500">{main_icons[index]}</span>
            <a href="" className="text-slate-500 font-semibold">
              {category}
            </a>
          </li>
        ))}
      </ul>
      {/* Top-level Categories */}
      <ul className="p-2 border-b-2 border-slate-200 flex flex-col gap-3">
        
      </ul>
      {/* Community */}
      <div className="flex flex-col gap-3 border border-slate-200 shadow rounded-md m-3 p-2">
        <button className="flex gap-2 items-center cursor-pointer rounded-md p-2 bg-blue-50 border border-slate-200 font-semibold text-slate-700">
          <span>
            <GithubIcon />
          </span>
          Github repo
        </button>
        <button className="flex gap-2 items-center cursor-pointer rounded-md p-2 bg-blue-50 border border-slate-200 font-semibold text-slate-700">
          <span>
            <DiscordIcon />
          </span>
          Join Server
        </button>
      </div>
    </aside>
  );
}
