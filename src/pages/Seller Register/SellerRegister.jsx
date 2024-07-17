import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Benefits from '../../components/Benefits/Benefits';

const SellerSignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    cnicNumber: '',
    email: '',
    phoneNumber: '',
    company: '',
    description: '',
    address: '',
    city: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

    // Auto-format CNIC
    if (name === 'cnicNumber' && value.length === 5) {
      setFormData({ ...formData, [name]: value + '-' });
    } else if (name === 'cnicNumber' && value.length === 13) {
      setFormData({ ...formData, [name]: value + '-' });
    }

    // Auto-format phone number
    if (name === 'phoneNumber' && value.length === 4) {
      setFormData({ ...formData, [name]: value + '-' });
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phonePattern = /^03[0-4]{1}[0-9]{1}-[0-9]{7}$/;
    return phonePattern.test(phoneNumber);
  };

  const validateCNIC = (cnicNumber) => {
    const cnicPattern = /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/;
    return cnicPattern.test(cnicNumber);
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(formData.fullName === ""){
        toast.error("Full name is required")
      }
      if(formData.cnicNumber === ""){
        toast.error("CNIC number is required")
      }
      if (!validateCNIC(formData.cnicNumber)) {
        toast.error('Invalid CNIC format. Please use the format 34123-12345678-9.');
        return;
      }
      if(formData.email === ""){
        toast.error("Email is required")
      }
      if(formData.phoneNumber === ""){
        toast.error("Phone Number is required")
      }
      if (!validatePhoneNumber(formData.phoneNumber)) {
        toast.error('Invalid phone number format. Please use the format 03XX-XXXXXXX.');
        return;
      }
      if(formData.company === ""){
        toast.error("Company Name is required")
      }
      if(formData.description === ""){
        toast.error("Company Description is required")
      }
      if(formData.address === ""){
        toast.error("Company Address is required")
      }
      if(formData.city === ""){
        toast.error("City is required")
      }
      if(formData.gender === ""){
        toast.error("Gender is required")
      }
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/seller/signup`, formData);
      toast.success('Seller account created successfully');
      console.log(response)
      setFormData({
        fullName: '',
        cnicNumber: '',
        email: '',
        phoneNumber: '',
        company: '',
        description: '',
        address: '',
        city: '',
        gender: '',
      });
      navigate('/success');
    } catch (error) {
      if (error.response && error.response.status === 400) {
       toast.error("email or cnic")
      } else {
        toast.error('An error occurred');
      }
    }
  };

  return (
    <>
        <div className="heroSection px-2 md:px-10 py-8">
      <div className="flex flex-col md:flex-row items-start w-full justify-between">
        <div className="self-start w-full  md:w-[calc(100%-20px)] md:mt-6 max-w-md mb-8 mx-auto md:mb-0">
          <h1 className="text-xl md:text-3xl text-white font-bold mb-2">Sign up as a seller!</h1>
          <p className="text-white leading-7 md:leading-9 text-sm md:text-lg">
            Join Eliphstore and unlock the potential of your business. Reach millions of customers, increase your sales,
            and grow your brand with our easy-to-use platform.
          </p>
        </div>
        <div className="bg-white h-auto w-full md:w-[calc(100%-20px)]  rounded-lg p-6 shadow-lg mx-auto md:mx-0">
          <Toaster />
          <h2 className="text-2xl self-start font-bold mb-6 text-center">Seller Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input type="text" name="fullName" placeholder="E.g: Raheeq Gill" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">CNIC Number</label>
                <input type="text" name="cnicNumber" placeholder="34103-1544609" value={formData.cnicNumber} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" name="email" placeholder="example@gmail.com" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input type="tel" name="phoneNumber" placeholder="0314-XXXXXXX" value={formData.phoneNumber} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Company</label>
                <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Description</label>
                <input type="text" name="description" placeholder="Company Description" value={formData.description} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Address</label>
                <input type="text" name="address" placeholder="Company Address" value={formData.address} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">City</label>
                <input type="text" name="city" placeholder="Lahore" value={formData.city} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Gender</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} className="mr-2" />
                  <label className="text-gray-700">Male</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} className="mr-2" />
                  <label className="text-gray-700">Female</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="gender" value="Prefer not to say" checked={formData.gender === 'Prefer not to say'} onChange={handleChange} className="mr-2" />
                  <label className="text-gray-700">Prefer not to say</label>
                </div>
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
    <Benefits/>
    </>
  );
};

export default SellerSignupForm;
