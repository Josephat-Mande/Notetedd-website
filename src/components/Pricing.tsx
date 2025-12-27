import { useState, useEffect, useRef } from 'react';
import { CheckCircle, Sparkles, DollarSign, Zap, Building2 } from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState(null);
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
      color: "#6B7280",
      gradient: "linear-gradient(135deg, #6B7280 0%, #4B5563 100%)"
    },
    {
      name: "Student",
      monthlyPrice: 2.99,
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
      color: "#9B5DE5",
      gradient: "linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)"
    },
    {
      name: "Pro",
      monthlyPrice: 9.99,
      annualPrice: 16.99,
      description: "Enhanced features for serious students",
      features: [
        "Everything in Student plan",
        "Lecture insights & analytics",
        "Free Collaborative note sharing",
        "Integrated Online resource fetching",
        "Custom quiz creation",
        "Offline access"
      ],
      popular: false,
      buttonText: "Start Free Trial",
      color: "#e67e22",
      gradient: "linear-gradient(135deg, #e67e22 0%, #d35400 100%)"
    }
  ];

  return (
    <>
    <Navbar/>
    <>
    <section 
      id="pricing" 
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: '#F5F7FA' }}
    >
      {/* Gradient orbs in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-32 w-96 h-96 rounded-full opacity-20" style={{ 
          background: 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}></div>
        <div className="absolute -bottom-20 -right-32 w-96 h-96 rounded-full opacity-20" style={{ 
          background: 'radial-gradient(circle, #e67e22 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div 
          className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center rounded-full px-5 py-2 text-sm font-bold mb-6 backdrop-blur-xl border shadow-lg" style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'rgba(155, 93, 229, 0.3)',
            color: '#9B5DE5'
          }}>
            <DollarSign className="h-4 w-4 mr-2" />
            Flexible Pricing
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#1F2937' }}>
            Simple, <span style={{ color: '#e67e22' }}>Transparent</span> Pricing
          </h2>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Choose the plan that's right for your academic journey
          </p>
        </div>

        {/* Toggle Switch */}
        <div 
          className={`flex justify-center mb-12 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <div className="rounded-full p-1 inline-flex items-center backdrop-blur-xl border shadow-lg" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'rgba(155, 93, 229, 0.3)'
          }}>
            <button
              onClick={() => setIsAnnual(false)}
              className={`py-3 px-6 rounded-full text-sm font-bold transition-all duration-300 ${
                !isAnnual 
                  ? 'text-white shadow-lg' 
                  : 'hover:scale-105'
              }`}
              style={{
                background: !isAnnual ? 'linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)' : 'transparent',
                color: !isAnnual ? '#FFF' : '#6B7280'
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`py-3 px-6 rounded-full text-sm font-bold transition-all duration-300 ${
                isAnnual 
                  ? 'text-white shadow-lg' 
                  : 'hover:scale-105'
              }`}
              style={{
                background: isAnnual ? 'linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)' : 'transparent',
                color: isAnnual ? '#FFF' : '#6B7280'
              }}
            >
              Annual <span className="ml-1 font-bold" style={{ color: isAnnual ? '#FFF' : '#10B981' }}>Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`rounded-2xl backdrop-blur-xl border shadow-lg overflow-hidden transition-all duration-700 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${plan.popular ? 'md:-translate-y-4' : ''}`}
              style={{ 
                backgroundColor: hoveredPlan === index ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.7)',
                borderColor: hoveredPlan === index ? `${plan.color}66` : `${plan.color}33`,
                transitionDelay: `${200 * index}ms`,
                borderWidth: plan.popular ? '2px' : '1px'
              }}
            >
              {plan.popular && (
                <div className="text-white py-2 text-center text-sm font-bold" style={{
                  background: 'linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)'
                }}>
                  <Sparkles className="inline h-4 w-4 mr-1" />
                  Most Popular
                </div>
              )}
              
              <div className="p-8 relative">
                {/* Background glow */}
                <div 
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${plan.color} 0%, transparent 70%)`,
                    filter: 'blur(40px)',
                    opacity: hoveredPlan === index ? 0.2 : 0.1
                  }}
                ></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold" style={{ color: '#1F2937' }}>
                      {plan.name}
                    </h3>
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{ 
                        backgroundColor: hoveredPlan === index ? plan.color : `${plan.color}20`,
                        color: hoveredPlan === index ? '#FFF' : plan.color
                      }}
                    >
                      <Zap className="h-5 w-5" />
                    </div>
                  </div>
                  
                  <p className="mb-6" style={{ color: '#6B7280' }}>{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-end">
                      <span className="text-5xl font-bold" style={{ color: '#1F2937' }}>
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="ml-2 mb-1" style={{ color: '#6B7280' }}>
                        /month
                      </span>
                    </div>
                    {isAnnual && plan.annualPrice > 0 && (
                      <p className="text-sm mt-1 font-medium" style={{ color: '#10B981' }}>
                        Billed annually (${(plan.annualPrice * 12).toFixed(2)}/year)
                      </p>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="mt-1 mr-2 flex-shrink-0" size={18} style={{ color: plan.color }} />
                        <span style={{ color: '#4B5563' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className="w-full py-3 rounded-2xl text-white font-bold transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                    style={{ background: plan.gradient }}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Educational Institution CTA */}
        <div 
          className={`rounded-3xl p-10 backdrop-blur-xl border shadow-2xl max-w-4xl mx-auto relative overflow-hidden transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'rgba(155, 93, 229, 0.3)',
            transitionDelay: '800ms' 
          }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{
            background: 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10" style={{
            background: 'radial-gradient(circle, #e67e22 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 rounded-full animate-pulse opacity-20" style={{ 
                  background: 'linear-gradient(135deg, #9B5DE5 0%, #e67e22 100%)' 
                }}></div>
                <div 
                  className="absolute inset-2 rounded-full flex items-center justify-center shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)' }}
                >
                  <Building2 size={40} className="text-white" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ color: '#1F2937' }}>
                Educational Institution Plans
              </h3>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                Need a custom plan for your school or university? We offer special educational pricing with bulk licenses and dedicated support.
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center font-bold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white"
                style={{ background: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)' }}
              >
                Contact Sales →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
    <Footer/>
    </>
  );
};

export default Pricing;