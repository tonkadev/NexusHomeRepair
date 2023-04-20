import logo from '../NexusHomeRepV2.svg';
import '../App.css';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <div className="App">
      <Helmet>
      <title>Nexus Home Repair and Improvement</title>
      <meta name='description' content='Nexus Home Repair and Improvement in Mesa, Arizona, offers professional handyman services including installations, furniture assembly, and drywall repair. Contact us for all your home repair and improvement needs.' />
      <meta name='keywords' content='handyman services, doors, cabinets, electrical repairs, furniture assembly, Mesa Arizona, home repair, home improvement, Nexus Home Repair and Improvement' />
</Helmet>
      <header className="App-header" style={{ backgroundColor: '#f5f5f5' }}>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="iframe-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd7DCQbJCwkXWqdDwB1ochVizVUlYjSXrbVtaQQ2pErM7pfbw/viewform?embedded=true"
          width="100%" /* Set width to 100% to fill parent container */
          height="959" /* Set height to a fixed value */
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
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
