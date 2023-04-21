
import './App.css';
import About from './routes/About';
import Home from './routes/Home';
import Services from  './routes/Services';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ButtonAppBar from './ButtonAppBar';
import { HelmetProvider, Helmet } from 'react-helmet-async';

export default function App() {
  return (
    <HelmetProvider> 
    <div className="App">
      
       {/* <Link to="about">About Us</Link> */}
     
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
         

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
    </HelmetProvider>
  );
}

function Layout() {
  return (

    <div>
        <Helmet>
      <title>Nexus Home Repair and Improvement</title>
      <meta name='description' content='Nexus Home Repair and Improvement in Mesa, Arizona, offers professional handyman services including installations, furniture assembly, and drywall repair. Contact us for all your home repair and improvement needs.' />
      <meta name='keywords' content='handyman services, doors, cabinets, electrical repairs, furniture assembly, Mesa Arizona, home repair, home improvement, Nexus Home Repair and Improvement' />
</Helmet>

      <ButtonAppBar />
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}

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

