import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Info from "./pages/Info/Info";

const App = () => {
  useEffect(() => {
    document.title = "Pedro";
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/info" element={<Info/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;