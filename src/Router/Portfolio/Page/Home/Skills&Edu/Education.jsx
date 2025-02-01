import React, { useEffect, useState } from "react";
import Shared from "../../Shared/Shared";
import Card from "./Card";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee"; // Marquee for card scrolling

const Education = () => {
  const [tech, setTech] = useState([]);

  useEffect(() => {
    fetch("/tachnology.json")
      .then((res) => res.json())
      .then((data) => setTech(data));
  }, []);

  const fadeIn = (direction, delay) => ({
    hidden: { opacity: 0, y: direction === "up" ? -50 : 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  });

  return (
    <div className=" container mx-auto px-6">
      {/* Header Section */}
      
      <div className="md:flex-row justify-between gap-10 my-10">
        {/* Skills Section with Marquee */}
        <div className="border-b-2  md:border-b-0 border-gray-300 pb-10 md:pb-0">
          <h1 className="text-3xl font-bold text-center md:text-left mb-4">
            Technical Skills

          </h1>
          <p className="text-[#F6083A] text-center md:text-left">2024 - 2025</p>
          
          {/* Marquee Animation for Skills */}
          <Marquee speed={50} pauseOnHover={true} gradient={false} >
            <div className="flex gap-10 my-10 ">
              {tech.map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </div>
          </Marquee>
        </div>

        {/* Education Section */}
        <div className="mt-6">
          <h1 className="text-3xl font-bold text-center md:text-left mb-4">
            Education Quality
          </h1>
          <p className="text-[#F6083A] text-center md:text-left">2020 - 2024</p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* Diploma Section */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="shadow-lg p-6 rounded-xl bg-[#111827] border text-gray-200 transition-transform duration-300 hover:scale-105"
            >
              <h2 className="text-xl font-bold mb-2">
                Diploma in Computer Science & Technology
              </h2>
              <p className="font-semibold">Tangail Polytechnic Institute</p>
              <p className="text-sm mb-2">(2020 - 2024)</p>
              <p className="text-sm font-semibold">CGPA: 3.53 / 4.00</p>
              <p className="mt-3 text-gray-400">
                A Diploma in Computer Science & Technology equips students with
                essential skills in programming, software development,
                networking, and IT infrastructure, providing a strong foundation
                for a successful career in tech industries.
              </p>
            </motion.div>

            {/* Skill Development Section */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="shadow-lg p-6 rounded-xl bg-[#111827] border text-gray-200 transition-transform duration-300 hover:scale-105"
            >
              <h2 className="text-xl font-bold mb-2">Skill Development</h2>
              <p className="font-semibold">Programming Hero Course</p>
              <p className="text-sm mb-2">(6 months)</p>
              <p className="mt-3 text-gray-400">
                Programming Hero offers an interactive course designed to teach
                coding through fun challenges, projects, and a hands-on
                approach, suitable for beginners.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
