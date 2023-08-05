"use client"

import React, { useState } from 'react';
import axios from 'axios';
const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://a.klaviyo.com/api/v1/forms/YOUR_FORM_ID/subscribe',
        {
          api_key: 'U9kMih',
          email: email,
        }
      );

      // Handle the response as needed
      console.log(response.data);
    } catch (error) {
      // Handle any error that occurred during the API request
      console.error(error);
    }

    setEmail('');
  };

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Subscribe to our Newsletter</h2>
        <p className="text-gray-600 mb-4">Get updates, news, and special offers straight to your inbox.</p>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="mr-2 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
