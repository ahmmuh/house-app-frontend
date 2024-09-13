import CategoryFormContainer from "../pages/categories/categoryFormContainer"
import SuspenseWrapper from "./dashboard/SuspenseWrapper"

const categoryRoutes = [
  {
    path: "create",
    element: (
      <SuspenseWrapper>
        <CategoryFormContainer />
      </SuspenseWrapper>
    ),
  },
]

export default categoryRoutes
