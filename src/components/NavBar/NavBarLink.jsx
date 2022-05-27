import { NavLink, useLocation } from "react-router-dom";
import { showLoader } from "../Loader";


function setActiveMenu(isActive) {
    return (isActive ? "active-nav" : "")
}

export default function NavBarLink(props) {

    return (
        <NavLink to={props.to}
            className={({isActive}) => setActiveMenu(isActive)}
            onClick={() => { showLoader() }}
        >
            {props.children}
        </NavLink>
    )
}