import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const textVariants = {
    hidden: { y: 100 },
    visible: { y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-background to-background -z-10" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] w-[30rem] h-[30rem] rounded-full bg-purple-600/10 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-[20%] w-[25rem] h-[25rem] rounded-full bg-blue-600/10 blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
              >
                Motion Design Portfolio
              </motion.div>
              
              <div className="hero-text-container">
                <motion.h1 
                  variants={textVariants}
                  className="hero-text text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Bringing <span className="gradient-text">Ideas</span> to Life Through <span className="gradient-text">Motion</span>
                </motion.h1>
              </div>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-400 max-w-xl mt-4"
              >
                Creating captivating animations and visual experiences that tell your story and engage your audience.
              </motion.p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-700 hover:bg-gray-800"
              >
                <Link to="/contact">
                  <Play className="mr-2 h-4 w-4 fill-current" />
                  Let's Collaborate
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                    <img  
                      className="w-full h-full object-cover"
                      alt={`Client ${i} avatar`}
                     src="https://images.unsplash.com/photo-1575383596664-30f4489f9786" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-medium">Trusted by clients worldwide</div>
                <div className="text-xs text-gray-500">⭐⭐⭐⭐⭐ 5.0 (25+ reviews)</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden gradient-border">
              <img  
                className="w-full h-auto rounded-2xl"
                alt="Motion design showcase featuring dynamic 3D elements and vibrant colors"
               src="https://images.unsplash.com/photo-1634322101674-8c976af66438" />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-background p-4 rounded-lg shadow-lg border border-gray-800"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <Play className="h-5 w-5 text-primary fill-current" />
                  </motion.div>
                </div>
                <div>
                  <p className="text-sm font-medium">Animation Reel</p>
                  <p className="text-xs text-gray-500">Watch the showreel</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;