import Nav from "./Nav";
import ViewSection from "./ViewSection";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";

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
