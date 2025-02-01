import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import onner from "../../../../../assets/Onner Image/Picsart_24-05-19_02-17-22-975-01.jpeg";

// Fade-in animation variants
const fadeIn = (direction, delay) => ({
  hidden: { opacity: 0, x: direction === "left" ? -50 : direction === "right" ? 50 : 0 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, delay } },
});

const Banner = () => {
  return (
    <div className="hero  px-6  md:mt-16 lg:mt-16 ">
      <div className="lg:flex justify-between items-center gap-10 flex-col md:flex-row-reverse">
        
        {/* Profile Image Section */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="lg:w-1/2 flex justify-center"
        >
          <img
            className="lg:w-3/4 w-3/4 mx-auto rounded-xl p-1 shadow-2xl shadow-black"
            src={onner}
            alt="Profile"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h3 className="text-3xl font-bold my-1">
            Hello, <span className="text-[#F6083A]">I'm</span>
          </h3>
          <h1 className="md:text-5xl text-3xl my-3 font-bold">Ibrahim Kholilulla</h1>
          <h4 className="md:text-2xl text-sm my-2">Web Designer & Web Developer</h4>
          <p className="py-6 text-[13px] md:text-lg text-[#AFB3CA]">
            "Professional Web Design & Development Services: Create stunning, responsive websites
            that drive results. Expert designers and developers ensuring seamless user experiences,
            modern designs, and cutting-edge functionality. Let's build your online success!"
          </p>

          {/* Social Media Icons */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="my-2 uppercase">Find Me on</p>
            <div className="flex items-center justify-center lg:justify-start gap-6 my-4">
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=100084535035397",
                  icon: <FaFacebookF size={20} />,
                  bgHover: "hover:bg-blue-600",
                },
                {
                  href: "https://www.linkedin.com/in/ibrahim-kholilullah23/",
                  icon: <FaLinkedinIn size={20} />,
                  bgHover: "hover:bg-[#1ebea5]",
                },
                {
                  href: "https://web.whatsapp.com/ibrahimkhan1357910",
                  icon: <FaWhatsapp size={20} />,
                  bgHover: "hover:bg-[#1ebea5]",
                },
                {
                  href: "https://github.com/ibrahimkholilullah-web",
                  icon: <FaGithub size={20} />,
                  bgHover: "hover:bg-gray-700",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.href}
                  className={`p-2 w-12 h-12 bg-[#232832] rounded-lg flex justify-center items-center transition-all ${item.bgHover}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Download CV Button */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="my-4"
          >
            <a
              href="/MERN_Stack_Developer_Ibrahim_kholilullah_Resume.pdf"
              download="/MERN_Stack_Developer_Ibrahim_kholilullah_Resume.pdf"
              className="btn rounded-3xl hover:text-[#F6083A] hover:bg-white border-none bg-[#F6083A] px-8 text-[16px] text-white uppercase"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
