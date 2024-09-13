import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "./index.css"
import "react-datepicker/dist/react-datepicker.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import dashboardRoutes from "./routes/dashboard/DashboardRoutes.js"
import SuspenseWrapper from "./routes/dashboard/SuspenseWrapper.js"
import NotFoundPage from "./pages/NotFoundPage.jsx"
const root = ReactDOM.createRoot(document.getElementById("root"))

const App = lazy(() => import("./App"))

const renderLoader = () => <p>Loading</p>

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={renderLoader}>
        <App />
      </Suspense>
    ),
    children: dashboardRoutes,
  },
  {
    path: "*",
    element: (
      <SuspenseWrapper>
        <NotFoundPage />
      </SuspenseWrapper>
    ),
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
