import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#ac0d18] mb-8">
          Contact Us
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Phone */}
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-black text-4xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Contact Phone
            </h4>
            <p className="text-center text-[#ac0d18]">+91 92543 92542</p>
            <p className="text-center text-[#ac0d18]">Reach us anytime.</p>
          </div>

          {/* Contact Email */}
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-black text-4xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Contact Email
            </h4>
            <p className="text-center text-[#ac0d18]">
              lochrohtak123@gmail.com
            </p>
            <p className="text-center text-[#ac0d18] ">Send us an email.</p>
          </div>

          {/* Our Location */}
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-blacl text-4xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Our Location
            </h4>
            <p className="text-center text-[#ac0d18]">
              Near Kailash Ashram, Model Town, Rohtak.
            </p>
            <p className="text-center text-[#ac0d18]">Visit us.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
