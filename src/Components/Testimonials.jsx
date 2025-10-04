import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
        What Clients Say?
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl ">
          <img
            src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/06/client-1.png"
            alt="Client 1"
            className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-red-600 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-red-800"
          />
          <h3 className="text-xl font-semibold text-center mb-2">
            Rishikesh Ladwal
          </h3>
          <p className="text-center text-gray-600">
            I was admitted to hospital for surgery and all staff is very
            cooperative and helpful in nature. Thank you for everything.
          </p>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl ">
          <img
            src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/06/client-1.png"
            alt="Client 2"
            className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-red-600 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-red-800"
          />
          <h3 className="text-xl font-semibold text-center mb-2">Aman Singh</h3>
          <p className="text-center text-gray-600">
            My uncle admitted in this hospital, this hospital is very good. The
            doctors and staff perform their responsibility very well.
          </p>
        </div>
        {/* Testimonial 3 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl ">
          <img
            src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/06/client-1.png"
            alt="Client 3"
            className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-red-600 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-red-800"
          />
          <h3 className="text-xl font-semibold text-center mb-2">
            Amit Srivastav
          </h3>
          <p className="text-center text-gray-600">
            Best hospital in Rohtak and best facilities & treatment like skin,
            ortho, neuro, MD medicine. Specially thanks to Dr. Rajesh jale sir
            and Dr. Sudesh jale Ma’am.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
