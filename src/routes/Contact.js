import logo from '../NexusHomeRepV2.svg';
import '../Contact.css';
import { useHistory } from 'react-router-dom';


export default function Contact() {

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
    fetch('https://formworker.nexusgig.com', options, {mode: 'cors-with-forced-preflight'})
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const successMsg = document.getElementById('successMsg');
        successMsg.style.display = 'block';
        form.reset();
        setTimeout(() => {
          successMsg.style.display = 'none';
          window.location.href = '/';
        }, 3000);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  

  return (
    <div className="contact-form">
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
