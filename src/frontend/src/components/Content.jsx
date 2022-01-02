import {Route, Routes} from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import Home from "../pages/Home"
import Niveis from "../pages/Nivel"
import Nivel from "../pages/Nivel/NivelPage"
import NivelCreate from "../pages/Nivel/NivelCreate"
import Desenvolvedores from "../pages/Desenvolvedor"
import Desenvolvedor from "../pages/Desenvolvedor/DesenvolvedorPage"
import DesenvolvedorCreate from "../pages/Desenvolvedor/DesenvolvedorCreate"
import NotFound404 from "../pages/Error/NotFound404Page"

export default function Content() {
    return (
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/nivel" element={<Niveis />} /> 
            <Route path="/nivel/:id" element={<Nivel />} /> 
            <Route path="/nivel/create" element={<NivelCreate />} /> 

            <Route path="/desenvolvedor" element={<Desenvolvedores />} />
            <Route path="/desenvolvedor/:id" element={<Desenvolvedor />} />
            <Route path="/desenvolvedor/create" element={<DesenvolvedorCreate />} />

            <Route path="*" element={<NotFound404 />} />
          </Routes>
        <ToastContainer />
        </main>
    )
}
