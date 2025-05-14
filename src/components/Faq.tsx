import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeIndex, setActiveIndex] = useState(null);

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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How accurate is NoteTedd's transcription?",
      answer: "NoteTedd's AI transcription technology achieves over 95% accuracy for clear audio in standard accents. Our AI continually improves with usage and can adapt to different teaching styles, technical terminology, and various accents over time."
    },
    {
      question: "Does NoteTedd work offline?",
      answer: "The basic recording functionality works offline, but transcription and AI-powered features require an internet connection. With the Pro plan, you can download notes and quizzes for offline access after they've been processed."
    },
    {
      question: "Can I share my notes with classmates?",
      answer: "Yes! With the Student plan, you can share individual notes, and with the Pro plan, you can collaborate on notes in real-time with study groups. We've made it easy to share via link, email, or through common messaging platforms."
    },
    {
      question: "How does the AI quiz generation work?",
      answer: "NoteTedd's AI analyzes your lecture notes to identify key concepts, definitions, and relationships. It then generates various question formats (multiple choice, true/false, fill-in-the-blank) based on important information, closely mimicking the types of questions that would appear in real exams."
    },
    {
      question: "Is NoteTedd available on all devices?",
      answer: "Yes, NoteTedd is available as a web application and has native apps for iOS and Android devices. Your notes sync automatically across all your devices, allowing you to record on your phone and study on your laptop seamlessly."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We take data privacy very seriously. All your notes are encrypted both in transit and at rest. We never share your content with third parties, and you maintain complete ownership of all your notes and study materials."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-indigo-950 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-2">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about NoteTedd
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-4"
            >
              <div
                onClick={() => toggleAccordion(index)}
                className={`flex justify-between items-center p-5 rounded-lg cursor-pointer transition-colors ${
                  activeIndex === index 
                    ? 'bg-gray-800/80 backdrop-blur-sm border border-purple-500/30 shadow-lg shadow-purple-500/5' 
                    : 'bg-gray-800/50 border border-gray-700 hover:bg-gray-800/70'
                }`}
              >
                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                <div className="text-purple-400">
                  {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-b-lg">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">
            Still have questions?
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-purple-900/50 text-purple-300 font-medium py-3 px-6 rounded-lg border border-purple-800/50 hover:bg-purple-800/50 transition-colors"
          >
            Contact Our Support Team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;