import { Navbar as NavbarMaterialize, NavItem, Icon} from "react-materialize"

const Navbar = ({desafioUrl, linkedIn, github}) => {

    const classNavbar = "indigo darken-4 z-depth-0"
    const classButtonsMenus = "btn-large waves-effect waves-light blue lighten-2"
    const classButtonsLinks = "btn waves-effect waves-light red darken-4"

    return (
        <NavbarMaterialize
            className={classNavbar}
            alignLinks="right"
            brand={
                <a className="brand-logo" target="_blank" href={desafioUrl}>Desafio-FullStack / Gazin Tech</a>
            }
            extendWith={
            <NavbarMaterialize className={classNavbar}>
                <NavItem className={classButtonsMenus} href="/">Home</NavItem>
                <NavItem className={classButtonsMenus} href="/nivel">Nivel</NavItem>
                <NavItem className={classButtonsMenus} href="/desenvolvedor">Desenvolvedor</NavItem>
            </NavbarMaterialize>
            }
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            >
            <NavItem className={classButtonsLinks} href={github} target="_blank">
                <i className="material-icons left">code</i>
                Meu Github
            </NavItem>
            <NavItem className={classButtonsLinks} href={linkedIn} target="_blank">
                <i className="material-icons left">account_circle</i>
                Meu LinkedIn
            </NavItem>
        </NavbarMaterialize>
    )
}

export default Navbar
