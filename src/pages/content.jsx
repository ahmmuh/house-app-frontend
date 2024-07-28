import React, {useContext} from 'react';
import CreateHouse from "./createHouse";
import HouseContext from "../states/HouseContext";

function Content() {
    const housesData = useContext(HouseContext)
    console.log("House data", housesData)

    return (
        <div>Content
            <ul className='list-group'>
                {
                    housesData && housesData.map((house) => (
                        <>
                            <li className={'list-group-item'} key={house._id}>{house.houseType}</li>
                            <p>{house.description}</p>
                            <span>{house.price} $</span>
                        </>
                    ))
                }
            </ul>
        </div>
    );
}

export default Content;