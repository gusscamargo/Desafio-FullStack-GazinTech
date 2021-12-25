import { Navbar as NavbarMaterialize, NavItem, Tab, Tabs, Icon } from "react-materialize"

const Navbar = ({desafio, linkedIn, github }) => {

    return (
        <NavbarMaterialize
            alignLinks="left"
            brand={
            <a className="brand-logo" href={desafio.url} target="_blank">{desafio.titulo}</a>
        }
            centerLogo
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
            <NavItem href="/">
                Home
            </NavItem>
            <NavItem href="/nivel">
                Nivel
            </NavItem>
            <NavItem href="/desenvolvedor">
                Desenvolvedor
            </NavItem>
        </NavbarMaterialize>
    )
}

export default Navbar
