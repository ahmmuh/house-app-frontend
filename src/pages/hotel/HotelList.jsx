import React, { useContext } from "react"
import DashboardContext from "../../context/DashboardContext"
import MainLink from "../../components/reusableInputs/MainLink"

const HotelList = (props) => {
  const { hotels } = useContext(DashboardContext)
  console.log("hotelData", hotels)

  return (
    <div className={"container"}>
      {hotels.map((hotel) => (
        <div className="row " key={hotel._id}>
          <div className="col  ">
            <div className="card shadow rounded p-3 mb-2">
              <div className="row no-gutters">
                <div className="col-lg-4 ">
                  <img
                    className="card-img-top"
                    src="https://picsum.photos/200"
                    alt="Title"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="col-lg-8">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-6">
                        <h4 className="card-title ">{hotel.hotelName}</h4>
                        <p className="card-text m-0 p-0">{hotel.description}</p>
                        {/* <table className="table table-hover ">
                          <thead>
                            <tr style={{ fontSize: ".6rem" }}>
                              <th>Transport</th>
                              <th>Quraac</th>
                              <th>Suuli/musqul</th>
                              <th style={{ fontSize: ".6rem" }}>Wifi</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{ fontSize: ".6rem" }}>
                              <td>{hotel.airportShuttle ? " Haa" : "Maya"}</td>
                              <td>{hotel.breakfast ? "Bilaash" : "Iibsi"} </td>
                              <td>
                                {hotel.privateToilet ? "ku gaar ah" : "Qeebsi"}
                              </td>
                              <td>
                                {hotel.hotelRoomWifi ? "Waa bilaash" : "Iibsi"}
                              </td>
                            </tr>
                          </tbody>
                        </table> */}
                      </div>
                      <div className="col">
                        <table className="table">
                          <thead>
                            <tr style={{ fontSize: ".6rem" }}>
                              <th>Transport</th>
                              <th>Quraac</th>
                              <th>Suuli/musqul</th>
                              <th>Wifi</th>
                              <th>Nuuca qolka</th>
                              <th>Sigaar</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{ fontSize: ".6rem" }}>
                              <td>{hotel.airportShuttle ? " Haa" : "Maya"}</td>
                              <td>{hotel.breakfast ? "Bilaash" : "Iibsi"} </td>
                              <td>
                                {hotel.privateToilet ? "kuu gaar ah" : "Qeebsi"}
                              </td>
                              <td>
                                {hotel.hotelRoomWifi ? "Waa bilaash" : "Iibsi"}
                              </td>
                              <td>
                                {hotel.isSingelRoom
                                  ? "Qol caadi ah"
                                  : "Qolka alaab jiif ah leh"}
                              </td>
                              <td>
                                <strong>
                                  {hotel.isNonSmokingRoom
                                    ? "Sigaar lama ogolo"
                                    : "Haa"}{" "}
                                </strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="row">
                          <MainLink
                            className={"col"}
                            path={`hotels/hotelList/${hotel._id}`}
                          >
                            View
                          </MainLink>
                          <p className="lead col text-success">
                            {hotel.price} $ Habeenki
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HotelList
