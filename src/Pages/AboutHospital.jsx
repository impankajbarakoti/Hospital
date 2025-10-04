import React from "react";

const AboutHospital = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* About Us Heading */}
      <h1 className="text-4xl font-bold text-[#ac0d18] text-center mb-8">
        About Us
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-8">
        {/* Image Section */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img
            className="rounded-lg w-full md:w-[400px] object-cover"
            src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/07/about-image1-1.png"
            alt="Life Care Hospital"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 ml-0 md:ml-6">
          <h2 className="text-3xl font-bold text-black mb-4">
            Life Care Hospital
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Life Care Hospital is established by a team of specialized doctors
            whose aim is to render their services to patients with the highest
            standards of medical care. We believe in providing the best to the
            people who admit to our hospital, and for us, our patients are of
            top priority. Our commitment goes beyond medical treatment; we focus
            on comprehensive care that encompasses physical, emotional, and
            psychological well-being.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            At Life Care Hospital, we do not believe in making money; our motto
            is to help in making a healthy and better society. We strive to
            create an environment where patients feel supported and understood,
            ensuring that their journey to recovery is as smooth and comfortable
            as possible. Our state-of-the-art facilities, coupled with our
            compassionate staff, ensure that each patient receives personalized
            and effective treatment.
          </p>
          <p className="text-lg text-gray-700">
            Join us in our mission to promote health, alleviate suffering, and
            foster a supportive community where everyone can thrive. At Life
            Care Hospital, your health and well-being are our top priorities,
            and we are here to support you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHospital;
