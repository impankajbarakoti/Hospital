import React from "react";

const HealthcareServices = () => {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-base sm:text-lg md:text-xl text-red-500 mb-2">
          Comprehensive Healthcare Services at Life Care Hospital
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 mb-10 sm:mb-12">
          Ensuring Excellence and Accessibility in Every Aspect of Patient Care
        </h3>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center group">
            <div className="relative flex items-center justify-center mb-4">
              <img
                src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/07/aw1.png"
                alt="Emergency 24/7"
                className="w-16 h-16 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow"
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Emergency 24/7
            </h4>
            <p className="text-center text-gray-600 text-sm sm:text-base">
              Consists of doctors with specialized training and years of
              experience in dealing with medical and surgical emergency
              situations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center group">
            <div className="relative flex items-center justify-center mb-4">
              <img
                src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/07/aq1.png"
                alt="Modular OT"
                className="w-16 h-16 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-red-100"
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Modular OT
            </h4>
            <p className="text-center text-gray-600 text-sm sm:text-base">
              Fully equipped with three modular operating theaters geared up
              with the latest technology to perform all major and advanced
              surgeries.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center group">
            <div className="relative flex items-center justify-center mb-4">
              <img
                src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/07/ac1.png"
                alt="Critical Care & ICU"
                className="w-16 h-16 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-2xl"
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Critical Care & ICU
            </h4>
            <p className="text-center text-gray-600 text-sm sm:text-base">
              Combining technology and expertise with high-tech and latest
              equipment, providing patient care by experienced doctors and staff
              at an affordable cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareServices;
