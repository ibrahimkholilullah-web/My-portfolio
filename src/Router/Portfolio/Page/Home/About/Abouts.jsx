import React from "react";
import profile from "../../../../../assets/Onner Image/onner.jpeg"
import { fadeIn } from "../../../Animatons/variants";
import { motion } from "framer-motion";
motion
const Abouts = () => {
  return (
    <section className=" pt-32 mb-10">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-6">ABOUT ME</h2>
        <p className="text-center text-gray-600 mb-10">
        "Creative web developer delivering responsive, user-friendly, and high-performance websites that drive engagement, growth, and seamless digital experiences."
        </p>
        <div className="lg:flex gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2 md:flex justify-center">
            <motion.div 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false,amount: 0.7}}
            className="relative my-2 w-72 h-72 lg:w-96 lg:h-96 ">
              <img
                src={profile}
                alt="Profile"
                className="absolute rounded-3xl border p-1 inset-0 w-full h-full object-cover"
              />
              {/* Social Media Icons */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-4">
                <a
                  href="#"
                  className="text-gray-800 hover:text-yellow-400 text-xl"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-yellow-400 text-xl"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-yellow-400 text-xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-yellow-400 text-xl"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Text Section */}
          <motion.div 
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false,amount: 0.3}}
          className="lg:w-1/2 lg:my-4 sm:my-4">
            <h3 className="text-2xl font-bold">
              Hello, I am{" "}
              <span className="text-yellow-400">Ibrahim Kholilulla</span>
            </h3>
            <p className="text-gray-600 my-4">
              Web Designer and Web Developer
            </p>
            <p className="text-gray-600 mb-6">
            Thank you very much for viewing my portfolio. I am a computer science student and have recently completed my diploma in engineering. Along with my studies, I have also studied website design and development. I have always been passionate about learning, which is why I joined a polytechnic and continued my studies there. <br /> <br />

            My coding journey started in 2024, through an elder brother who introduced me to the basics of coding. His guidance sparked my interest in programming. After a while, I started learning basic concepts like HTML, CSS, and JavaScript from YouTube. To further enhance my skills, I joined the 10th batch of Programming Hero to learn programming more systematically. <br /><br />
            
            
                        </p>

          
          </motion.div>
        </div>
        <p className="my-4">Apart from programming, I am very good at sports, especially cricket. Before I started programming, I was very interested in cricket, but for some reason, I could not pursue it anymore. Now that I am fully focused on programming, my main goal is to become a skilled programmer. I want to create an app or website that can present online solutions in an easy and user-friendly way.</p>
          {/* Skills */}
            <h4 className="text-lg font-bold mb-2">MY SKILLS</h4>
            <div className= " space-y-3">
              {/* Skill 1 */}
              <div className="mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>HTML6</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4">
                  <div className="bg-[#F6083A] h-4 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>

              {/* Skill 2 */}
              <div className="mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>CSS</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4">
                  <div className="bg-[#F6083A] h-4 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>

              {/* Skill 3 */}
              <div>
                <div className="flex justify-between text-gray-600">
                  <span>JS</span>
                  <span>70%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4">
                  <div className="bg-[#F6083A] h-4 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
              {/* Skill 3 */}
              <div>
                <div className="flex justify-between text-gray-600">
                  <span>React js</span>
                  <span>50%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4">
                  <div className="bg-[#F6083A] h-4 rounded-full" style={{ width: "50%" }}></div>
                </div>
              </div>
              {/* Skill 3 */}
              <div>
                <div className="flex justify-between text-gray-600">
                  <span>Firebase</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4">
                  <div className="bg-[#F6083A] h-4 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
              {/* Skill 3 */}
              <div>
                <div className="flex justify-between text-gray-600">
                  <span>Express js</span>
                  <span>40%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4">
                  <div className="bg-[#F6083A] h-4 rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>
              {/* Skill 3 */}
              <div>
                <div className="flex justify-between text-gray-600">
                  <span>MongoDB</span>
                  <span>40%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4">
                  <div className="bg-[#F6083A] h-4 rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
      </div>
    </section>
  );
};

export default Abouts;
