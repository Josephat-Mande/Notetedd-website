import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Pause, SkipForward, Volume2, FileText, Lightbulb } from 'lucide-react';

const DemoShowcase = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [activeTab, setActiveTab] = useState('record');
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 300);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setProgress(30);
  };

  const tabs = [
    { id: 'record', label: 'Record Lecture', icon: <Mic /> },
    { id: 'transcribe', label: 'AI Transcription', icon: <FileText /> },
    { id: 'quiz', label: 'Generated Quiz', icon: <Lightbulb /> }
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case 'record':
        return (
          <>
            <div className="bg-gray-900 rounded-t-xl p-4 flex items-center justify-between">
              <span className="text-white font-medium">Recording Lecture</span>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse mr-2"></span>
                <span className="text-white text-sm">LIVE</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-b-xl text-white">
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm">
                  <p className="opacity-70">AI Detected Topic:</p>
                  <p className="font-medium">Quantum Computing Fundamentals</p>
                </div>
                <div className="text-sm text-right">
                  <p className="opacity-70">Duration:</p>
                  <p className="font-medium">23:45</p>
                </div>
              </div>
              
              <div className="w-full h-1 bg-gray-700 rounded-full mb-4">
                <div 
                  className="h-full bg-purple-500 rounded-full" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={handlePlayPause}
                    className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-700 transition-colors"
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
                    <SkipForward size={18} />
                  </button>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Volume2 size={18} className="text-gray-300" />
                  <div className="w-20 h-1 bg-gray-700 rounded-full">
                    <div className="h-full bg-gray-300 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-300 mb-2">Live Transcription:</p>
                <p className="text-white">
                  "...the superposition principle allows quantum bits to exist in multiple states simultaneously, unlike classical bits. This property enables quantum computers to perform certain calculations exponentially faster than traditional computers..."
                </p>
                <div className="flex items-center mt-3">
                  <span className="inline-block w-2 h-5 bg-gray-300 animate-pulse mr-1"></span>
                </div>
              </div>
            </div>
          </>
        );
      case 'transcribe':
        return (
          <>
            <div className="bg-gray-900 rounded-t-xl p-4 flex items-center justify-between">
              <span className="text-white font-medium">AI Organized Notes</span>
              <div className="text-sm text-gray-300">
                Lecture: Quantum Computing Fundamentals
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-b-xl text-white h-96 overflow-y-auto">
              <div className="mb-6">
                <h3 className="text-purple-400 font-bold text-lg mb-2">KEY CONCEPT: Superposition</h3>
                <p className="text-gray-300 mb-2">
                  • Quantum bits (qubits) can exist in multiple states simultaneously
                </p>
                <p className="text-gray-300 mb-2">
                  • Mathematical representation: |ψ⟩ = α|0⟩ + β|1⟩
                </p>
                <p className="text-gray-300">
                  • Enables parallel processing of information
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-purple-400 font-bold text-lg mb-2">KEY CONCEPT: Quantum Entanglement</h3>
                <p className="text-gray-300 mb-2">
                  • Quantum correlation between particles regardless of distance
                </p>
                <p className="text-gray-300 mb-2">
                  • Einstein referred to this as "spooky action at a distance"
                </p>
                <p className="text-gray-300">
                  • Critical for quantum teleportation and secure communication
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-purple-400 font-bold text-lg mb-2">APPLICATIONS: Quantum Algorithms</h3>
                <p className="text-gray-300 mb-2">
                  • Shor's Algorithm: Exponentially faster factoring of large numbers
                </p>
                <p className="text-gray-300 mb-2">
                  • Grover's Algorithm: Quadratic speedup for searching unsorted databases
                </p>
                <p className="text-gray-300">
                  • Quantum Machine Learning: Enhanced pattern recognition
                </p>
              </div>
              
              <div className="mt-4 flex justify-between">
                <span className="text-xs text-gray-400">Auto-categorized by NoteTedd AI</span>
                <span className="text-xs text-gray-400">Last updated: 2 minutes ago</span>
              </div>
            </div>
          </>
        );
      case 'quiz':
        return (
          <>
            <div className="bg-gray-900 rounded-t-xl p-4 flex items-center justify-between">
              <span className="text-white font-medium">AI Generated Quiz</span>
              <div className="text-sm text-gray-300">
                Based on: Quantum Computing Fundamentals
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-b-xl text-white">
              <div className="mb-8">
                <p className="text-lg font-medium mb-3">Question 1 of 5</p>
                <p className="text-gray-200 mb-4">Which property allows quantum bits to exist in multiple states simultaneously?</p>
                
                <div className="space-y-3">
                  <div className="p-3 border border-gray-700 rounded-lg hover:border-purple-500 cursor-pointer transition-colors">
                    <p>A. Quantum Entanglement</p>
                  </div>
                  <div className="p-3 border border-gray-700 rounded-lg hover:border-purple-500 cursor-pointer transition-colors">
                    <p>B. Quantum Tunneling</p>
                  </div>
                  <div className="p-3 border border-purple-500 bg-purple-900 bg-opacity-20 rounded-lg hover:border-purple-500 cursor-pointer transition-colors">
                    <p>C. Superposition</p>
                  </div>
                  <div className="p-3 border border-gray-700 rounded-lg hover:border-purple-500 cursor-pointer transition-colors">
                    <p>D. Quantum Decoherence</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-900 bg-opacity-30 border border-green-600 rounded-lg">
                  <p className="text-green-400 font-medium mb-2">Correct!</p>
                  <p className="text-gray-300">
                    Superposition is the quantum mechanical property that allows qubits to exist in multiple states simultaneously, represented mathematically as |ψ⟩ = α|0⟩ + β|1⟩.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  Previous
                </button>
                <span className="text-gray-300">1/5</span>
                <button className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
                  Next Question
                </button>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const Mic = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" x2="12" y1="19" y2="22"></line>
    </svg>
  );

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-2">See NoteTedd in Action</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience how NoteTedd transforms lectures into organized notes and interactive quizzes
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="inline-flex bg-gray-200 p-1 rounded-full">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      resetDemo();
                    }}
                    className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                      activeTab === tab.id
                        ? 'bg-white text-gray-900 shadow-md'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700"
          >
            <div className="p-1">
              <div className="flex items-center space-x-2 px-3 py-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            
            {getTabContent()}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <p className="text-gray-600">
              This is just a preview. Download NoteTedd now to experience the full capabilities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoShowcase;