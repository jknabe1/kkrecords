"use client"

import React from "react";

const Page = () => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <div>
      <h1>Vill du boka någon av våra artister?</h1>
      <div className="flex items-center min-h-screen bg-gray-900">
  <div className="container mx-auto">
    <div className="max-w-md mx-auto my-10 bg-gray-800 p-5 rounded-md shadow-sm">
      <div className="text-center">
        <h1 className="my-3 text-3xl font-semibold text-gray-100">
          Contact Us
        </h1>
        <p className="text-gray-400 dark:text-gray-400">
          Fill up the form below to send us a message.
        </p>
      </div>
      <div className="m-7">
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <input type="hidden" name="subject" value="New Submission from Web3Forms" />

          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm text-gray-400">Full Name</label>
            <input type="text" name="name" id="name" placeholder="John Doe" required className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-400">Email Address</label>
            <input type="email" name="email" id="email" placeholder="you@company.com" required className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none" />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 text-sm text-gray-400">Phone Number</label>
            <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm text-gray-400">Your Message</label>

            <textarea name="message" id="message" placeholder="Your Message" className="w-full px-3 py-2 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none" required></textarea>
          </div>
          <div className="mb-6">
            <button type="submit" className="w-full bg-indigo-600 inline-block text-white no-underline hover:text-indigo-100 py-4 px-4 rounded-sm focus:outline-none">
              Send Message
            </button>
          </div>
          <p className="text-base text-center text-gray-400" id="result"></p>
        </form>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Page;
