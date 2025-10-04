import React from "react";
import { MdArrowForward } from "react-icons/md";// Import the arrow icon

const LatestBlogs = () => {
  return (
    <div className="container mx-auto my-12">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Latest News & Blogs
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Blog 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            className="w-full h-48 object-cover rounded-lg mb-4"
            src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/06/LOT7.jpg"
            alt="PRP Treatment"
          />
          <h3 className="text-xl font-semibold">PRP ट्रीटमेंट क्या होता है?</h3>
          <p className="text-gray-600 mt-2">
            PRP ट्रीटमेंट बालों को झड़ने से बचाने का सबसे प्रभावी तरीका।
          </p>
          <div className="mt-4 flex items-center text-gray-500">
            <span className="mr-2">teamlch</span>
            <span>June 26, 2024</span>
          </div>
          <a href="#" className="text-[#ac0d18] mt-4 inline-flex items-center">
            Read More
            <MdArrowForward size={20} className="sm:size-4 mt-1" />
          </a>
        </div>

        {/* Blog 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            className="w-full h-48 object-cover rounded-lg mb-4"
            src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/06/LOT11.jpg"
            alt="Skin Care"
          />
          <h3 className="text-xl font-semibold">बूढ़ापे को कहें अलविदा</h3>
          <p className="text-gray-600 mt-2">
            7 एंटी-एजिंग स्किन केयर ट्रीटमेंट्स से बूढ़ापे को कहें अलविदा।
          </p>
          <div className="mt-4 flex items-center text-gray-500">
            <span className="mr-2">teamlch</span>
            <span>June 26, 2024</span>
          </div>
          <a href="#" className="text-[#ac0d18] mt-4 inline-flex items-center">
            Read More
            <MdArrowForward size={20} className="sm:size-4 mt-1" />
          </a>
        </div>

        {/* Blog 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            className="w-full h-48 object-cover rounded-lg mb-4"
            src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/06/LOT14.jpg"
            alt="Pneumonia Treatment"
          />
          <h3 className="text-xl font-semibold">एंटल फिशर का इलाज</h3>
          <p className="text-gray-600 mt-2">
            एंटल फिशर का इलाज – उपचार, प्रकार और लेजर ऑपरेशन।
          </p>
          <div className="mt-4 flex items-center text-gray-500">
            <span className="mr-2">teamlch</span>
            <span>June 26, 2024</span>
          </div>
          <a href="#" className="text-[#ac0d18] mt-4 inline-flex items-center">
            Read More
            <MdArrowForward size={20} className="sm:size-4 mt-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
