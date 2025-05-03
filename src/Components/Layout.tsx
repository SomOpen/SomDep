import Nav from "./Nav";
import SideBar from "./SideBar";
import Footer from "./Footer";
export default function Layout({children}: React.PropsWithChildren<{}>) {
    return (
      <div className="relative h-screen">
        {/* Left Side */}
        <SideBar />
        {/* Right Side */}
        <div className="ml-[250px] max-[850px]:ml-0 max-w-full flex flex-col h-full">
          <Nav show_top_layer={false} show_source={false} show_menu_btn={true} />
            <main className="flex-1">
                {children}
            </main>
          <Footer />
        </div>
      </div>
    );
  }