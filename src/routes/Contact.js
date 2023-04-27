import logo from '../NexusHomeRepV2.svg';
import '../Contact.css';

export default function Contact() {

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
    <div className="contact-form">
      <form id="myForm" onSubmit={handleSubmit}>
        <label>
          What type of service are you looking for?
          <select name="serviceType">
            <option value="">Select an option</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Digital Marketing">Digital Marketing</option>
          </select>
        </label>
        <label>
          Please provide a brief description of the project:
          <textarea name="description"></textarea>
        </label>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
