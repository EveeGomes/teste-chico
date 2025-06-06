import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "hello@motionstudio.com",
      link: "mailto:hello@motionstudio.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "New York, NY, USA",
      link: "#"
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Contact Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </motion.p>
        </div>
        
        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/30 border border-gray-800 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <ContactForm />
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-400 mb-6">
                Feel free to reach out through any of the channels below. I'm always excited to discuss new projects and collaborations.
              </p>
            </motion.div>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{info.title}</h3>
                  <a 
                    href={info.link} 
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {info.details}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Map Section (Placeholder) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">My Location</h2>
          <div className="h-96 bg-gray-800 rounded-xl overflow-hidden gradient-border">
            <img  
              className="w-full h-full object-cover opacity-30"
              alt="Abstract map placeholder showing a stylized city grid"
             src="https://images.unsplash.com/photo-1572407997053-3391009a4953" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500 text-lg">Map integration coming soon!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;