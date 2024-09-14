import "./App.css"
import DashboardProvider from "./context/DashboardProvider"
import DashboardPage from "./pages/DashboardPage"
import Sidebar from "./pages/sidebar"

function App() {
  return (
    <>
      <DashboardProvider>
        <div className="container mb-4 mt-2">
          <div className="row py-3">
            <div className={"col-3"}>
              <Sidebar />
            </div>
            <div className={"col"}>
              <h3>Välkommen till admin</h3>
              <DashboardPage />
            </div>
          </div>
        </div>
      </DashboardProvider>
    </>
  )
}

export default App
