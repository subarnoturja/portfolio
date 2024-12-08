import profilePic from "../assets/raviKumarProfile.webp";

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img
              src={profilePic}
              alt="Subarno Ranjan Barua"
              className="border border-stone-900 rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Subarno Ranjan Barua
            </h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              I am an aspiring full stack developer passionate about creating
              dynamic, user-friendly web experiences. I specialize in both
              frontend and backend development, utilizing modern tools like
              React.js, TailwindCSS, Node.js, Express.js, Firebase, and MongoDB
              to build efficient and scalable solutions. Committed to writing
              clean, maintainable code, I continuously refine my skills and stay
              updated with industry trends. I strive to bridge creativity and
              technology, delivering impactful solutions to real-world problems
              while collaborating and learning as I grow in the tech community.
            </p>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" download className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
