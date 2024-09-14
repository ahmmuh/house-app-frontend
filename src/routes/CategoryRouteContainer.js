import React, { useContext } from "react"
import DashboardContext from "../context/DashboardContext"
import SuspenseWrapper from "./dashboard/SuspenseWrapper"
import CategoryDetail from "../pages/categories/CategoryDetail"
import { Route, Routes } from "react-router-dom"

const CategoryRouteContainer = () => {
  const { houseCategory } = useContext(DashboardContext)
  console.log("houseCategory from category container ", houseCategory)

  return (
    <>
      <Routes>
        {houseCategory.map((category) => (
          <React.Fragment key={category._id}>
            <Route
              path={`/${category._id}`}
              element={
                <SuspenseWrapper>
                  <CategoryDetail categoryId={category._id} />
                </SuspenseWrapper>
              }
            />
          </React.Fragment>
        ))}
      </Routes>
    </>
  )
}

export default CategoryRouteContainer
