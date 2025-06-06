import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, PenTool, Play, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'Discovery',
      description: 'We start with a detailed conversation about your project goals, target audience, and visual preferences.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Concept',
      description: 'I develop creative concepts and storyboards that align with your brand and project objectives.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: 'Creation',
      description: 'The animation comes to life through careful design, motion, and attention to every detail.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Play className="h-6 w-6" />,
      title: 'Delivery',
      description: 'After refinements and your approval, I deliver the final files in your required formats.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Support',
      description: 'The relationship continues with support and guidance for implementing your motion design assets.',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Creative <span className="gradient-text">Process</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A structured approach to bringing your motion design projects to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500 hidden md:block" />

          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col md:flex-row items-center md:items-start gap-6 mb-12 md:mb-24 ${
                index % 2 === 0 ? 'md:flex-row-reverse text-right' : 'text-left'
              }`}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              </div>

              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center z-10 relative`}
                >
                  <div className="text-white">
                    {step.icon}
                  </div>
                </motion.div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/10 rounded-full blur-md -z-10" />
              </div>

              <div className="w-full md:w-1/2" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;