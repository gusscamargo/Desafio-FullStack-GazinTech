import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function Header() {
    return (
        <header>
            <Navbar
                github="https://github.com/gazin-tech/Desafio-FullStack"
                linkedIn="https://www.linkedin.com/in/gustavo-michels-de-camargo/"
                desafio={{
                    titulo: "Desafio-FullStack / Gazin Tech",
                    url: "https://github.com/gazin-tech/Desafio-FullStack"
                }}
            />
        </header>
    )
}
