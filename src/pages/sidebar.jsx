import React from 'react';
import {Link} from "react-router-dom";

function Sidebar(props) {
    return (
        <ul className={'list-group'}>
            <li className={'list-group-item bg-light'}>Sidebar</li>
            <li className={'list-group-item'}>
                <Link to="/dashboard/content">Houses</Link>
            </li>
            <li className={'list-group-item'}>
                <Link to="/dashboard/create">Create</Link>
            </li>

        </ul>
    );
}

export default Sidebar;