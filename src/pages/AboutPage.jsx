import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const skills = [
    "Motion Graphics", "3D Animation", "Character Animation", 
    "Visual Effects", "Storyboarding", "UI/UX Animation",
    "Logo Animation", "Compositing", "Color Grading",
    "Sound Design", "Typography Animation", "Particle Systems"
  ];

  const experience = [
    {
      period: "2022 - Present",
      role: "Senior Motion Designer",
      company: "Creative Pulse Studio",
      description: "Lead motion designer for major brand campaigns and digital experiences. Collaborate with creative directors and clients to develop innovative motion concepts."
    },
    {
      period: "2019 - 2022",
      role: "Motion Designer",
      company: "Digital Horizon Agency",
      description: "Created animations for web, social media, and broadcast. Worked closely with the design team to ensure consistent visual language across all animated content."
    },
    {
      period: "2017 - 2019",
      role: "Junior Animator",
      company: "VisualFlow Productions",
      description: "Assisted senior animators with various projects. Developed skills in character animation, motion graphics, and visual effects for commercial clients."
    }
  ];

  const education = [
    {
      period: "2015 - 2017",
      degree: "MFA in Motion Media Design",
      institution: "Creative Arts Institute",
      description: "Specialized in advanced motion design techniques and narrative storytelling through animation."
    },
    {
      period: "2011 - 2015",
      degree: "BFA in Digital Arts",
      institution: "University of Visual Arts",
      description: "Foundation in design principles, animation fundamentals, and digital media production."
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
        {/* About Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About <span className="gradient-text">Me</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 mb-8"
          >
            I'm a passionate motion designer with over 5 years of experience creating captivating animations and visual experiences for brands and agencies worldwide.
          </motion.p>
        </div>
        
        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24 rounded-xl overflow-hidden gradient-border">
              <img  
                className="w-full h-auto rounded-xl"
                alt="Professional portrait of a motion designer in a creative studio environment"
               src="https://images.unsplash.com/photo-1582198374945-39ac47df59b9" />
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3 space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4">My Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  My journey in motion design began with a fascination for how movement can transform static visuals into compelling stories. After completing my formal education in digital arts and motion media design, I dove headfirst into the industry, eager to push creative boundaries.
                </p>
                <p>
                  Over the years, I've had the privilege of working with diverse clients across various industries, from tech startups to established global brands. Each project has been an opportunity to refine my craft and develop a distinctive style that balances technical precision with artistic expression.
                </p>
                <p>
                  My approach to motion design centers on storytelling and emotional connection. I believe that the most effective animations are those that resonate with viewers on a deeper level, communicating not just information but also feeling and meaning.
                </p>
                <p>
                  When I'm not animating, you'll find me exploring new design trends, experimenting with emerging technologies, or seeking inspiration in art, nature, and everyday life. I'm constantly evolving as a creator, driven by curiosity and a commitment to excellence in everything I do.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm font-medium text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Professional Experience</h2>
          </div>
          
          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l border-gray-800"
              >
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary" />
                <p className="text-sm text-primary font-medium mb-1">{item.period}</p>
                <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                <p className="text-gray-400 mb-2">{item.company}</p>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l border-gray-800"
              >
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary" />
                <p className="text-sm text-primary font-medium mb-1">{item.period}</p>
                <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                <p className="text-gray-400 mb-2">{item.institution}</p>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Awards & Recognition</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <p className="text-sm text-primary font-medium mb-2">2023</p>
                <h3 className="text-xl font-bold mb-2">Motion Design Award</h3>
                <p className="text-gray-400">Excellence in Animation Category</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-gray-800 rounded-xl p-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
          >
            <Link to="/contact" className="flex items-center">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;