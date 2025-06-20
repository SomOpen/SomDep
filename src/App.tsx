import "./App.css";
import "highlight.js/styles/github-dark.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import Contents from "./pages/Content";
import NotFound from "./Components/404";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contents/:id" element={<Contents />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
