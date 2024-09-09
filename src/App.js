import "./App.css"
import DashboardProvider from "./context/DashboardProvider"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <>
      <DashboardProvider>
        <div className={"container mt-4"}>
          <Dashboard />
        </div>
      </DashboardProvider>
    </>
  )
}

export default App
