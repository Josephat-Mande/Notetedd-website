import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, User, MessageSquare, Sparkles } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // EmailJS Configuration
      const serviceId = 'service_8d2l1ot'; // EmailJS service ID
      const templateId = 'template_r70l8l2'; //  EmailJS template ID
      const publicKey = 'uHpDIiBwdP_Fry1Mr'; //  EmailJS public key

      // EmailJS send method
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formData.from_name,
            from_email: formData.from_email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'NoteTedd Support',
          }
        })
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
        });
        setFormData({
          from_name: '',
          from_email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or email us directly at info@notetedd.com'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      content: 'notetedd@gmail.com',
      href: 'mailto:notetedd@gmail.com',
      color: '#9B5DE5'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      content: '+254 704 697 508',
      href: 'tel:+254704697508',
      color: '#e67e22'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      content: 'University Way, Nairobi',
      href: 'https://maps.google.com',
      color: '#9B5DE5'
    }
  ];

  return (
    <section 
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
        {/* Header */}
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
            <MessageSquare className="h-4 w-4 mr-2" />
            Get In Touch
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#1F2937' }}>
            Contact <span style={{ color: '#e67e22' }}>Us</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Have questions about NoteTedd? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : '_self'}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="rounded-2xl p-6 backdrop-blur-xl border shadow-lg text-center transition-all duration-300 hover:scale-105 block"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderColor: `${info.color}33`
              }}
            >
              <div 
                className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${info.color} 0%, ${info.color}CC 100%)`,
                  color: '#FFF'
                }}
              >
                {info.icon}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1F2937' }}>
                {info.title}
              </h3>
              <p style={{ color: '#6B7280' }}>
                {info.content}
              </p>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div 
          className={`max-w-3xl mx-auto rounded-3xl backdrop-blur-xl border-2 shadow-2xl p-8 md:p-12 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: 'rgba(155, 93, 229, 0.3)',
            transitionDelay: '400ms'
          }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold mb-2" style={{ color: '#1F2937' }}>
              Send Us a Message
            </h2>
            <p style={{ color: '#6B7280' }}>
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {/* Status Message */}
          {status.message && (
            <div 
              className={`mb-6 p-4 rounded-xl flex items-center ${
                status.type === 'success' ? 'border-2' : 'border-2'
              }`}
              style={{
                backgroundColor: status.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                borderColor: status.type === 'success' ? '#10B981' : '#EF4444'
              }}
            >
              {status.type === 'success' ? (
                <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: '#10B981' }} />
              ) : (
                <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: '#EF4444' }} />
              )}
              <p style={{ color: status.type === 'success' ? '#059669' : '#DC2626' }}>
                {status.message}
              </p>
            </div>
          )}

          <div className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#1F2937' }}>
                Your Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{ color: '#9B5DE5' }} />
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 backdrop-blur-xl transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    borderColor: 'rgba(155, 93, 229, 0.3)',
                    color: '#1F2937',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#1F2937' }}>
                Your Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{ color: '#e67e22' }} />
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 backdrop-blur-xl transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    borderColor: 'rgba(230, 126, 34, 0.3)',
                    color: '#1F2937',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Subject Input */}
            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#1F2937' }}>
                Subject *
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{ color: '#9B5DE5' }} />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 backdrop-blur-xl transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    borderColor: 'rgba(155, 93, 229, 0.3)',
                    color: '#1F2937',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#1F2937' }}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                required
                rows="6"
                className="w-full px-4 py-3 rounded-xl border-2 backdrop-blur-xl transition-all duration-300 resize-none"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderColor: 'rgba(230, 126, 34, 0.3)',
                  color: '#1F2937',
                  outline: 'none'
                }}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl text-white ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'
              }`}
              style={{ 
                background: isSubmitting 
                  ? 'linear-gradient(135deg, #6B7280 0%, #4B5563 100%)'
                  : 'linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)'
              }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div 
          className={`mt-12 text-center transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="rounded-2xl p-6 backdrop-blur-xl border inline-block shadow-lg" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'rgba(230, 126, 34, 0.3)'
          }}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="h-5 w-5" style={{ color: '#e67e22' }} />
              <p className="font-bold" style={{ color: '#1F2937' }}>
                Quick Response Guarantee
              </p>
            </div>
            <p className="text-sm" style={{ color: '#6B7280' }}>
              We typically respond within 24 hours during business days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;