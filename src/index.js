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
import TestPage from "./pages/TestPage.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"
const root = ReactDOM.createRoot(document.getElementById("root"))
const App = lazy(() => import("./App"))

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SuspenseWrapper>
        <App />
      </SuspenseWrapper>
    ),
    children: dashboardRoutes,
  },

  {
    path: "/tes",
    element: (
      <SuspenseWrapper>
        <TestPage />
      </SuspenseWrapper>
    ),
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
