import React from 'react';

const  BookedRoom = ({room}) =>{

    return (
    <div className="card mb-4">
        <div className="card-body">
            <h5 className="card-title">{room.houseType} - {room.roomType}</h5>
            <p className="card-text"><strong>Beskrivning:</strong> {room.description}</p>
            <p className="card-text"><strong>Plats:</strong> {room.city}, {room.district}</p>
            <p className="card-text"><strong>Pris:</strong> ${room.price} per natt</p>
            <p className="card-text"><strong>Antal rum:</strong> {room.rooms}</p>
            <p className="card-text"><strong>Antal toaletter:</strong> {room.toilets}</p>
            <p className="card-text"><strong>Antal badrum:</strong> {room.bathrooms}</p>
            <p className="card-text"><strong>Yta:</strong> {room.squareMeters} m²</p>
            <p className="card-text"><strong>Byggår:</strong> {new Date(room.yearBuilt).getFullYear()}</p>
            <p className="card-text"><strong>Vuxna:</strong> {room.adults}</p>
            <p className="card-text"><strong>Barn:</strong> {room.children}</p>
            <p className="card-text"><strong>WiFi:</strong> {room.wifi ? 'Ja' : 'Nej'}</p>
            <p className="card-text"><strong>Vatten:</strong> {room.water ? 'Ja' : 'Nej'}</p>
            <p className="card-text"><strong>Parkering:</strong> {room.parking ? 'Ja' : 'Nej'}</p>
            <p className="card-text"><strong>Flygplatstransfer:</strong> {room.airportShuttle ? 'Ja' : 'Nej'}</p>
            <p className="card-text"><strong>Daglig städning:</strong> {room.dailyHousekeeping ? 'Ja' : 'Nej'}</p>
            <p className="card-text"><strong>Restaurang:</strong> {room.restaurant ? 'Ja' : 'Nej'}</p>
         <p className="card-text"><strong>Senast uppdaterad:</strong> {new Date(room.updatedAt).toLocaleDateString()}</p>
        </div>
    </div>
);

}

export default BookedRoom;