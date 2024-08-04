import './App.css';
import {Outlet} from "react-router-dom";
import HouseEnumProvider from "./context/HouseEnumProvider";
import Menu from "./pages/menu";
import DashboardProvider from "./context/DashboardProvider";

function App() {
    return (
      <HouseEnumProvider>
          <DashboardProvider>
                  <Menu/>
                  <div className={'container mt-4'}>
                      <Outlet />
                  </div>
          </DashboardProvider>
      </HouseEnumProvider>
    );
}

export default App;
