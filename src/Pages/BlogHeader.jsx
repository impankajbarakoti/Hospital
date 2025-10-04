import Blogs from "./Blogs";

const BlogHeader = () => {
  return (
    <>
      {" "}
      <section
        className="relative py-16 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://shtheme.com/demosd/mivaan/wp-content/uploads/2023/10/hero-bg.png')",
        }}
      >
        {/* Optional overlay to darken the background image for better readability */}
        {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}

        <div className="relative z-10 max-w-6xl mx-auto text-center ">
          <h2 className="text-3xl sm:text-4xl font-bold  text-[#ac0d18] mb-4">
            Our Blogs
          </h2>
          <p className="lg:text-2xl  text-black text-sm ">
            Nunc nisl felis, congue non euismod dignissim id eros. Maecenas eu
            molestie purus, in dignissim nequeo nesectetur adipiscing elit.
          </p>
        </div>
      </section>
      <Blogs />
    </>
  );
};

export default BlogHeader;
