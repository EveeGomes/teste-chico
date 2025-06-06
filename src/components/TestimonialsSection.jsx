import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Marketing Director, TechCorp',
      content: 'The motion graphics created for our product launch exceeded our expectations. The animations perfectly captured our brand essence and helped us stand out in a crowded market.',
      avatar: 'professional-1'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'Creative Director, DesignHub',
      content: 'Working with this motion designer was a game-changer for our agency. Their attention to detail and creative approach to storytelling through animation elevated our client projects.',
      avatar: 'professional-2'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Founder, StartupVision',
      content: 'Our explainer video was transformed from a simple concept to an engaging story that perfectly communicated our complex service. The ROI on this project was immediate and substantial.',
      avatar: 'professional-3'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0
    })
  };

  const [direction, setDirection] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Hear what clients have to say about working with me
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setDirection(-1);
                handlePrev();
              }}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          </div>

          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 md:p-10"
              >
                <div className="flex flex-col items-center text-center">
                  <Quote className="w-12 h-12 text-primary/50 mb-6" />
                  
                  <p className="text-lg md:text-xl text-gray-300 mb-8 italic">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 mb-4">
                      <img  
                        className="w-full h-full object-cover"
                        alt={`${testimonials[currentIndex].name} avatar`}
                       src="https://images.unsplash.com/photo-1575383596664-30f4489f9786" />
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-white">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setDirection(1);
                handleNext();
              }}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-700'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;