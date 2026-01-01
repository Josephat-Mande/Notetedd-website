import { useState, useEffect, useRef } from 'react';
import { Shield, Lock, Eye, FileText, Users, Database, Mail, AlertCircle, CheckCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
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

  const sections = [
    {
      id: 'introduction',
      icon: <Shield className="h-6 w-6" />,
      title: 'Introduction',
      color: '#9B5DE5',
      content: `Welcome to NoteTedd. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application, web application, and related services (collectively, the "Services").

By using NoteTedd, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Services.`
    },
    {
      id: 'information-collection',
      icon: <Database className="h-6 w-6" />,
      title: 'Information We Collect',
      color: '#e67e22',
      content: `We collect several types of information to provide and improve our Services:

Personal Information:
- Name and email address when you create an account
- University or institution name
- Profile information you choose to provide
- Payment information (processed securely through third-party providers)

Usage Data:
- Lecture recordings and audio files you upload
- Notes, transcriptions, and study materials you create
- Quiz results and learning progress
- App usage patterns and feature interactions
- Device information (device type, operating system, unique device identifiers)

Technical Data:
- IP address and location data
- Browser type and version
- Time zone settings
- Operating system and platform
- Log data and analytics information

Audio and Voice Data:
- Lecture recordings captured through the app
- Voice data processed for transcription purposes
- Note: Audio processing may be done locally or through secure cloud services`
    },
    {
      id: 'how-we-use',
      icon: <FileText className="h-6 w-6" />,
      title: 'How We Use Your Information',
      color: '#9B5DE5',
      content: `We use the collected information for various purposes:

Service Delivery:
- Provide, maintain, and improve our Services
- Process lecture recordings and generate transcriptions
- Create AI-powered study materials, quizzes, and summaries
- Sync your data across multiple devices
- Convert notes to audio format

Communication:
- Send you updates about the Services
- Respond to your inquiries and support requests
- Send promotional materials (with your consent)
- Notify you about changes to our Services or policies

Analytics and Improvement:
- Analyze usage patterns to improve user experience
- Develop new features and functionality
- Conduct research and analysis
- Monitor and prevent technical issues

Legal Compliance:
- Comply with legal obligations
- Protect against fraudulent or illegal activity
- Enforce our Terms of Service`
    },
    {
      id: 'data-sharing',
      icon: <Users className="h-6 w-6" />,
      title: 'Data Sharing and Disclosure',
      color: '#e67e22',
      content: `We do not sell your personal information. We may share your information in the following circumstances:

Service Providers:
- Cloud storage providers (e.g., AWS, Google Cloud)
- AI and transcription service providers
- Payment processors
- Analytics services
- Customer support platforms

Legal Requirements:
- When required by law or legal process
- To protect our rights, privacy, safety, or property
- In connection with investigations of fraud or security issues

Business Transfers:
- In the event of a merger, acquisition, or sale of assets
- With your consent or at your direction

Aggregated Data:
- We may share anonymized, aggregated data that cannot identify you personally

All third-party service providers are contractually obligated to protect your data and use it only for specified purposes.`
    },
    {
      id: 'data-security',
      icon: <Lock className="h-6 w-6" />,
      title: 'Data Security',
      color: '#9B5DE5',
      content: `We implement industry-standard security measures to protect your information:

Encryption:
- All data transmitted between your device and our servers is encrypted using SSL/TLS
- Stored data is encrypted at rest
- Audio recordings and sensitive information receive additional encryption

Access Controls:
- Strict access controls limit who can view your data
- Multi-factor authentication for administrative access
- Regular security audits and vulnerability assessments

Data Centers:
- We use reputable cloud providers with SOC 2 Type II compliance
- Data centers have physical security measures
- Regular backups to prevent data loss

Your Responsibility:
- Keep your password secure and confidential
- Use strong, unique passwords
- Enable two-factor authentication when available
- Log out from shared devices

While we implement robust security measures, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.`
    },
    {
      id: 'data-retention',
      icon: <FileText className="h-6 w-6" />,
      title: 'Data Retention',
      color: '#e67e22',
      content: `We retain your information for as long as necessary to provide our Services and fulfill the purposes outlined in this policy:

Active Accounts:
- Your data is retained while your account is active
- You can delete notes, recordings, and other content at any time

Inactive Accounts:
- Accounts inactive for 2+ years may be archived
- We will notify you before deletion
- You can reactivate your account to restore data

Legal Obligations:
- Some data may be retained longer to comply with legal requirements
- Financial records retained per tax and accounting laws
- Security logs retained for fraud prevention

Deletion Requests:
- You can request account deletion at any time
- Most data is deleted within 30 days
- Some data may be retained in backups for up to 90 days
- Anonymized data may be retained for analytics`
    },
    {
      id: 'your-rights',
      icon: <Eye className="h-6 w-6" />,
      title: 'Your Privacy Rights',
      color: '#9B5DE5',
      content: `You have the following rights regarding your personal information:

Access and Portability:
- Request a copy of your personal data
- Export your notes, recordings, and study materials
- Receive data in a structured, commonly used format

Correction:
- Update or correct inaccurate information
- Modify your profile and account settings

Deletion:
- Request deletion of your account and data
- Delete specific recordings or notes
- "Right to be forgotten" under applicable laws

Restriction:
- Request restriction of certain processing activities
- Opt-out of marketing communications
- Disable certain features

Objection:
- Object to certain data processing activities
- Withdraw consent at any time

Data Protection Authority:
- Right to lodge a complaint with supervisory authorities

To exercise these rights, contact us at privacy@notetedd.com. We will respond within 30 days.`
    },
    {
      id: 'children-privacy',
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Children's Privacy",
      color: '#e67e22',
      content: `NoteTedd is intended for users aged 13 and older. We do not knowingly collect information from children under 13.

If You're Under 18:
- Parental consent may be required in some jurisdictions
- Please review this policy with a parent or guardian
- Parents can contact us to review or delete their child's information

If We Discover:
- If we learn we've collected data from a minor under 13, we will delete it promptly
- Parents who believe we have information from their child should contact us immediately

Educational Institution Use:
- Schools using NoteTedd must ensure compliance with FERPA and COPPA
- Institutional agreements may provide additional protections`
    },
    {
      id: 'international',
      icon: <Users className="h-6 w-6" />,
      title: 'International Data Transfers',
      color: '#9B5DE5',
      content: `NoteTedd is based in Kenya and may process data internationally:

Data Processing Locations:
- Your information may be transferred to and processed in countries outside your residence
- We use cloud services with data centers in multiple regions
- All transfers comply with applicable data protection laws

Safeguards:
- Standard Contractual Clauses for EU data transfers
- Adequate protection mechanisms as required by law
- Service providers commit to data protection standards

Your Consent:
- By using our Services, you consent to international data transfers
- We ensure appropriate safeguards are in place`
    },
    {
      id: 'cookies',
      icon: <Database className="h-6 w-6" />,
      title: 'Cookies and Tracking',
      color: '#e67e22',
      content: `We use cookies and similar technologies to enhance your experience:

Types of Cookies:
- Essential cookies: Required for basic functionality
- Analytics cookies: Help us understand usage patterns
- Preference cookies: Remember your settings
- Marketing cookies: Deliver relevant content (with consent)

Third-Party Services:
- Google Analytics for usage statistics
- Authentication providers (Google, Apple Sign-In)
- Payment processing services

Your Choices:
- Adjust cookie settings in your browser
- Opt-out of analytics tracking
- Use Do Not Track settings
- Note: Disabling essential cookies may affect functionality`
    },
    {
      id: 'changes',
      icon: <FileText className="h-6 w-6" />,
      title: 'Changes to This Policy',
      color: '#9B5DE5',
      content: `We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.

Notification of Changes:
- Material changes will be announced via email
- Updates posted on our website and in-app
- Continued use after changes constitutes acceptance

Review Regularly:
- We encourage you to review this policy periodically
- Last updated date is shown at the top
- Previous versions available upon request

Significant Changes:
- Major changes may require your explicit consent
- You may be asked to re-accept updated terms`
    },
    {
      id: 'contact',
      icon: <Mail className="h-6 w-6" />,
      title: 'Contact Us',
      color: '#e67e22',
      content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Email: privacy@notetedd.com
General Inquiries: info@notetedd.com
Phone: +254 115911220
Address: Tech Hub, University Way, Nairobi, Kenya

Response Time:
- We aim to respond to all inquiries within 5 business days
- Complex requests may take up to 30 days
- You will receive confirmation of receipt

Data Protection Officer:
For EU-related inquiries, contact our Data Protection Officer at dpo@notetedd.com`
    }
  ];

  const highlights = [
    {
      icon: <Shield className="h-5 w-5" />,
      text: 'Your data is encrypted and secure',
      color: '#9B5DE5'
    },
    {
      icon: <Eye className="h-5 w-5" />,
      text: 'You control your information',
      color: '#e67e22'
    },
    {
      icon: <Lock className="h-5 w-5" />,
      text: 'We never sell your data',
      color: '#9B5DE5'
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: 'GDPR and CCPA compliant',
      color: '#e67e22'
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

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center rounded-full px-5 py-2 text-sm font-bold mb-6 backdrop-blur-xl border shadow-lg" style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'rgba(155, 93, 229, 0.3)',
            color: '#9B5DE5'
          }}>
            <Shield className="h-4 w-4 mr-2" />
            Your Privacy Matters
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#1F2937' }}>
            Privacy <span style={{ color: '#9B5DE5' }}>Policy</span>
          </h1>
          <p className="text-lg mb-6 max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
            Last Updated: December 27, 2025
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="rounded-xl p-4 backdrop-blur-xl border shadow-lg"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderColor: `${highlight.color}33`
                }}
              >
                <div 
                  className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center"
                  style={{ 
                    backgroundColor: `${highlight.color}20`,
                    color: highlight.color
                  }}
                >
                  {highlight.icon}
                </div>
                <p className="text-xs font-bold" style={{ color: '#4B5563' }}>
                  {highlight.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div 
              key={section.id}
              className={`rounded-2xl backdrop-blur-xl border shadow-lg overflow-hidden transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderColor: `${section.color}33`,
                transitionDelay: `${100 * index}ms`
              }}
            >
              <button
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-white/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ 
                      backgroundColor: `${section.color}20`,
                      color: section.color
                    }}
                  >
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-left" style={{ color: '#1F2937' }}>
                    {section.title}
                  </h2>
                </div>
                <div 
                  className={`transform transition-transform duration-300 ${
                    activeSection === section.id ? 'rotate-180' : ''
                  }`}
                  style={{ color: section.color }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeSection === section.id ? 'max-h-[2000px]' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 prose prose-sm max-w-none">
                  <div style={{ color: '#4B5563', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
                    {section.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div 
          className={`mt-12 rounded-3xl p-8 backdrop-blur-xl border shadow-2xl text-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: 'rgba(230, 126, 34, 0.3)',
            transitionDelay: '1200ms' 
          }}
        >
          <Mail className="h-12 w-12 mx-auto mb-4" style={{ color: '#e67e22' }} />
          <h3 className="text-2xl font-extrabold mb-3" style={{ color: '#1F2937' }}>
            Questions About Your Privacy?
          </h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We're here to help. Contact our privacy team for any questions or concerns.
          </p>
          <a
            href="mailto:notetedd@gmail.com"
            className="inline-flex items-center font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white"
            style={{ background: 'linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)' }}
          >
            Contact Privacy Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;