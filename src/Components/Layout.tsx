import Nav from "./Nav";
import SideBar from "./SideBar";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode,
  allow_bg?: boolean
}
export default function Layout({children, allow_bg}: Props) {
    return (
      <div className="relative h-screen">
        {/* Left Side */}
        <SideBar />
        {/* Right Side */}
        <div className="ml-[250px] max-[850px]:ml-0 max-w-full flex flex-col h-full">
          <Nav show_top_layer={false} show_source={false} show_menu_btn={true} />
            <main className={`flex-1 ${allow_bg ? "bg-gradient-to-r from-blue-50 via-gray-100 to-white" : ""}`}>
                {children}
            </main>
          <Footer />
        </div>
      </div>
    );
  }