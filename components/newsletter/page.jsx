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
    <div className="py-10 px-4 sm:flex sm:justify-center sm:items-center dark:color-black dark:newsletter-bg border-y-4 border-black dark:border-white">
  <div className="text-center sm:text-left sm:w-1/2">
    <h2 className="text-2xl font-bold text-black">Få det senaste direkt till din mejl.</h2>
  </div>
  <div className="mt-4 sm:mt-0 sm:w-1/2">
    <form action="#" method="POST" className="max-w-sm mx-auto">
      <div className="flex items-center border-black rounded-lg">
        <input autoComplete="on" type="email" id="email" name="email" placeholder="Din mejl..." className="w-full py-2 px-4 rounded-l-lg focus:outline-none focus:ring focus:border-white placeholder-black"/>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-r-lg 
         hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Sign me up!</button>
      </div>
    </form>
  </div>
</div>

  );
};

export default Newsletter;
