import React from "react";
import { NavLink } from "react-router-dom";

const SectionLinks = () => {
    return (
        <ul>
            <li>
                <NavLink to={`/lotto`} activeClassName={`active`}>Lotto</NavLink>
            </li>
            <li>
                <NavLink to={`/games`} activeClassName={`active`}>Games</NavLink>
            </li>
        </ul>
    )
}

export default SectionLinks;
