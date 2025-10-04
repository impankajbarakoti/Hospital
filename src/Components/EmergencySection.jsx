import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const EmergencySection = () => {
  return (
    <div className="bg-white px-6 py-12 sm:px-10 md:px-16 lg:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side: Ambulance Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/06/helpline-1.png"
            alt="Ambulance"
            className="max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[450px] h-auto object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Emergency Text and Contact Details */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl  text-red-600">
            Need Emergency Contact?
          </h3>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading">
            We're Here To Help Immediately.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            In times of urgent medical need, our 24/7 emergency hotline stands
            ready to provide immediate access to expert care, ensuring your
            health and safety are our top priority.
          </p>

          {/* ✅ Text always left aligned */}
          <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-700 text-left">
            <li>• 24/7 Availability</li>
            <li>• Emergency Hotline</li>
          </ul>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6 mt-6">
            {/* Phone Card */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3 sm:space-x-4">
              <FaPhoneAlt className="text-blue-500 text-xl sm:text-2xl" />
              <span className="text-sm sm:text-base md:text-lg font-medium">
                +91 9254392542
              </span>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3 sm:space-x-4">
              <FaWhatsapp className="text-green-500 text-xl sm:text-2xl" />
              <span className="text-sm sm:text-base md:text-lg font-medium">
                +91 9350509292
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencySection;
