import Header from "./components/Header/Header";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

import Home from "./pages/Home"
import Nivel from "./pages/Nivel"
import Desenvolvedor from "./pages/Desenvolvedor"

function App(props) {
  return (
    <div> 
      <Header />
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nivel" element={<Nivel />} />
            <Route path="/desenvolvedor" element={<Desenvolvedor />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
