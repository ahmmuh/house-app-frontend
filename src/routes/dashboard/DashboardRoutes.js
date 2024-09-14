import ContentContainer from "../../pages/ContentContainer"
import Dashboard from "../../pages/DashboardPage"
import CategoryRouteContainer from "../CategoryRouteContainer"

import { hotelRoute } from "../hotelRoute"
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
      ...hotelRoute,

      {
        path: "categories/*",
        element: <CategoryRouteContainer />,
      },
    ],
  },

  {
    path: "content",
    element: (
      <SuspenseWrapper>
        <ContentContainer />
      </SuspenseWrapper>
    ),
  },
]

export default dashboardRoutes
