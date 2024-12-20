import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CircleCheck, Command, Database, Search, ChevronUp, ChevronDown } from 'lucide-react';

const PresentationDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandedApp, setExpandedApp] = useState<string | null>(null);

  // Apps data structure
  const apps = [
    {
      id: 'ai-analysis',
      title: 'AI Analysis',
      subtitle: 'Enhanced Legal Research',
      description: 'Advanced AI-powered legal document analysis and research assistance.',
      icon: Command,
      color: 'from-purple-500 to-indigo-500',
      features: ['Natural Language Processing', 'Citation Checking', 'Key Fact Extraction'],
      metrics: { timeReduction: '40%', accuracyRate: '85%' }
    },
    {
      id: 'data-integration',
      title: 'Data Integration',
      subtitle: 'Unified Data Platform',
      description: 'Seamless integration with existing legal databases and systems.',
      icon: Database,
      color: 'from-teal-500 to-emerald-500',
      features: ['Real-time Sync', 'Data Validation', 'API Integration'],
      metrics: { processingSpeed: '60%', dataAccuracy: '95%' }
    },
    {
      id: 'analytics',
      title: 'Analytics',
      subtitle: 'Insights & Reporting',
      description: 'Data-driven insights and customizable reporting.',
      icon: Search,
      color: 'from-orange-500 to-pink-500',
      features: ['Predictive Analytics', 'Custom Dashboards', 'Trend Analysis'],
      metrics: { predictionAccuracy: '85%', reportingEfficiency: '75%' }
    }
  ];

  // Define slides
  const slides = [
    {
      id: 'welcome',
      title: 'Welcome',
      component: () => (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center relative z-10">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent mb-6">
              AI Innovation Lab
            </h1>
            <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Leading innovation through human-led, AI-driven mindset
            </p>
            <div className="flex justify-center gap-6">
              {['Enhanced Client Service', 'Accelerated Workflows', 'Practice Innovation'].map((benefit) => (
                <div key={benefit} 
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:bg-gray-800/40 transition-all hover:-translate-y-1">
                  <CircleCheck className="w-8 h-8 text-teal-400 mx-auto mb-3" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'solutions-flow',
      title: 'Solutions',
      component: () => (
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Integrated Solutions</h2>
            <div className="grid grid-cols-3 gap-12">
              {apps.map((app, index) => (
                <div key={app.id} className="flex flex-col items-center relative">
                  <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${app.color} p-0.5 hover:scale-105 transition-all`}>
                    <div className="w-full h-full rounded-3xl bg-gray-900 flex items-center justify-center">
                      <app.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <div className="text-xl font-bold text-white mb-2">{app.title}</div>
                    <div className="text-teal-400">{app.subtitle}</div>
                  </div>
                  {index < 2 && (
                    <ArrowRight className="absolute -right-6 top-1/2 -translate-y-1/2 text-gray-600 animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    // Impact Slide
    {
      id: 'impact',
      title: 'Impact',
      component: () => (
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Real-World Impact</h2>
            <div className="grid grid-cols-3 gap-8">
              {apps.map((app) => (
                <div key={app.id} 
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8 hover:bg-gray-800/40 transition-all hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.color} p-0.5 mb-6`}>
                    <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                      <app.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{app.title}</h3>
                  <div className="space-y-4">
                    {Object.entries(app.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-gray-400">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="text-teal-400 font-bold text-xl">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    // App Details Slide
    {
      id: 'app-details',
      title: 'Apps',
      component: () => (
        <div className="min-h-screen py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Our Applications</h2>
            <div className="space-y-6">
              {apps.map((app) => (
                <div key={app.id} 
                  className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl transition-all duration-300
                    ${expandedApp === app.id ? 'scale-100' : 'hover:bg-gray-800/40 hover:-translate-y-1'}`}
                >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedApp((current) => current === app.id ? null : app.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${app.color} p-0.5 flex-shrink-0`}>
                        <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                          <app.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">{app.title}</h3>
                        <p className="text-teal-400 text-sm">{app.subtitle}</p>
                        <p className="text-gray-400 mt-2">{app.description}</p>
                      </div>
                      {expandedApp === app.id ? (
                        <ChevronUp className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                  
                  {expandedApp === app.id && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-700/30 pt-6">
                        <div className="grid grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                            <ul className="space-y-2">
                              {app.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-300">
                                  <CircleCheck className="w-4 h-4 text-teal-400 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Performance</h4>
                            <div className="space-y-4">
                              {Object.entries(app.metrics).map(([key, value]) => (
                                <div key={key} className="flex justify-between items-center">
                                  <span className="text-gray-400">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                  <span className="text-teal-400 font-bold">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Future Apps Placeholder */}
              <div className="mt-8 p-8 border-2 border-dashed border-gray-700/30 rounded-xl text-center">
                <h3 className="text-xl font-bold text-white mb-2">More Apps Coming Soon</h3>
                <p className="text-gray-400">
                  Our innovation lab is constantly developing new solutions. 
                  Stay tuned for upcoming additions to our portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Navigation controls
  const navigationControls = (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8">
      <button
        onClick={() => setCurrentSlide(prev => prev - 1)}
        disabled={currentSlide === 0}
        className="p-2 rounded-full bg-gray-800/50 text-white hover:bg-gray-800 disabled:opacity-50"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      
      <div className="flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all ${
              currentSlide === index 
                ? 'bg-teal-500 text-white' 
                : 'bg-gray-800/50 text-gray-400 hover:text-white'
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-gray-600'
            }`} />
            <span className="text-sm">{slide.title}</span>
          </button>
        ))}
      </div>

      <button
        onClick={() => setCurrentSlide(prev => prev + 1)}
        disabled={currentSlide === slides.length - 1}
        className="p-2 rounded-full bg-gray-800/50 text-white hover:bg-gray-800 disabled:opacity-50"
      >
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
  );

  return (
    <div className="relative bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 bg-purple-500/30 -top-1/4 -left-1/4" />
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 bg-teal-500/30 -bottom-1/4 -right-1/4" />
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-500 ${
        isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        {slides[currentSlide].component()}
      </div>

      {/* Navigation */}
      {navigationControls}
    </div>
  );
};

export default PresentationDeck;
