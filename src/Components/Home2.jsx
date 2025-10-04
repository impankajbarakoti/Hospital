import React from "react";
import { FaUserMd, FaUsers } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

const Home2 = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col lg:flex-row items-center gap-12">
      {/* Left: Image */}
      <div className="relative w-full lg:w-1/2">
        <img
          src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/06/LCH-Home.png"
          alt="Life Care Hospital"
          className="rounded-xl shadow-lg"
        />

        {/* Patients Treated Badge */}
        <div className="absolute bottom-6 left-6 bg-blue-500 text-white rounded-xl px-6 py-4 shadow-lg">
          <h3 className="text-2xl font-bold">96K+</h3>
          <p className="text-sm">Patients Treated</p>
        </div>
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h4 className="text-red-600 font-semibold">Life Care Hospital</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Experience You Can Trust
        </h2>
        <p className="text-gray-600 leading-relaxed">
          With over a decade of excellence, Life Care Hospital is committed to
          providing the best medical treatment. Our team of skilled
          professionals is dedicated to ensuring your well-being.
        </p>
        <p className="text-gray-600 leading-relaxed">
          At Life Care Hospital, our mission is to deliver compassionate,
          comprehensive, and high-quality healthcare services to our community.
          We strive to exceed the expectations of our patients by providing
          exceptional medical care and personalized attention.
        </p>

        {/* Features */}
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <div className="flex items-start space-x-3">
            <FaUserMd className="text-blue-600 text-2xl" />
            <div>
              <h5 className="font-bold text-gray-900">Comprehensive Care</h5>
              <p className="text-gray-600 text-sm">
                We offer a wide range of medical services to meet the needs of
                our patients.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FaUsers className="text-blue-600 text-2xl" />
            <div>
              <h5 className="font-bold text-gray-900">Experienced Team</h5>
              <p className="text-gray-600 text-sm">
                Our medical staff brings years of expertise to provide the best
                possible outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-6">
          <button className="flex items-center bg-[#ac0d18] px-6 py-3 rounded-full font-semibold text-white transition">
            ABOUT MORE <MdArrowForward className="ml-2 text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home2;
