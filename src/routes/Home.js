import logo from '../NexusHomeRepV2.svg';
import '../App.css';
import { Helmet } from 'react-helmet-async';

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
      <header className="App-header" style={{ backgroundColor: '#f5f5f5' }}>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="iframe-container">
        <form id="myForm" onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>

      <style>
        {`
        @media only screen and (min-width: 768px) {
          .iframe-container {
            display: none;
          }
        }

        @media only screen and (max-width: 767px) {
          .iframe-container {
            width: 100%;
            overflow-x: auto;
            max-width: 640px;
            margin: 0 auto;
          }
        }
        `}
      </style>

    </div>
  );
}
