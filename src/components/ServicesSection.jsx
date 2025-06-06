import React from 'react';
import { motion } from 'framer-motion';
import { Film, Layers, Zap, PenTool, MonitorSmartphone, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Film className="h-6 w-6" />,
      title: 'Motion Graphics',
      description: 'Engaging animated graphics that bring your brand message to life with style and impact.'
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: '3D Animation',
      description: 'Immersive three-dimensional animations that create depth and realism for your projects.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Visual Effects',
      description: 'Stunning visual effects that enhance your video content with professional polish.'
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: 'Character Animation',
      description: 'Expressive character animations that connect with audiences and tell compelling stories.'
    },
    {
      icon: <MonitorSmartphone className="h-6 w-6" />,
      title: 'UI/UX Animation',
      description: 'Smooth interface animations that improve user experience and engagement with your digital products.'
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Explainer Videos',
      description: 'Clear, concise animated explainers that simplify complex ideas for your audience.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
            <span className="gradient-text">Services</span> I Offer
          </h2>
          <p className="text-gray-400 text-lg">
            Specialized motion design services to elevate your brand and captivate your audience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;