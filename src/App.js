import './App.css';
import {Outlet} from "react-router-dom";
import HouseProvider from "./context/HouseProvider";
import Menu from "./pages/menu";

function App() {
    return (
      <HouseProvider>
          <Menu/>
          <div className={'container'}>
              <h3>Välkommen till oss</h3>
              <Outlet />
          </div>
      </HouseProvider>
    );
}

export default App;
