import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {

    const divStyle = {
        backgroundColor: '#2c2d2f',
    };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sbdbi8r', 'template_aei4gls', e.target, 'QafuBtRBZyIRep6EA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="flex justify-center items-center h-screen mt-4">

      <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 rounded ">
        <h2 className="text-2xl text-center font-bold mb-6">LET`S TALK</h2>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={divStyle}
            className="w-full px-3 py-2 border rounded}"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={divStyle}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={divStyle}
            className="w-full px-3 py-2 border rounded"
            rows="5"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
