import GithubIcon from "../Icons/GithubIcon";
import SearchIcon from "../Icons/SearchIcon";
import TerminalIcon from "../Icons/TerminalIcon";

export default function ViewSection() {
  return (
    <section className="pattern min-h-[300px] border-b border-slate-200 w-full p-2 flex flex-col gap-4">
      <div className="p-2 flex flex-col gap-4 justify-center">
        <h1 className="text-[2rem] text-center italic text-slate-600">
          Ku so dhawow{" "}
          <span
            style={{ fontFamily: "Grand Hotel, monospace" }}
            className="text-emerald-400"
          >
            SomDep
          </span>
        </h1>
        <p className="text-center text-slate-700 text-[1.1rem] leading-7">
          Boggan waxaad ka helaysa xogta ku saabsan{" "}
          <span className="text-slate-600 italic font-bold">
            functions, methods, libraries, APIs, technologies, features iyo
            wixii so raaca
          </span>
          , kuwaas oo laga maarmay isticmaalkooda ama lo helay beddel ka fiican
          oo mustaqbalka dhawna laga saari doono ama la joojin doono
          isticmaalkooda.
        </p>
      </div>
      <div className="w-full flex gap-3 items-center justify-center">
        <input
          type="search"
          placeholder="Search..."
          className="p-3 border border-slate-200 rounded-md bg-white shadow-md outline-none max-w-[500px] w-full"
        />
        <button className="cursor-pointer p-3 bg-emerald-400 text-slate-50 rounded-md border border-slate-100 shadow-md">
          <SearchIcon />
        </button>
      </div>
      <div className="w-full flex gap-2 justify-center items-center p-2">
        <button className="rounded-md bg-emerald-400 shadow-md py-2 px-3 cursor-pointer font-bold text-slate-50 border border-slate-200">
          <a href="" className="flex gap-2 items-center ">
            <GithubIcon />
            Contribute
          </a>
        </button>
        <button className="rounded-md bg-slate-800 shadow-md py-2 px-3 cursor-pointer font-bold text-emerald-400 border border-slate-200">
          <a href="" className="flex gap-2 items-center ">
            <TerminalIcon />
            v1.12
          </a>
        </button>
      </div>
    </section>
  );
}
