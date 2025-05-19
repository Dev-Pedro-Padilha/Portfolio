import { useEffect } from "react"
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Info from "./pages/Info/Info";
import Projetos from "./pages/Projetos/Projetos";

const App = () => {
  useEffect(() => {
    document.title = "Pedro";
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<Info/>}/>
          <Route path="info" element={<Info/>}/>
          <Route path="projetos" element={<Projetos/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App;