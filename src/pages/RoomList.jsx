import {useContext} from "react";
import BookedRoom from "./BookedRoom";
import DashboardContext from "../context/DashboardContext";

const BookedRoomsList = ({ rooms }) => {
    const bookedRooms = useContext(DashboardContext)
    const {houses} = bookedRooms
    console.log("Booked rooms", houses)
    return (
        <div className="container">
            <div className="row">
                {houses.map((room, index) => (
                    <div key={index} className="col-md-4">
                        <BookedRoom room={room} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookedRoomsList;