import React from "react";

const services = [
  {
    img: "https://lifecarehospitalrohtak.com/wp-content/uploads/2024/06/Urology1.png",
    title: "Neurosurgery",
    description:
      "Specializing in surgical treatment of neurological conditions.",
  },
  {
    img: "https://lifecarehospitalrohtak.com/wp-content/uploads/2024/06/Cancer1.png",
    title: "Cancer Surgery",
    description: "Comprehensive care for cancer treatment and surgeries.",
  },
  {
    img: "https://lifecarehospitalrohtak.com/wp-content/uploads/2024/06/Darma1.png",
    title: "Dermatology and Laser",
    description: "Advanced skin treatments including laser procedures.",
  },
  {
    img: "https://lifecarehospitalrohtak.com/wp-content/uploads/2024/06/Med1.png",
    title: "Internal Medicine",
    description: "Diagnosis and treatment of internal diseases.",
  },
];

const ServicesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-12 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {services.map(({ img, title, description }, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-4 group cursor-pointer"
          >
            <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 transition duration-300 ease-in-out group-hover:bg-red-50">
              <img
                src={img}
                alt={title}
                className="w-12 h-12 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-[#ac0d18]">
              {title}
            </h3>
            <p className="text-gray-600 text-sm max-w-xs">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
