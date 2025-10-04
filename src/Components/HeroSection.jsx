import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-[url('https://shtheme.com/demosd/mivaan/wp-content/uploads/2023/10/hero-bg.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center px-6 sm:px-12 md:px-20 py-2 sm:py-16">
      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-between text-black">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-red-400 text-xl sm:text-sm mb-2 sm:mb-3">
            Welcome to Life Care Hospital
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6">
            Caring for Life with <br /> Compassion and Quality
          </h1>
          <p className="text-black text-xs sm:text-sm md:text-base mb-6 sm:mb-8">
            At Life Care Hospital, we prioritize your well-being with
            personalized care. Experience the difference with our expert medical
            team and state-of-the-art facilities.
          </p>

          {/* Button wrapper for alignment */}
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#ac0d18] hover:bg-red-700 transition text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full flex items-center justify-center gap-2 text-sm sm:text-base">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <a href="/">
            <img
              src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/07/Hero.png"
              alt="Life Care Hospital Hero"
              className="rounded-lg max-w-full h-auto max-h-[350px] sm:max-h-[450px] md:max-h-[500px] object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
