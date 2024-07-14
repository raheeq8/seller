import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-500 mb-4">Success!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your seller account is registered. Our team will contact you via call or email as soon as possible for your account verification.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for joining Eliphstore. We are excited to have you on board!
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
