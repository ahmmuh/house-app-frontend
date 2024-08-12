import {useContext} from "react";
import BookedRoom from "./BookedRoom";
import DashboardContext from "../context/DashboardContext";
import Sidebar from "./sidebar";

const BookedRoomsList = ({ rooms }) => {
    const bookedRooms = useContext(DashboardContext)
    const {houses} = bookedRooms
    console.log("Booked rooms", houses)
    return (
        <div className="container">
            <div className="row">
              <div className={'col-4'}>
                  <Sidebar />
              </div>
                    {houses.map((room, index) => (
                        <div key={index} className="col-8">
                            <BookedRoom room={room} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default BookedRoomsList;