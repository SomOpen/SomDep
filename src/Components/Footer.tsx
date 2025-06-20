import GithubIcon from "../Icons/GithubIcon";
import DiscordIcon from "../Icons/DiscordIcon";
const sections: string[] = ["Home", "Deprecations", "Tables"];

export default function Footer() {
  return (
    <footer
      className="w-full bg-slate-100 min-h-[100px] flex py-2 px-4 justify-center items-center border-b-8 border-emerald-400 border-t-2 border-t-slate-200 flex-wrap max-[600px]:flex-col"
    >
      <ul className="flex gap-5 flex-wrap justify-center items-center max-[600px]:gap-4 max-[600px]:mb-5">
        {
          sections
            ? sections.map((section, i) => (
                <li key={i}>
                  <a className="text-slate-400 italic" href={section === "Home" ? "/" : "/" + section.toLowerCase() }>
                    {section}
                  </a>
                </li>
              ))
            : null
        }
      </ul>
      <div className="flex gap-3 flex-1 justify-end flex-wrap items-center max-[600px]:justify-center">
        <span className="text-slate-400 italic"
          >&copy; <a href="https://github.com/Adam-Elmi" target="_blank" className="mr-2">Adam Elmi</a> {new Date().getFullYear()}</span
        >
        <a href="https:github.com/Adam-Elmi/SomCheat">
          <GithubIcon />
        </a>
        <a href="https://discord.com/users/adamcade">
          <DiscordIcon />
        </a>
      </div>
    </footer>
  )
}