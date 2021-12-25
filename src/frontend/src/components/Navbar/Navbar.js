import { Navbar as NavbarMaterialize, NavItem, Icon } from "react-materialize"

const Navbar = ({desafioUrl, linkedIn, github}) => {

    return (
        <NavbarMaterialize
            alignLinks="right"
            brand={
                <a className="brand-logo" target="_blank" href={desafioUrl}>Desafio-FullStack / Gazin Tech</a>
            }
            extendWith={
            <NavbarMaterialize>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/nivel">Nivel</NavItem>
                <NavItem href="/desenvolvedor">Desenvolvedor</NavItem>
            </NavbarMaterialize>
            }
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            >
            <NavItem href={github} target="_blank">
                Meu Github
            </NavItem>
            <NavItem href={linkedIn} target="_blank">
                Meu LinkedIn
            </NavItem>
        </NavbarMaterialize>
    )
}

export default Navbar
