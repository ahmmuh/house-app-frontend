import React, {useContext} from 'react';
import HouseEnumContext from "../context/HouseEnumContext";

function Content() {
    const housesData = useContext(HouseEnumContext)
    console.log("housesData from content",housesData)
    return (
        <div>
           {/* <ul className='list-group'>
                {housesData.length <= 0? 'No Houses': housesData.map((house) => (
                    <>
                        <li className={'list-group-item'} key={house._id}>{house.houseType.map((item) => (
                            <div>

                            </div>
                        ))}</li>
                        <p>{house.description}</p>
                        <span>{house.price} $</span></>
                ))}
            </ul>*/}
        </div>
    )
        ;
}

export default Content;

