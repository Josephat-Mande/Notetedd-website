import { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const plans = [
    {
      name: "Free",
      monthlyPrice: 0,
      semesterPrice: 0,
      annualPrice: 0,
      description: "Perfect for trying out NoteTedd",
      features: [
        "10 lectures per month",
        "Basic note organization",
        "5 AI-generated quizzes per month",
        "Mobile app access"
      ],
      popular: false,
      buttonText: "Get Started",
      buttonColor: "from-gray-600 to-gray-700",
      borderColor: "border-gray-800",
      accentColor: "from-gray-600 to-gray-500"
    },
    {
      name: "Student",
      monthlyPrice: 2.99,
        semesterPrice: 7.99,
      annualPrice: 7.99,
      description: "Everything you need for better learning",
      features: [
        "Unlimited lectures",
        "Advanced AI organization",
        "Unlimited quizzes",
        "Audio note conversion",
        "Cloud storage",
        "Exam preparation tools"
      ],
      popular: true,
      buttonText: "Start Free Trial",
      buttonColor: "from-purple-600 to-blue-500",
      borderColor: "border-purple-800",
      accentColor: "from-purple-600 to-indigo-500"
    },
    {
      name: "Pro",
      monthlyPrice: 19.99,
        semesterPrice: 49.99,
      annualPrice: 16.99,
      description: "Enhanced features for serious students",
      features: [
        "Everything in Student plan",
        "Lecture insights & analytics",
        "Collaborative note sharing",
        "Priority transcription",
        "Custom quiz creation",
        "Offline access"
      ],
      popular: false,
      buttonText: "Start Free Trial",
      buttonColor: "from-blue-700 to-blue-900",
      borderColor: "border-blue-900",
      accentColor: "from-blue-600 to-indigo-600"
    }
  ];

  return (
    <section 
      id="pricing" 
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden bg-gray-950"
    >
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-indigo-950 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div 
          className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Simple, <span className="text-purple-400">Transparent</span> Pricing</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Choose the plan that's right for your academic journey
          </p>
        </div>

        <div 
          className={`flex justify-center mb-10 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <div className="bg-gray-800/70 p-1 rounded-full inline-flex items-center backdrop-blur-sm border border-gray-700">
            <button
              onClick={() => setIsAnnual(false)}
              className={`py-2 px-6 rounded-full text-sm font-medium transition-colors ${
                !isAnnual 
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`py-2 px-6 rounded-full text-sm font-medium transition-colors ${
                isAnnual 
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Annual <span className="text-green-400 ml-1">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm border ${plan.borderColor} rounded-xl overflow-hidden transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${plan.popular ? 'md:-translate-y-4' : ''}`}
              style={{ transitionDelay: `${200 * index}ms` }}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 text-center text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8 relative">
                {/* Background glow */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${plan.accentColor} rounded-full opacity-20 blur-xl`}></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-end">
                      <span className="text-5xl font-bold text-white">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-400 ml-2 mb-1">
                        /month
                      </span>
                    </div>
                    {isAnnual && (
                      <p className="text-green-400 text-sm mt-1">
                        Billed annually (${(plan.annualPrice * 12).toFixed(2)}/year)
                      </p>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg text-white font-medium transition-all bg-gradient-to-r ${plan.buttonColor} hover:shadow-lg hover:scale-105`}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className={`mt-12 bg-purple-900/20 border border-purple-800/30 rounded-xl p-6 max-w-3xl mx-auto transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full animate-pulse opacity-30"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <CheckCircle size={32} className="text-white" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold text-purple-400 mb-2 text-center md:text-left">Educational Institution Plans</h3>
              <p className="text-gray-300 text-center md:text-left">
                Need a custom plan for your school or university? 
                <a href="#contact" className="text-purple-300 hover:text-purple-200 font-medium ml-1 underline">
                  Contact us for special educational pricing →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;