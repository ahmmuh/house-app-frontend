import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import DashboardContext from "../context/DashboardContext";

function Sidebar(props) {
    const {houseCategory} = useContext(DashboardContext);

        console.log("Category tom", houseCategory)

const changeHandler = (e)=>{
//console.log("Selected Category", e.target.value)
}
    return (
        <ul className={'list-group'}>
            <li className={'list-group-item bg-light'}>Välj houseTyp</li>
            <li className={'list-group-item'}>
                <Link to="/dashboard/content">Houses</Link>
            </li>
            <li className={'list-group-item'}>
                <Link to="/dashboard/create">Create</Link>
            </li>
            <li className={'list-group-item'}>
                <Link to="/dashboard/createCategory">Create Category</Link>
            </li>
            {
                houseCategory.length > 0 ? (
                    houseCategory.map((category, id) => (
                        <>
                            <li className={'list-group-item'}>
                                <div className="d-flex "
                                     style={{
                                         display: "flex",
                                         justifyContent: "space-between"
                                     }}>
                                    <p>{category.name}</p>
                                    <label> </label>
                                    <input key={id} className={'pl-5'}
                                           type="radio" name="category" value={category.name}
                                           onChange={changeHandler}/>
                                </div>
                            </li>
                        </>
                    ))
                ) : (
                    <li className={'list-group-item'}>No house type</li>
                )
            }
        </ul>
    );
}

export default Sidebar;