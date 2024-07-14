import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={onChange} 
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input 
            type="email" 
            name="email" 
            value={email} 
            onChange={onChange} 
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea 
            name="message" 
            value={message} 
            onChange={onChange} 
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
