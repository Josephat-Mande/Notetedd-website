import React, { useEffect } from 'react';
import { ArrowRight, Headphones, Book, CalendarCheck } from 'lucide-react';

const CTA = () => {
  useEffect(() => {
    // Initialize any animations or effects here
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-950 via-gray-900 to-black overflow-hidden relative" id='contact'>
      {/* Background elements */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-indigo-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        {/* Main CTA Container */}
        <div className="relative z-10 rounded-3xl bg-gray-900/50 backdrop-blur-lg p-8 lg:p-12 shadow-2xl border border-gray-800"
          data-aos="fade-up">
          
          {/* Background floating elements */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="lg:w-2/3" data-aos="fade-right" data-aos-delay="200">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Learning Experience Today
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                Join thousands of students who are maximizing their study potential with NoteTedd's 
                AI-powered learning assistant. Get automated notes, personalized quizzes, and audio 
                summaries - all in one place.
              </p>
              
              {/* Feature Icons Row */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-white">
                  <div className="p-2 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-lg border border-white/10">
                    <Headphones size={20} />
                  </div>
                  <span>Audio Notes</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <div className="p-2 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg border border-white/10">
                    <Book size={20} />
                  </div>
                  <span>Smart Transcripts</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <div className="p-2 bg-gradient-to-br from-red-600 to-purple-700 rounded-lg border border-white/10">
                    <CalendarCheck size={20} />
                  </div>
                  <span>Exam Prep</span>
                </div>
              </div>
            </div>
            
            {/* CTA Form/Buttons */}
            <div className="lg:w-1/3 w-full" data-aos="fade-left" data-aos-delay="300">
              <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">Get Started Now</h3>
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-900/70 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none focus:border-purple-500 placeholder-gray-400"
                  />
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center group border border-white/10">
                    Join the waitlist
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                  </button>
                  <div className="text-center pt-2">
                    <span className="text-gray-400 text-sm">Early access coming soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Quote */}
          <div className="mt-12 italic text-gray-300 border-l-4 border-purple-500 pl-4 max-w-2xl mx-auto text-center bg-gray-800/30 p-4 rounded-lg backdrop-blur-sm" 
            data-aos="fade-up" data-aos-delay="400">
            "NoteTedd has completely transformed how I study. I no longer struggle with organizing lecture notes or finding time to study. It's like having a personal learning assistant!"
            <p className="mt-2 font-semibold not-italic text-purple-300">— Sarah T., Computer Science Student</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;