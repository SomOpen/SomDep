import { useEffect, useRef } from "react";
import logo from "../assets/somdep.svg";
import GithubIcon from "../Icons/GithubIcon";
import DiscordIcon from "../Icons/DiscordIcon";
import MenuIcon from "../Icons/MenuIcon";
import DownfallIcon from "../Icons/DownfallIcon";
import TableIcon from "../Icons/TableIcon";

export default function Nav({
  show_top_layer = true,
  show_source = true,
  show_menu_btn = false,
}) {
  const btnRef = useRef(null);

  useEffect(() => {
    const sideBar = document.getElementById("sidebar");
    const btn = btnRef.current;

    function open() {
      if (sideBar) {
        (sideBar as HTMLElement).style.display = "block";
        document.body.style.overflow =
          getComputedStyle(sideBar).display === "block" ? "hidden" : "";
      }
    }
    if (btn) {
      (btn as HTMLElement).addEventListener("click", open);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 850) {
        if (sideBar) {
          (sideBar as HTMLElement).style.display = "block";
        }
      }
    });
    return () => {
      if (btn) {
        (btn as HTMLElement).removeEventListener("click", open);
      }
    };
  }, []);

  return (
    <nav className="min-h-[60px] border-b-2 border-slate-100 shadow-md">
      {show_top_layer ? (
        <div className="w-full min-h-[15px] bg-emerald-400"></div>
      ) : null}
      <div className="flex items-center justify-between px-2">
        <div className="flex gap-4 items-center p-2">
          {show_menu_btn ? (
            <button
              ref={btnRef}
              id="open-btn"
              className="hidden max-[850px]:block cursor-pointer"
            >
              <MenuIcon dimension={30} />
            </button>
          ) : null}
          <div className="flex gap-2 items-center p-2">
            <img src={logo} width={16} height={16} />
            <h1
              style={{ fontFamily: "Grand Hotel, sans-serif" }}
              className="text-[1.5rem]"
            >
              <a href="/">SomDep</a>
            </h1>
          </div>
          {show_source ? (
            <div className="flex gap-3">
              <button className="rounded-md max-[339px]:shadow-none shadow-md py-2 px-3 cursor-pointer font-bold text-emerald-500 border border-slate-200">
                <a title="Deprecations" href="/deprecations" className="flex gap-2 items-center ">
                  <DownfallIcon />
                  <span className="max-[500px]:hidden">Deprecations</span>
                </a>
              </button>
              <button className="rounded-md max-[339px]:shadow-none shadow-md py-2 px-3 cursor-pointer font-bold text-emerald-500 border border-slate-200">
                <a title="Tables" href="/tables" className="flex gap-2 items-center ">
                  <TableIcon />
                  <span className="max-[500px]:hidden">Tables</span>
                </a>
              </button>
            </div>
          ) : null}
        </div>
        <div className="flex gap-2">
          <a href="https://github.com/Adam-Elmi/SomDep">
            <GithubIcon />
          </a>
          <a href="https://discord.com/users/adamcade">
            <DiscordIcon />
          </a>
        </div>
      </div>
    </nav>
  );
}
