import React from 'react';
import Shared from '../Shared/Shared';
import projects1 from "../../../../assets/Projects/extra1photo.jpg";
import projects2 from "../../../../assets/Projects/banner3.jpg";
import projects3 from "../../../../assets/Projects/banner.jpg";
import { FaEye, FaGithub, FaProjectDiagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="px-4 py-8">
      <Shared title="My Recent Work" headline="Recent Works" />

      <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {/* Project 1 */}
        <div className="border relative rounded-lg shadow-lg overflow-hidden">
          <img className="w-full h-64 object-cover opacity-80" src={projects2} alt="Travel World" />
          <div className="absolute top-0 left-0 right-0 bottom-0 p-4 bg-black bg-opacity-50 flex flex-col justify-end">
            <h2 className="text-xl font-bold text-white mb-2">Travel World</h2>
            <p className="text-sm text-gray-200 mb-4">
              Travel World offers diverse destinations, cultural experiences, natural wonders, adventures, history, cuisine, and unforgettable memories globally.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://b10-a10-projects.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300"
              >
                <FaProjectDiagram size={25} />
              </a>
              <a
                href="https://github.com/ibrahimkholilullah-web/Trevel-World"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-800 p-2 rounded-md"
              >
                <FaGithub size={25} />
              </a>
              <Link to="/travelDetails" className="text-yellow-300 hover:text-yellow-400">
                View Details
              </Link>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="border relative rounded-lg shadow-lg overflow-hidden">
          <img className="w-full h-64 object-cover opacity-80" src={projects1} alt="Global Art History" />
          <div className="absolute top-0 left-0 right-0 bottom-0 p-4 bg-black bg-opacity-50 flex flex-col justify-end">
            <h2 className="text-xl font-bold text-white mb-2">Global Art History</h2>
            <p className="text-sm text-gray-200 mb-4">
              Global Art History explores artistic traditions across cultures, examining interconnected influences, styles, and meanings in diverse historical and contemporary contexts.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://national-history.firebaseapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300"
              >
                <FaProjectDiagram size={25} />
              </a>
              <a
                href="https://github.com/ibrahimkholilullah-web/global-Art-History"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-800 p-2 rounded-md"
              >
                <FaGithub size={25} />
              </a>
              <Link to="/historyDetails" className="text-yellow-300 hover:text-yellow-400">
                View Details
              </Link>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="border relative rounded-lg shadow-lg overflow-hidden">
          <img className="w-full h-64 object-cover opacity-80" src={projects3} alt="Gadget Heaven" />
          <div className="absolute top-0 left-0 right-0 bottom-0 p-4 bg-black bg-opacity-50 flex flex-col justify-end">
            <h2 className="text-xl font-bold text-white mb-2">Gadget Heaven</h2>
            <p className="text-sm text-gray-200 mb-4">
              An eCommerce website facilitates online shopping, offering diverse products, secure payments, personalized experiences, and seamless delivery services worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://tourmaline-liger-9fa337.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300"
              >
                <FaProjectDiagram size={25} />
              </a>
              <a
                href="https://github.com/ibrahimkholilullah-web/gadgetHeaven"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-800 p-2 rounded-md"
              >
                <FaGithub size={25} />
              </a>
              <Link to="/GadgetDetails" className="text-yellow-300 hover:text-yellow-400">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
