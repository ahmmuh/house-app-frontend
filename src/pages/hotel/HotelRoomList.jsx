import React from 'react';
import RoomCard from "../../components/reusableInputs/RoomCard";
import {rooms} from "../../fakeData/room";

function HotelRoomList(props) {
    return (
        <div className={'container'}>
            {
                rooms.map(room => (
                   <>
                       <RoomCard
                           key={room.id}
                           size={room.size}
                           name={room.name}
                           title={room.title}
                           city={room.city}
                           bathrooms={room.bathrooms}
                           subTitle={room.subTitle}
                           price={room.price}
                           breakfastIncluded={room.breakfastIncluded}
                           image={room.image}
                           description={room.description}
                       />

                   </>
                ))
            }
        </div>
    );
}

export default HotelRoomList;