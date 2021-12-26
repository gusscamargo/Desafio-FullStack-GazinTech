import {Route, Routes} from "react-router-dom"

import Home from "../../pages/Home/HomePage"
import Nivel from "../../pages/Nivel/Niveis"
import Desenvolvedor from "../../pages/Desenvolvedor/Desenvolvedores"
import NotFound404 from "../../pages/Error/NotFound404Page"

export default function Content() {
    return (
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nivel" element={<Nivel />} />
            <Route path="/desenvolvedor" element={<Desenvolvedor />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </main>
    )
}
