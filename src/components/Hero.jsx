import profilePic from "../assets/Enhanced_LinkedIn.jpeg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    }
  }
}

const childVariants = { 
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x:0, transition: { duration: 0.5 }}
}

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Subarno Ranjan Barua"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2
             variants={childVariants}
            className="pb-2 text-4xl tracking-tighter lg:text-7xl">
              Subarno Ranjan Barua
            </motion.h2>
            <motion.span
            variants={childVariants}
             className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.p 
            variants={childVariants}
            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              I am an aspiring full stack developer passionate about creating
              dynamic, user-friendly web experiences. I specialize in both
              frontend and backend development, utilizing modern tools like
              React.js, TailwindCSS, Node.js, Express.js, Firebase, and MongoDB
              to build efficient and scalable solutions. Committed to writing
              clean, maintainable code, I continuously refine my skills and stay
              updated with industry trends. I strive to bridge creativity and
              technology, delivering impactful solutions to real-world problems
              while collaborating and learning as I grow in the tech community.
            </motion.p>
            <motion.a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" download variants={childVariants} className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
