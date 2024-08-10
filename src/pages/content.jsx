import React, {useContext} from 'react';
import DashboardContext from "../context/DashboardContext";

function Content() {
    const data = useContext(DashboardContext)

    console.log("housesData from content",data)
    return (
        <div>
           <ul className='list-group'>
              {/*  {houseCategory.length <= 0? 'No Houses': houseCategory.map((house) => (
                    <>
                        <li className={'list-group-item'} key={house._id}>{house.houseType.map((item) => (
                            <div>

                            </div>
                        ))}</li>
                        <p>{house.description}</p>
                        <span>{house.price} $</span></>
                ))}*/}
            </ul>*
        </div>
    )
        ;
}

export default Content;

