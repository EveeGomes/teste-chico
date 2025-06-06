import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: '#', label: 'Email' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="bg-black/50 backdrop-blur-md border-t border-gray-800 py-12"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <span className="text-xl font-bold">
              <span className="gradient-text">Motion</span>
              <span className="text-white">Studio</span>
            </span>
            <p className="text-gray-400 max-w-xs">
              Creating stunning motion design experiences that captivate and inspire audiences.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg font-medium text-white">Quick Links</p>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link>
              <Link to="/projects" className="text-gray-400 hover:text-primary transition-colors">Projects</Link>
              <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link>
            </nav>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg font-medium text-white">Connect</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} MotionStudio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-500 text-sm hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="text-gray-500 text-sm hover:text-gray-400 cursor-pointer">Terms of Service</span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;