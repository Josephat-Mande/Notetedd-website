import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mic, FileText, BookOpen, BookCheck } from 'lucide-react';

const HowItWorks = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const steps = [
    {
      icon: <Mic className="w-12 h-12 text-white" />,
      title: "Record & Transcribe",
      description: "Open NoteTedd during your lecture, and it will automatically record and transcribe everything in real-time.",
      color: "bg-gradient-to-br from-blue-600 to-blue-500"
    },
    {
      icon: <FileText className="w-12 h-12 text-white" />,
      title: "AI Organization",
      description: "Our AI instantly organizes content, highlighting key concepts and categorizing information into relevant topics.",
      color: "bg-gradient-to-br from-purple-600 to-purple-500"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-white" />,
      title: "Convert & Review",
      description: "Convert your notes to audio and review them on the go, or use the app's study mode to focus on specific topics.",
      color: "bg-gradient-to-br from-green-600 to-green-500"
    },
    {
      icon: <BookCheck className="w-12 h-12 text-white" />,
      title: "Test Knowledge",
      description: "Generate custom quizzes based on your notes to test your understanding and prepare for exams effectively.",
      color: "bg-gradient-to-br from-red-600 to-red-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent"></div>
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-2">How NoteTedd Works</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              A simple four-step process to transform your lecture experience
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-0 w-full h-1 bg-gray-700/50 z-0"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center"
                >
                  <div className={`${step.color} rounded-full p-6 mb-6 shadow-lg border border-white/20 backdrop-blur-sm`}>
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-100 bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700 shadow-lg">
                    {step.description}
                  </p>
                  
                  {/* Step Number */}
                  <div className="mt-4 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold border border-gray-700">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <a 
            href="#download" 
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-white/20"
          >
            Start Improving Your Studies Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;