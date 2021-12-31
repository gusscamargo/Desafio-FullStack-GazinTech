import { Navbar as NavbarMaterialize, NavItem, Icon} from "react-materialize"
import  { NavLink } from "react-router-dom"
import { connect } from "react-redux"

const { github, linkedIn, desafio } = {
    github: "https://github.com/gusscamargo",
    linkedIn: "https://www.linkedin.com/in/gustavo-michels-de-camargo/",
    desafio: {
        titulo: "Desafio-FullStack / Gazin Tech",
        url: "https://github.com/gazin-tech/Desafio-FullStack"
    }
}

const Navbar = () => {
    

    const classNavbar = "indigo darken-4 z-depth-0"
    const classButtonsMenus = "btn-large waves-effect waves-light blue lighten-2"
    const classButtonsLinks = "btn waves-effect waves-light red darken-4"

    return (
        <NavbarMaterialize
            className={classNavbar}
            alignLinks="right"
            brand={
                <a className="brand-logo" target="_blank" href={desafio.url}>{desafio.titulo}</a>
            }
            extendWith={
            <NavbarMaterialize className={classNavbar}>
                <NavLink className={classButtonsMenus} to="/">Home</NavLink>
                <NavLink className={classButtonsMenus} to="/nivel">Nivel</NavLink>
                <NavLink className={classButtonsMenus} to="/desenvolvedor">Desenvolvedor</NavLink>
            </NavbarMaterialize>
            }
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            >
            <NavItem className={classButtonsLinks} href={github} target="_blank">
                <Icon left>code</Icon>
                Meu Github
            </NavItem>
            <NavItem className={classButtonsLinks} href={linkedIn} target="_blank">
                <Icon left>account_circle</Icon>
                Meu LinkedIn
            </NavItem>
        </NavbarMaterialize>
    )
}

const mapStateToProps = state => {
    return {
        github: state.links.github,
        linkedIn: state.links.linkedIn,
        desafio: state.links.desafio
    }
}

// export default connect(mapStateToProps)(Navbar)
export default Navbar
