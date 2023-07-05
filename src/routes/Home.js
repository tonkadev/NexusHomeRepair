import logo from '../NexusHomeHero1.0.svg';
import '../App.css';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import me from "../myAvatar.png";

export default function Home() {

  function handleSubmit(event) {
    event.preventDefault(); // prevent the default form submission behavior
    const form = document.getElementById('myForm');
    const formData = new FormData(form);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch('https://formworker.nexusgig.com', options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  return (
    <div className="App">
      <Helmet>
        <title>Nexus Home Rep V2</title>
        <meta name="description" content="Nexus Home Rep Version 2" />
      </Helmet>
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <h5><p className='italic'>Guaranteed quality work at affordable prices</p></h5>
      </div>

      <h2> <Link to="/contact" relative="path">
        Request a free estimate
      </Link></h2>

      {/* <h1>About Me</h1> */}

{/* <div className="avatar-container">
  <Avatar
    alt="profile pic"
    variant="rounded"
    src={me}
    style={{ width: "150px", height: "150px", margin: "0 auto" }}
  />
</div>

<div className="text-container">
  <p className="text">
  I am a licensed contractor providing handyman services in Northeast Mesa - 85215 and vicinity.  
          I have experience with all sorts of home repair and improvement projects. 
          I enjoy helping people with their household needs and take pride in delivering high-quality workmanship. 
          My passion for problem-solving and attention to detail ensure that I can find creative solutions 
           to any home-related challenge. 

           Because I am licensed, bonded and Insured you can rest easy knowing 
           that your home repair and improvement projects are in safe and reliable hands, 
           with added protection against any unforeseen events or liabilities.


  </p>

</div> */}

    

    </div>
  );
}
