import React from "react";
import Shared from "../Shared/Shared";
import { FaGithub, FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import project images
import projects1 from "../../../../assets/Projects/extra1photo.jpg";
import projects2 from "../../../../assets/Projects/banner3.jpg";
import projects3 from "../../../../assets/Projects/banner.jpg";
import projects4 from "../../../../assets/Projects/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";
import projects5 from "../../../../assets/Projects/banner2.jpg";

const projects = [
  {
    id: 1,
    title: "Travel World",
    img: projects2,
    description:
      "Explore diverse destinations, cultural experiences, adventures, history, cuisine, and unforgettable memories.",
    live: "https://b10-a10-projects.web.app/",
    github: "https://github.com/ibrahimkholilullah-web/Trevel-World",
    details: "/travelDetails",
  },
  {
    id: 2,
    title: "Jerin Parlour",
    img: projects4,
    description:
      "A modern beauty and grooming service center that enhances natural beauty with exceptional customer service.",
    live: "https://app-review-285a6.web.app/",
    github: "https://github.com/ibrahimkholilullah-web/App-review-client",
    details: "/jerinParlour",
  },
  {
    id: 3,
    title: "Hunt Denmark",
    img: projects5,
    description:
      "A product hunt platform with user, moderator, and admin dashboards, storing Google login data securely.",
    live: "https://last-project-abb90.web.app/",
    github: "https://github.com/ibrahimkholilullah-web/hunt-denmark",
    details: "/huntDItails",
  },
  {
    id: 4,
    title: "Gadget Heaven",
    img: projects3,
    description:
      "An eCommerce platform offering diverse products, secure payments, personalized experiences, and seamless delivery.",
    live: "https://tourmaline-liger-9fa337.netlify.app/",
    github: "https://github.com/ibrahimkholilullah-web/gadgetHeaven",
    details: "/GadgetDetails",
  },
  {
    id: 5,
    title: "Global Art History",
    img: projects1,
    description:
      "Explores artistic traditions across cultures, examining interconnected influences in historical and contemporary contexts.",
    live: "https://national-history.firebaseapp.com",
    github: "https://github.com/ibrahimkholilullah-web/global-Art-History",
    details: "/historyDetails",
  },
];

const Projects = () => {
  return (
    <div className="px-4 py-16">
      <Shared title="My Recent Work" headline="Recent Works" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative rounded-lg hover:shadow-lg hover:shadow-white overflow-hidden border border-gray-700"
          >
            <img
              className="w-full h-64 object-cover opacity-80"
              src={project.img}
              alt={project.title}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 p-4 bg-black bg-opacity-50 flex flex-col justify-end">
              <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-sm text-gray-200 mb-4">{project.description}</p>
              <div className="flex items-center gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 transition"
                >
                  <FaProjectDiagram size={25} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition"
                >
                  <FaGithub size={25} />
                </a>
                <Link
                  to={project.details}
                  className="text-yellow-300 hover:text-yellow-400 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
