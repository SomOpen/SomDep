import logo from "/somdep.svg";
import GithubIcon from "../Icons/GithubIcon";
import DiscordIcon from "../Icons/DiscordIcon";

export default function Nav() {
  return (
    <nav className="min-h-[60px] border-b-2 border-slate-100 shadow-md">
      <div className="w-full min-h-[15px] bg-emerald-400"></div>
      <div className="flex items-center justify-between px-2">
        <div className="flex gap-2 items-center p-2">
          <img src={logo}  width={18} height={18}/>
          <h1 style={{fontFamily: "Grand Hotel, sans-serif"}} className="text-[1.5rem]">SomDep</h1>
        </div>
        <div className="flex gap-2">
          <a>
            <GithubIcon/>
          </a>
         <a>
            <DiscordIcon/>
         </a>
        </div>
      </div>
    </nav>
  );
}
