import logo from '../NexusHomeHero1.0.svg';
import '../App.css';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";

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

      <Link to="/contact" relative="path">
        Request a free estimate
      </Link>

    </div>
  );
}
