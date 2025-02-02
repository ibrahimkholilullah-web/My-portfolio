import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeIn } from "../Animatons/variants";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = {
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      await axios.post("https://portfolio-server-sepia-tau.vercel.app/send-email", formData);
      toast.success("Message sent successfully!");
      event.target.reset();
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-900 text-white flex justify-center items-center">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-center text-3xl font-bold mb-6"
        >
          Contact With Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info Section */}
          <div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="space-y-6"
          >
            {[
              { icon: <FaLocationDot />
                , text: "Mymensingh, Dhaka, Bangladesh" },
              { icon: "📞", text: "+8801862-823329" },
              { icon: <MdMarkEmailRead />
                , text: "ibrahimkholilt56@gmail.com" },
              { icon: "✅", text: "Freelance Available" },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-lg flex items-center">
                <span className="text-white text-sm mr-4">{item.icon}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="p-6 bg-gray-800 relative rounded-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="p-3 bg-gray-700 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div >
                <textarea
                  name="message"
                  placeholder="Type Your Message"
                  className="p-3 bg-gray-700 rounded-lg w-full h-32 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className=" md:absolute bottom-4 hover:rounded-none  p-3 bg-[#F6083A] hover:bg-[#F6083A] rounded-lg text-white flex items-center justify-center transition duration-300"
                disabled={loading}
              >
                {loading ? <TbFidgetSpinner className="animate-spin text-xl" /> : "Send Message"}
                <span className="ml-2">📩</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
