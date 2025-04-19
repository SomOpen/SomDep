import Card from "./Card";
import FeatureIcon from "../Icons/FeatureIcon";
import ErrorIcon from "../Icons/ErrorIcon";
import NewIcon from "../Icons/NewIcon";
import GemIcon from "../Icons/GemIcon";
import TerminalIcon from "../Icons/TerminalIcon";
import { advantages_of_somdep } from "../Data/data";
import logo from "/somdep.svg";
export default function FeatureSection() {
  const icons = [<ErrorIcon/>, <NewIcon/>, <GemIcon/>, <TerminalIcon/>];
  return (
    <section className="pattern-two min-h-[500px] p-2 py-4 flex flex-col gap-4">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-lg flex gap-2 items-center text-[1.8rem] italic text-slate-600 p-1 px-2 rounded-md bg-emerald-50 border border-slate-200 w-fit">
          <FeatureIcon dimension={30}/>
          Faa'iidooyinka 
          <span style={{fontFamily: "Grand Hotel"}} className="text-emerald-400 flex gap-2 items-center">
          <img src={logo} width={18} height={18}/>
            SomDep
          </span>
        </h1>
      </div>
      <div className="flex gap-4 items-center justify-center flex-wrap">
        {
          advantages_of_somdep ?
          advantages_of_somdep.map((advantage: { title: string; description: string }, index: number) => (
            <Card key={index} title={advantage.title } description={advantage.description} icon={icons[index]} />
          ))
          : null
        }
      </div>
    </section>
  )
}