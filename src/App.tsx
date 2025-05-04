import "./App.css";
import "highlight.js/styles/github-dark.css";
import Home from "./pages/Home";
import AllFiles from "./pages/Source";
import { Routes, Route } from "react-router";
import Contents from "./pages/Content";
import NotFound from "./Components/404";
import ContentPage from "./pages/ConentPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/source" element={<AllFiles />} />
      <Route path="/contents/:id" element={<Contents />} />
      <Route path="/contents/:id/:id" element={<ContentPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
