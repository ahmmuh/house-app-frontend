import CategoryFormContainer from "../../pages/categories/categoryFormContainer"
import CreateHouseCategory from "../../pages/categories/create-house-category"
import Content from "../../pages/content"
import Dashboard from "../../pages/Dashboard"
import CreateHotel from "../../pages/hotel/createHotel"
import HotelPage from "../../pages/hotel/HotelPage"
import HotelRoomDetail from "../../pages/hotel/HotelRoomDetail"
import HotelRoomList from "../../pages/hotel/HotelRoomList"
import NotFound from "../../pages/notFound"
import SuspenseWrapper from "./SuspenseWrapper"

const dashboardRoutes = [
  {
    path: "dashboard",
    element: (
      <SuspenseWrapper>
        <Dashboard />
      </SuspenseWrapper>
    ),
    children: [
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
            path: "hotelRooms",
            element: (
              <SuspenseWrapper>
                <HotelRoomList />
              </SuspenseWrapper>
            ),
          },
          {
            path: "room/:id",
            element: (
              <SuspenseWrapper>
                <HotelRoomDetail />
              </SuspenseWrapper>
            ),
          },
        ],
      },
      {
        path: "create",
        element: (
          <SuspenseWrapper>
            <CategoryFormContainer />
          </SuspenseWrapper>
        ),
      },
      {
        path: "createCategory",
        element: (
          <SuspenseWrapper>
            <CreateHouseCategory />
          </SuspenseWrapper>
        ),
      },
      {
        path: "content",
        element: (
          <SuspenseWrapper>
            <Content />
          </SuspenseWrapper>
        ),
      },
      {
        path: "*",
        element: (
          <SuspenseWrapper>
            <NotFound />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]

export default dashboardRoutes
