import {NavLink} from "react-router-dom";

const SubNavItems = () => (
    <>
        <li>
            <NavLink exact activeClassName={'font-bold text-gray-700'} to={'/'}>Home</NavLink>
        </li>

        <li>
            <NavLink exact activeClassName={'font-bold text-gray-700'} to={'/about'}>About</NavLink>
        </li>

        <li>
            <NavLink exact activeClassName={'font-bold text-gray-700'} to={'/service'}>Service</NavLink>
        </li>

        <li>
            <NavLink exact activeClassName={'font-bold text-gray-700'} to={'/work'}>Work</NavLink>
        </li>

        <li>
            <NavLink exact activeClassName={'font-bold text-gray-700'} to={'/client'}>Client</NavLink>
        </li>

        <li>
            <NavLink exact activeClassName={'font-bold text-gray-700'} to={'/team'}>Our Team</NavLink>
        </li>

        <li>
            <NavLink exact activeClassName={'font-bold text-gray-700'} to={'/contact'}>Contact</NavLink>
        </li>

    </>
)

export default SubNavItems