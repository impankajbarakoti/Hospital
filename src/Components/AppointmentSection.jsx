import React from "react";
import { MdArrowForward } from "react-icons/md";

const AppointmentSection = () => {
  return (
    <div
      className="bg-cover bg-center px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20"
      style={{
        backgroundImage:
          "url('https://shtheme.com/demosd/mivaan/wp-content/uploads/2023/10/checkup-bg.png')",
      }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-10">
        {/* Right Side: Text and Button */}
        <div className="flex flex-col items-center md:items-start text-white text-center md:text-left space-y-4 md:space-y-6">
          <h3 className="text-sm sm:text-base md:text-lg font-medium text-red-500">
            Seeking Expert Medical Care?
          </h3>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            Life Care Hospital Provides Top-Notch Medical Services{" "}
            <br className="hidden sm:block" />
            For You And Your Family.
          </h1>
          <button className="bg-[#ac0d18] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center space-x-2 hover:bg-red-900 transition duration-300 text-sm sm:text-base font-medium">
            <span>GET APPOINTMENT</span>
            <MdArrowForward size={20} className="sm:size-6" />
          </button>
        </div>

        {/* Left Side: Doctor Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/06/Dr.png"
            alt="Doctor"
            className="max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[340px] h-auto rounded-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;
