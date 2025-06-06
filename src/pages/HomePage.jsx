import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { projects } from '@/data/projects';

const HomePage = () => {
  // Only show the first 3 projects on the homepage
  const featuredProjects = projects.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      
      <ServicesSection />
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-gray-400 text-lg">
                A selection of my recent motion design work
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                asChild
                variant="outline"
                className="mt-4 md:mt-0 border-gray-700 hover:bg-gray-800"
              >
                <Link to="/projects" className="flex items-center">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                          <ArrowRight className="w-5 h-5 text-white" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <ProcessSection />
      
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-purple-600/10 blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -5, 0],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute bottom-[10%] left-[20%] w-[25rem] h-[25rem] rounded-full bg-blue-600/10 blur-[120px]"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Bring Your <span className="gradient-text">Ideas to Life</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next motion design project and create something amazing together.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;