import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeIn } from "../Animatons/variants";
const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true at the start of the submission

    const formData = {
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      await axios.post("https://portfolio-server-sepia-tau.vercel.app/send-email", formData);
      toast.success("Message sent successfully!");
      event.target.reset(); // Clear the form after successful submission
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Reset loading state after the process completes
    }
  };

  return (
    <div className=" mt-16 bg-gray-900  text-white flex justify-center items-center">
      <div className="container mx-auto px-4 ">
        <motion.h2
        
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false,amount: 0.7}}className="text-center text-3xl font-bold mb-6">Contact With Me</motion.h2>
        <div className="grid md:grid-cols-2 py-8 gap-8">
          <motion.div 
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false,amount: 0.7}} className="space-y-6">
            <div className="p-6 bg-gray-800 rounded-lg flex items-center">
              <span className="text-red-500 text-2xl mr-4">&#128205;</span>
              <p>Mymensignh, Dhaka, Bangladesh</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg flex items-center">
              <span className="text-red-500 text-2xl mr-4">&#128222;</span>
              <p>+8801862-823329</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg flex items-center">
              <span className="text-red-500 text-2xl mr-4">&#9993;</span>
              <p>ibrahimkholilt56@gmail.com</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg flex items-center">
              <span className="text-red-500 text-2xl mr-4">&#10004;</span>
              <p>Freelance Available</p>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false,amount: 0.7}}
          className="p-6 bg-gray-800 rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="p-3 bg-gray-700 rounded-lg w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Type Your Message"
                  className="p-3 bg-gray-700 rounded-lg w-full h-32"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-red-500 hover:bg-red-600 rounded-lg text-white flex items-center justify-center"
                disabled={loading} // Disable button during loading
              >
                {loading ? (
                  <TbFidgetSpinner className="animate-spin m-auto" />
                ) : (
                  "Send Message"
                )}
                <span className="ml-2">&#9993;</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
