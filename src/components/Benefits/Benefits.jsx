import React from 'react';
import { FaRegistered,  FaMoneyBillWave, FaBullhorn, FaBookOpen } from 'react-icons/fa';
import './Benefits.css';
import { SiReactos } from 'react-icons/si';
import { FaTruckFast } from "react-icons/fa6";

function Benefits() {
    return (
      <div className="benefits-container">
        <div className="benefits-wrapper">
            <div className="benefits-grid">
            <div className="benefit-item">
          <SiReactos className="benefit-icon" />
          <span className="benefit-heading">Wide Audience</span>
          <span className="benefit-text">Reach millions of potential customers on Eliphstore, a leading online marketplace.</span>
        </div>
        <div className="benefit-item">
          <FaRegistered className="benefit-icon" />
          <span className="benefit-heading">Effortless Setup</span>
          <span className="benefit-text">Free registration and easy listing process to start selling quickly.</span>
        </div>
        <div className="benefit-item">
          <FaTruckFast className="benefit-icon" />
          <span className="benefit-heading">Seamless Delivery</span>
          <span className="benefit-text">Reliable and efficient delivery options through Eliphstore's network.</span>
        </div>
        <div className="benefit-item">
          <FaMoneyBillWave className="benefit-icon" />
          <span className="benefit-heading">Prompt Payments</span>
          <span className="benefit-text">Get paid on time for your sales with secure weekly deposits.</span>
        </div>
        <div className="benefit-item">
          <FaBullhorn className="benefit-icon" />
          <span className="benefit-heading">Marketing Support</span>
          <span className="benefit-text">Promote your products effectively with a range of marketing tools.</span>
        </div>
        <div className="benefit-item">
          <FaBookOpen className="benefit-icon" />
          <span className="benefit-heading">Learning Resources</span>
          <span className="benefit-text">Access valuable resources and support to help you grow your business.</span>
        </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Benefits;
  