import "./App.css"
import DashboardProvider from "./context/DashboardProvider"
import DashboardPage from "./pages/DashboardPage"
import Menu from "./pages/menu"
import Sidebar from "./pages/sidebar"

function App() {
  return (
    <>
      <Menu />

      <DashboardProvider>
        <div className="container">
          <div className="row py-3">
            <div className={"col-3"}>
              <Sidebar />
            </div>
            <div className={"col"}>
              <DashboardPage />
            </div>
          </div>
        </div>
      </DashboardProvider>
    </>
  )
}

export default App
