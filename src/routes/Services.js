import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <h1>Services Offered:</h1>

      <div className="services-grid">

        <div className="service-box">
          <h2>Installations</h2>
          <p>Wall mounting of TV's, artwork, shelving, and blinds.</p>
          {/* Additional information or content for Service 5 */}
        </div>
        <div className="service-box">
          <h2>Finish Carpentry</h2>
          <p>Installation of trim, molding, doors, and cabinetry.</p>
          {/* Additional information or content for Service 2 */}
        </div>
        <div className="service-box">
          <h2>Furniture Assembly</h2>
          <p>Assembly services for Ikea and other furniture brands, accommodating a wide range of furniture types and styles.</p>
          {/* Additional information or content for Service 3 */}
        </div>
        <div className="service-box">
          <h2>Electrical  Repair</h2>
          <p>Installation and repair of lighting fixtures, ceiling fans, wall outlets, and switches.</p>
          {/* Additional information or content for Service 1 */}
        </div>

        <div className="service-box">
          <h2>Drywall Repair</h2>
          <p>Patching of holes and cracks, corner and bullnose edge repairs.</p>
          {/* Additional information or content for Service 4 */}
        </div>

        <div className="service-box">
          <h2>General Handyman</h2>
          <p>Don't have the time to tackle those TODO items around the house? Give me a call!</p>
          <p> (480) 331-4840</p>
          {/* Additional information or content for Service 6 */}
        </div>
        <Link to="/contact" relative="path">
          Request a free estimate
        </Link>
      </div>
    </>
  );
}