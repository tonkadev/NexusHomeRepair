import logo from './NexusHomeRep.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <h6>TEST</h6>

       {/* <Link to="about">About Us</Link> */}
     
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
