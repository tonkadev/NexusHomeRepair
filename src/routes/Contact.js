
import '../Contact.css';
import { useState } from 'react'; // <-- added useState hook
import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Contact() {

  const navigate = useNavigate();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // <-- added state variable

  function handleSuccess() {
    setShowSuccessMessage(true); // <-- set state to display success message
    setTimeout(() => {
      setShowSuccessMessage(false); // <-- reset state to hide success message after a delay
      navigate("/");
    }, 3000);
  }

  function handleSubmit(event) {
    event.preventDefault();
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
        //execute success message
        handleSuccess();

      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  return (
    <div className="contact-form">
      {showSuccessMessage &&   <h2 style={{color: "green", textAlign: "center"}}>
          Thanks for submitting your request!
        </h2>} {/* <-- display success message if showSuccessMessage is true */}
      <form id="myForm" onSubmit={handleSubmit}>
        <label>
          What type of service are you looking for?*
          <select name="serviceType" required>
            <option value="General Handyman">General Handyman</option>
            <option value="Wall Mount Installation">Wall Mount Installation</option>
            <option value="Furniture Assembly">Furniture Assembly</option>
            <option value="Trim/Finish Carpentry">Trim/Finish Carpentry</option>
            <option value="Electrical Fixtures">Electrical Fixtures</option>
            <option value="Drywall Repair">Drywall Repair</option>
          </select>
        </label>
        <label>
          Please provide a brief description of the project:*
          <textarea name="description" required></textarea>
        </label>
        <label>
          Name:*
          <input type="text" name="name" required />
        </label>
        <label>
          Email:*
          <input type="email" name="email" required />
        </label>
        <label>
          Address:*
          <input type="text" name="address" required />
        </label>
        <label>
          Phone Number:*
          <input type="tel" name="phone" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
