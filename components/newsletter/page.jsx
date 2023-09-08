"use client"
import "@/app/globals.css"

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
    <div className="py-8 newsletter-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-black mb-4">Brev?</h2>
        <p className="text-black mb-4 hidden">Kan du inte få nog av oss? Isåfall, gå med i vårt mejlutskick. Då får du den senaste informationen från oss. Kan vara allt från nya band och konserter till rekommendationer. </p>
        <form onSubmit={handleSubmit} id="Newsletter">
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Din mejl..."
              className="mr-2 px-4 py-2 border-b-2 bg-transparent border-black focus:outline-none placeholder-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-4 py-2 text-black hover:text-white hover:bg-black focus:outline-none border-2 border-black rounded-lg"
            >
              Sign me up!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
