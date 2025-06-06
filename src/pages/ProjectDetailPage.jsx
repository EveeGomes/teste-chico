import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, User, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nextProject, setNextProject] = useState(null);
  const [prevProject, setPrevProject] = useState(null);

  useEffect(() => {
    // Find the project by ID
    const projectId = parseInt(id);
    const foundProject = projects.find(p => p.id === projectId);
    
    if (foundProject) {
      setProject(foundProject);
      
      // Find next and previous projects
      const currentIndex = projects.findIndex(p => p.id === projectId);
      setNextProject(projects[currentIndex + 1] || projects[0]);
      setPrevProject(projects[currentIndex - 1] || projects[projects.length - 1]);
    } else {
      // If project not found, redirect to projects page
      navigate('/projects');
    }
    
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="pt-24 pb-20 flex justify-center items-center min-h-[60vh]">
        <motion.div
          animate={{ 
            rotate: 360,
            transition: { 
              duration: 2, 
              repeat: Infinity, 
              ease: "linear" 
            }
          }}
          className="w-12 h-12 border-t-2 border-b-2 border-primary rounded-full"
        />
      </div>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Back to Projects Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button
            asChild
            variant="ghost"
            className="group flex items-center text-gray-400 hover:text-white"
          >
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>
        
        {/* Project Header */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium mb-2"
          >
            {project.category}
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {project.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl"
          >
            {project.fullDescription}
          </motion.p>
        </div>
        
        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-gray-900/30 p-6 rounded-xl border border-gray-800"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Client</p>
              <p className="font-medium">{project.client}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Duration</p>
              <p className="font-medium">{project.duration}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Wrench className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Tools</p>
              <p className="font-medium">{project.tools.join(', ')}</p>
            </div>
          </div>
        </motion.div>
        
        {/* Project Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12 rounded-xl overflow-hidden gradient-border"
        >
          <div className="video-container">
            <iframe
              src={project.videoUrl}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.div>
        
        {/* Project Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="rounded-xl overflow-hidden gradient-border"
            >
              <img  
                className="w-full h-auto aspect-video object-cover"
                alt={`${project.title} - detailed view ${index + 1}`}
               src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Next/Previous Project Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 pt-8"
        >
          <Button
            asChild
            variant="ghost"
            className="mb-4 sm:mb-0 group"
          >
            <Link to={`/projects/${prevProject.id}`} className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Previous Project
            </Link>
          </Button>
          
          <Button
            asChild
            variant="ghost"
            className="group"
          >
            <Link to={`/projects/${nextProject.id}`} className="flex items-center">
              Next Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailPage;