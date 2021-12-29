import {Route, Routes} from "react-router-dom"

import Home from "../pages/Home"
import Niveis from "../pages/Nivel"
import Desenvolvedores from "../pages/Desenvolvedor"
import NotFound404 from "../pages/Error/NotFound404Page"

export default function Content() {
    return (
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nivel" element={<Niveis />} /> 
            <Route path="/desenvolvedor" element={<Desenvolvedores />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </main>
    )
}
