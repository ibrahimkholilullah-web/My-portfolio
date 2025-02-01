import React from "react";
import profile from "../../../../../assets/Onner Image/onner.jpeg";
import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, delay },
  },
});

const skills = [
  { name: "HTML5", value: 90 },
  { name: "CSS", value: 85 },
  { name: "JavaScript", value: 70 },
  { name: "React.js", value: 75 },
  { name: "Firebase", value: 80 },
  { name: "Express.js", value: 40 },
  { name: "Node.js", value: 40 },
  { name: "MongoDB", value: 40 },
];

const Abouts = () => {
  return (
    <section className="pt-32 mb-10 bg-gray-900 text-white px-6 md:px-12">
      <div className="container mx-auto">
        {/* Title */}
        <motion.h2 
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="text-3xl font-bold text-center mb-6 text-yellow-400"
        >
          ABOUT ME
        </motion.h2>

        <motion.p 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="text-center text-gray-300 mb-10 lg:w-6/12 mx-auto"
        >
          "Creative web developer delivering responsive, user-friendly, and high-performance websites that drive engagement, growth, and seamless digital experiences."
        </motion.p>

        <div className="lg:flex gap-12 items-center">
          {/* Image Section */}
          <motion.div 
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <img
                src={profile}
                alt="Profile"
                className="rounded-3xl border p-1 w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Text Section */}
          <motion.div 
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-bold">
              Hello, I am <span className="text-yellow-400">Ibrahim Kholilulla</span>
            </h3>
            <p className="text-gray-300 my-4">Web Designer and Web Developer</p>
            <p className="text-gray-300 mb-6">
              Thank you very much for viewing my portfolio. I am a computer science student and have recently completed my diploma in engineering. Along with my studies, I have also studied website design and development.
            </p>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.h4 
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="text-lg font-bold mb-4 text-yellow-400 text-center"
        >
          MY SKILLS
        </motion.h4>
        <div className="flex flex-wrap gap-6 justify-center">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-center"
            >
              <div
                className="radial-progress bg-primary text-white border-red-600"
                style={{ "--value": skill.value }}
                role="progressbar"
              >
                {skill.value}%
              </div>
              <p className="text-gray-300 mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Abouts;
