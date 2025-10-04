import React from "react";

const MapSection = () => {
  return (
    <div
      className="relative w-full"
      style={{ height: "100vh" }} // Explicitly set the height to 100vh
    >
      {/* Embed Google Map using iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.9020176332634!2d-95.36980288471076!3d29.760426981979207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3b894fe4297%3A0xfaf0b6f7be0e7103!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1613388711599!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      {/* Hero Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10"></div>
    </div>
  );
};

export default MapSection;
