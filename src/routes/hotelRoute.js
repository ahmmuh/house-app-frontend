import CreateHotel from "../pages/hotel/createHotel"
import SuspenseWrapper from "./dashboard/SuspenseWrapper"
import HotelList from "../pages/hotel/HotelList"
import HotelDetail from "../pages/hotel/HotelDetail"
import HotelPage from "../pages/hotel/HotelPage"

export const hotelRoute = [
  {
    path: "hotels",
    element: (
      <SuspenseWrapper>
        <HotelPage />
      </SuspenseWrapper>
    ),
    children: [
      {
        path: "create",
        element: (
          <SuspenseWrapper>
            <CreateHotel />
          </SuspenseWrapper>
        ),
      },
      {
        path: "hotelList",
        element: (
          <SuspenseWrapper>
            <HotelList />
          </SuspenseWrapper>
        ),
      },
      {
        path: "room/:id",
        element: (
          <SuspenseWrapper>
            <HotelDetail />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]
