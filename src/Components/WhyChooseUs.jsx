import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
        Why Choose Us
      </h2>
      <p className="text-center text-2xl font-bold text-gray-600 mb-8">
        Trusted by over 5+ lakh patients, Life Care Hospital stands out for:
      </p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105">
          <img
            src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/07/Hospital1.png"
            alt="Emergency Care"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            24/7 Emergency Care
          </h3>
          <p className="text-gray-600">
            Immediate care available around the clock.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105">
          <img
            src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/07/asd1.png"
            alt="Quality Treatment"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Quality Treatment and Care
          </h3>
          <p className="text-gray-600">Receive top-notch medical attention.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105">
          <img
            src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/07/2471.png"
            alt="Friendly Environment"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Friendly and Welcoming Environment
          </h3>
          <p className="text-gray-600">
            Experience a warm and caring atmosphere.
          </p>
        </div>
        {/* Card 4 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105">
          <img
            src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/07/Health-Services0.png"
            alt="Comprehensive Services"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Comprehensive Medical & Health Services
          </h3>
          <p className="text-gray-600">
            Access a full range of medical services.
          </p>
        </div>
        {/* Card 5 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105">
          <img
            src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/07/asdd1.png"
            alt="State-of-the-Art Equipment"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            State-of-the-Art Equipment
          </h3>
          <p className="text-gray-600">
            Benefit from the latest medical technology.
          </p>
        </div>
        {/* Card 6 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105">
          <img
            src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/07/asddd1.png"
            alt="Support Services"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Exclusive Support Services
          </h3>
          <p className="text-gray-600">
            Enjoy dedicated and personalized support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
