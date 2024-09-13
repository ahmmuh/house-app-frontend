import ContentContainer from "../../pages/ContentContainer"
import Dashboard from "../../pages/DashboardPage"
import categoryRoutes from "../categoryRoute"

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

    children: hotelRoute,
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
