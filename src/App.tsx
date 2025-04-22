import "./App.css";
import 'highlight.js/styles/github-dark.css';
import Home from "./pages/Home";
import AllFiles from "./pages/Source";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<AllFiles/>} path="/source"/>
    </Routes>
  )
}
export default App;