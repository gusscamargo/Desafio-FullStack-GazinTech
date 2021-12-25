import Header from "./components/Header/Header";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

import Home from "./pages/Home/HomePage"
import Nivel from "./pages/Nivel/NivelPage"
import Desenvolvedor from "./pages/Desenvolvedor/DesenvolvedorPage"

function App(props) {
  return (
    <Router> 
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nivel" element={<Nivel />} />
          <Route path="/desenvolvedor" element={<Desenvolvedor />} />
        </Routes>
      </div>
      </Router>
  );
}

export default App;
