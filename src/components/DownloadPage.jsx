import { useState, useEffect, useRef } from 'react';
import { 
  Download, 
  Smartphone, 
  Monitor, 
  CheckCircle, 
  ArrowRight,
  AlertCircle,
  FileText,
  Video,
  HelpCircle,
  Sparkles,
  Apple,
  Chrome,
  Play
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const DownloadPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('android');
  const [downloadStarted, setDownloadStarted] = useState(false);
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

  const platforms = [
    {
      id: 'android',
      name: 'Android',
      icon: <Play className="h-8 w-8" />,
      color: '#10B981',
      version: 'v1.0.2',
      size: '113 MB',
      requirements: 'Android 8.0 or higher',
      downloadLink: './notetedd-android.apk',
      storeLink: 'https://play.google.com/store/apps/details?id=com.notetedd'
    },
    {
      id: 'ios',
      name: 'iOS',
      icon: <Apple className="h-8 w-8" />,
      color: '#9B5DE5',
      version: 'v1.0.2',
      size: '52 MB',
      requirements: 'iOS 13.0 or higher',
      downloadLink: '/downloads/notetedd-ios.ipa',
      storeLink: 'https://apps.apple.com/app/notetedd'
    },
    {
      id: 'web',
      name: 'Web App',
      icon: <Chrome className="h-8 w-8" />,
      color: '#e67e22',
      version: 'Latest',
      size: 'No download',
      requirements: 'Modern browser',
      downloadLink: 'https://app.notetedd.com',
      storeLink: null
    },
    {
      id: 'windows',
      name: 'Windows',
      icon: <Monitor className="h-8 w-8" />,
      color: '#3B82F6',
      version: 'v1.0.1',
      size: '78 MB',
      requirements: 'Windows 10 or higher',
      downloadLink: '/downloads/notetedd-windows.exe',
      storeLink: null
    }
  ];

  const installationSteps = {
    android: [
      { step: 1, text: 'Download the APK file from the link above' },
      { step: 2, text: 'Open Settings > Security and enable "Install from Unknown Sources"' },
      { step: 3, text: 'Locate the downloaded APK file in your Downloads folder' },
      { step: 4, text: 'Tap the file and follow the installation prompts' },
      { step: 5, text: 'Launch NoteTedd and sign in or create your account' }
    ],
    ios: [
      { step: 1, text: 'Tap the App Store button above to install from App Store' },
      { step: 2, text: 'Or download TestFlight for beta access' },
      { step: 3, text: 'Search for "NoteTedd" in the App Store' },
      { step: 4, text: 'Tap "Get" to download and install' },
      { step: 5, text: 'Open the app and complete the setup process' }
    ],
    web: [
      { step: 1, text: 'Click the "Launch Web App" button above' },
      { step: 2, text: 'Sign in with your NoteTedd account or create a new one' },
      { step: 3, text: 'Allow microphone access when prompted for lecture recording' },
      { step: 4, text: 'For offline access, install as PWA from browser menu' },
      { step: 5, text: 'Sync automatically works across all your devices' }
    ],
    windows: [
      { step: 1, text: 'Download the Windows installer (.exe) from above' },
      { step: 2, text: 'Run the installer file (may need administrator rights)' },
      { step: 3, text: 'Follow the installation wizard instructions' },
      { step: 4, text: 'Launch NoteTedd from Start Menu or Desktop shortcut' },
      { step: 5, text: 'Sign in and allow necessary permissions for recording' }
    ]
  };

  const resources = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'User Guide',
      description: 'Complete documentation on using NoteTedd features',
      link: '#',
      color: '#9B5DE5'
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for getting started',
      link: '# ',
      color: '#e67e22'
    },
    {
      icon: <HelpCircle className="h-6 w-6" />,
      title: 'FAQ',
      description: 'Answers to common questions and troubleshooting',
      link: '/faq',
      color: '#9B5DE5'
    }
  ];

  const systemRequirements = {
    android: [
      'Android 8.0 (Oreo) or higher',
      '2GB RAM minimum (4GB recommended)',
      '100MB free storage space',
      'Microphone access required',
      'Internet connection for AI features'
    ],
    ios: [
      'iOS 13.0 or later',
      'iPhone 7 or newer',
      '100MB free storage space',
      'Microphone access required',
      'Internet connection for AI features'
    ],
    web: [
      'Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+',
      'Stable internet connection',
      'Microphone access',
      'Minimum 4GB RAM',
      'Modern processor (last 5 years)'
    ],
    windows: [
      'Windows 10 (64-bit) or higher',
      '4GB RAM minimum (8GB recommended)',
      '200MB free storage space',
      'Microphone access required',
      'Internet connection for AI features'
    ]
  };

  const handleDownload = (platform) => {
  setDownloadStarted(true);
  setTimeout(() => setDownloadStarted(false), 3000);
  
  //  temporary anchor element to trigger download
  const link = document.createElement('a');
  link.href = platform.downloadLink;
  link.download = `notetedd-${platform.id}.${platform.id === 'android' ? 'apk' : platform.id === 'ios' ? 'ipa' : 'exe'}`;
  
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  console.log(`Downloading ${platform.name}...`);

};

  const currentPlatform = platforms.find(p => p.id === selectedPlatform);

  return (
    <>
    <Navbar/>
    <>
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
            <Download className="h-4 w-4 mr-2" />
            Get NoteTedd
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#1F2937' }}>
            Download <span style={{ color: '#e67e22' }}>NoteTedd</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Choose your platform and start transforming your learning experience today.
            <p className='text-lg mx-auto text-red-500'>Please note that IOS and Windows downloads are still under development and will be available soon.</p>  
            
          </p>
        </div>

        {/* Download Success Message */}
        {downloadStarted && (
          <div 
            className="mb-8 max-w-2xl mx-auto rounded-2xl p-4 backdrop-blur-xl border-2 flex items-center shadow-lg"
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              borderColor: '#10B981'
            }}
          >
            <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" style={{ color: '#10B981' }} />
            <p className="font-bold" style={{ color: '#059669' }}>
              Download started! Check your downloads folder.
            </p>
          </div>
        )}

        {/* Platform Selection */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {platforms.map((platform, index) => (
            <button
              key={platform.id}
              onClick={() => setSelectedPlatform(platform.id)}
              className={`rounded-2xl p-6 backdrop-blur-xl border-2 transition-all duration-300 hover:scale-105 ${
                selectedPlatform === platform.id ? 'shadow-xl' : 'shadow-lg'
              }`}
              style={{
                backgroundColor: selectedPlatform === platform.id ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.7)',
                borderColor: selectedPlatform === platform.id ? platform.color : `${platform.color}33`
              }}
            >
              <div 
                className="w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg"
                style={{ 
                  backgroundColor: selectedPlatform === platform.id ? platform.color : `${platform.color}20`,
                  color: selectedPlatform === platform.id ? '#FFF' : platform.color
                }}
              >
                {platform.icon}
              </div>
              <h3 className="font-bold mb-1" style={{ color: '#1F2937' }}>
                {platform.name}
              </h3>
              <p className="text-xs" style={{ color: '#6B7280' }}>
                {platform.version}
              </p>
            </button>
          ))}
        </div>

        {/* Main Download Section */}
        <div 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          {/* Download Card */}
          <div className="rounded-3xl backdrop-blur-xl border-2 shadow-2xl p-8" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: `${currentPlatform.color}33`
          }}>
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ 
                  backgroundColor: currentPlatform.color,
                  color: '#FFF'
                }}
              >
                {currentPlatform.icon}
              </div>
              <div>
                <h2 className="text-2xl font-extrabold" style={{ color: '#1F2937' }}>
                  {currentPlatform.name}
                </h2>
                <p style={{ color: '#6B7280' }}>
                  Version {currentPlatform.version} • {currentPlatform.size}
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: `${currentPlatform.color}10` }}>
                <CheckCircle className="h-5 w-5 flex-shrink-0" style={{ color: currentPlatform.color }} />
                <span className="text-sm font-medium" style={{ color: '#4B5563' }}>
                  {currentPlatform.requirements}
                </span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-3">
              {selectedPlatform === 'web' ? (
                <a
                  href={currentPlatform.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl text-white hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${currentPlatform.color} 0%, ${currentPlatform.color}CC 100%)` }}
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Launch Web App
                </a>
              ) : (
                <>
                  <button
                    onClick={() => handleDownload(currentPlatform)}
                    className="w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl text-white hover:scale-105"
                    style={{ background: `linear-gradient(135deg, ${currentPlatform.color} 0%, ${currentPlatform.color}CC 100%)` }}
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Direct Download
                  </button>

                  {currentPlatform.storeLink && (
                    <a
                      href={currentPlatform.storeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center border-2 hover:scale-105 shadow-lg"
                      style={{ 
                        borderColor: `${currentPlatform.color}40`,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        color: currentPlatform.color
                      }}
                    >
                      {selectedPlatform === 'android' ? <Play className="h-5 w-5 mr-2" /> : <Apple className="h-5 w-5 mr-2" />}
                      {selectedPlatform === 'android' ? 'Get on Play Store' : 'Get on App Store'}
                    </a>
                  )}
                </>
              )}
            </div>

            {/* Important Notice */}
            <div className="mt-6 p-4 rounded-xl border-2" style={{
              backgroundColor: 'rgba(59, 130, 246, 0.05)',
              borderColor: 'rgba(59, 130, 246, 0.3)'
            }}>
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#3B82F6' }} />
                <div>
                  <p className="text-sm font-bold mb-1" style={{ color: '#1F2937' }}>
                    First Time Installation?
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>
                    Follow the installation steps carefully. You may need to grant permissions for the app to access your microphone for lecture recording.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Installation Steps */}
          <div className="rounded-3xl backdrop-blur-xl border shadow-2xl p-8" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: 'rgba(155, 93, 229, 0.3)'
          }}>
            <h3 className="text-2xl font-extrabold mb-6" style={{ color: '#1F2937' }}>
              Installation Steps
            </h3>

            <div className="space-y-4">
              {installationSteps[selectedPlatform].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white"
                    style={{ 
                      background: index % 2 === 0 
                        ? 'linear-gradient(135deg, #9B5DE5 0%, #7B3DB8 100%)'
                        : 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)'
                    }}
                  >
                    {item.step}
                  </div>
                  <p className="pt-1 leading-relaxed" style={{ color: '#4B5563' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* System Requirements */}
            <div className="mt-8 p-4 rounded-xl" style={{ backgroundColor: 'rgba(155, 93, 229, 0.05)' }}>
              <h4 className="font-bold mb-3" style={{ color: '#1F2937' }}>
                System Requirements
              </h4>
              <ul className="space-y-2">
                {systemRequirements[selectedPlatform].map((req, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#9B5DE5' }} />
                    <span style={{ color: '#6B7280' }}>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div 
          className={`transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <h3 className="text-3xl font-extrabold text-center mb-8" style={{ color: '#1F2937' }}>
            Helpful Resources
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="rounded-2xl p-6 backdrop-blur-xl border shadow-lg transition-all duration-300 hover:scale-105 block"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderColor: `${resource.color}33`
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center shadow-lg"
                  style={{ 
                    backgroundColor: `${resource.color}20`,
                    color: resource.color
                  }}
                >
                  {resource.icon}
                </div>
                <h4 className="text-lg font-bold mb-2" style={{ color: '#1F2937' }}>
                  {resource.title}
                </h4>
                <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
                  {resource.description}
                </p>
                <div className="flex items-center gap-2" style={{ color: resource.color }}>
                  <span className="text-sm font-bold">Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Need Help CTA */}
        <div 
          className={`mt-12 rounded-3xl p-8 backdrop-blur-xl border shadow-2xl max-w-3xl mx-auto text-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: 'rgba(230, 126, 34, 0.3)',
            transitionDelay: '800ms' 
          }}
        >
          <HelpCircle className="h-12 w-12 mx-auto mb-4" style={{ color: '#e67e22' }} />
          <h3 className="text-2xl font-extrabold mb-3" style={{ color: '#1F2937' }}>
            Need Help Getting Started?
          </h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Our support team is ready to help you with installation, setup, or any questions you might have.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white"
            style={{ background: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)' }}
          >
            Contact Support
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
    </>
    <Footer/>
    </>
  );
};

export default DownloadPage;