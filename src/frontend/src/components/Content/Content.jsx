import {Route, Routes} from "react-router-dom"

import Home from "../../pages/Home/HomePage"
import Nivel from "../../pages/Nivel/NivelPage"
import Desenvolvedor from "../../pages/Desenvolvedor/DesenvolvedorPage"

export default function Content() {
    return (
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nivel" element={<Nivel />} />
          <Route path="/desenvolvedor" element={<Desenvolvedor />} />
        </Routes>
      </main>
    )
}
