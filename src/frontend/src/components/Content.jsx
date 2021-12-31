import {Route, Routes} from "react-router-dom"

import Home from "../pages/Home"
import Niveis from "../pages/Nivel"
import Niveil from "../pages/Nivel/NivelPage"
// import Desenvolvedores from "../pages/Desenvolvedor"
// import Desenvolvedor from "../pages/Desenvolvedor/DesenvolvedorPage"
import NotFound404 from "../pages/Error/NotFound404Page"

export default function Content() {
    return (
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/nivel" element={<Niveis />} /> 
            <Route path="/nivel/:id" element={<Niveil />} /> 
            {/* <Route path="/nivel/create" element={<Niveil />} /> 

            <Route path="/desenvolvedor" element={<Desenvolvedores />} />
            <Route path="/desenvolvedor/:id" element={<Desenvolvedor />} />
            <Route path="/desenvolvedor/create" element={<Desenvolvedor />} /> */}

            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </main>
    )
}
