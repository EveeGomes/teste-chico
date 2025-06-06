import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="project-card group"
    >
      <Link to={`/projects/${project.id}`} className="block h-full">
        <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl">
          <img  
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt={`Motion design project thumbnail for ${project.title}`}
           src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs font-medium text-primary mb-2">{project.category}</p>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.shortDescription}
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full"
              >
                <ArrowUpRight className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;