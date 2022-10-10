import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./bricks/NavBar";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Outlet/>
    </div>
  );
}

export default App;
