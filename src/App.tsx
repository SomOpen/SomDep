import "./App.css";
import 'highlight.js/styles/github-dark.css';
import Home from "./pages/Home";
import AllFiles from "./pages/Source";
import { Routes, Route } from "react-router";
import Contents from "./pages/Content";
import NotFound from "./Components/404";

function App() {
  return (
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<AllFiles/>} path="/source"/>
      <Route element={<Contents/>} path="/contents/:id"/>
      <Route element={<NotFound/>} path="*"/>
    </Routes>
  )
}
export default App;