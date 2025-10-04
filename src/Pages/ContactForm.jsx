import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the functionality for form submission
    console.log(formData);
  };

  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-lg mx-auto text-center bg-white   p-8 rounded-lg shadow-lg ">
        <h3 className="text-2xl font-bold text-[#ac0d18]  mb-6">
          Have Questions? Get in Touch!
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-600 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Write your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-600 mb-2"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="+91 00000 00000"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-600 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-600 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <p className="text-sm text-gray-500 mt-2">
            <span className="text-red-500">* </span>Call us 24/7 at +91 092543 92542 or
            fill out the form below to receive a free and confidential initial
            consultation.
          </p>

          <button
            type="submit"
            className="w-full py-3 bg-[#ac0d18]  text-white text-lg font-semibold rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
