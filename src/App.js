import logo from './NexusHomeRep.svg';
import './App.css';
import About from './routes/About';
import Home from './routes/Home';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ButtonAppBar from './ButtonAppBar';

export default function App() {
  return (
    <div className="App">
      
       {/* <Link to="about">About Us</Link> */}
     
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>

      <ButtonAppBar />
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
       
            <Link to="/">Home</Link>
       
            <Link to="/about">About</Link>
         
            <Link to="/nothing-here">Nothing Here</Link>
       
      </nav>


      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

