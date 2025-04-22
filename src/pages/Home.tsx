import Nav from "../Components/Nav";
import ViewSection from "../Components/ViewSection";
import FeatureSection from "../Components/FeatureSection";
import Footer from "../Components/Footer";

export default function Layout() {
  return (
    <main className="flex-1 flex flex-col">
      <Nav />
      <ViewSection />
      <div className="flex-1">
        <FeatureSection />
      </div>
      <Footer />
    </main>
  );
}
