import React from 'react';
import Sidebar from "./sidebar";
import {Outlet} from "react-router-dom";

function Dashboard(props) {


    return (
        <div className="container mb-4 mt-2">
            <div className="row py-3">
            {/*    <div className={'col-3'}>
                    <Sidebar />
                </div>*/}
                <div className={"col"}>
                    <h3>Välkommen till admin</h3>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;