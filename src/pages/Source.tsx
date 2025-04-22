import SideBar from "../Components/SideBar"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import CodeHighlighter from "../Components/CodeHighlighter"

const code = `
  print(os.getenv("USER") or os.getenv("USERNAME"));
  `

export default function AllFiles() {
  return (
    <div className="relative h-screen">
      {/* Left Side */}
      <SideBar/>
      {/* Right Side */}
      <div className="ml-[250px] max-[850px]:ml-0 max-w-full flex flex-col h-full">
        <Nav show_top_layer={false} show_source={false} show_menu_btn ={true}/>
        <main className="flex-1">
          <CodeHighlighter code={code}/>
        </main>
        <Footer/>
      </div>
    </div>
  )
}