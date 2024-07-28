import React from 'react';
import {Link} from "react-router-dom";

function Menu(props) {
    return (
        <div className={'container-fluid pl-4 bg-dark'}>
            <div>
                <nav className="navbar navbar-expand-lg ">
               {/*     <li className={'nav-item'}>
                        <Link  to={'/'} className="nav-link">Start
                        </Link>
                    </li>*/}

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className={'nav-item'}>
                                <Link to={'/'} className="nav-link">Start
                                </Link>
                            </li>
                            <li className={'nav-item'}>
                                <Link to={'/dashboard'} className="nav-link">Dashboard
                                </Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Menu;