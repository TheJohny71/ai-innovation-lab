'use client';

// [Previous code remains the same until the app details section]
// Adding the missing part:

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
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="relative bg-slate-900 overflow-hidden">
      <ParticleCanvas />
      
      {/* Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 bg-purple-500/30 -top-48 -left-48" />
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 bg-emerald-500/30 -bottom-48 -right-48" />
      </div>

      <div className={`transition-all duration-500 ${
        isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        {slides[currentSlide].component()}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8">
        <button
          onClick={() => {
            if (currentSlide > 0) {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentSlide(prev => prev - 1);
                setIsTransitioning(false);
              }, 150);
            }
          }}
          disabled={currentSlide === 0}
          className="p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
        >
          <ChevronLeft className={`w-5 h-5 ${
            currentSlide === 0
              ? 'text-gray-600' 
              : 'text-gray-400 hover:text-gray-300'
          }`} />
        </button>

        <div className="flex items-center gap-4">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => {
                if (currentSlide !== index) {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentSlide(index);
                    setIsTransitioning(false);
                  }, 150);
                }
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                currentSlide === index 
                  ? 'bg-emerald-500 text-white'
                  : 'text-gray-600 hover:text-gray-400'
              }`}
            >
              {currentSlide !== index && (
                <div className="w-2 h-2 rounded-full bg-gray-600 mr-2" />
              )}
              {slide.title}
            </button>
          ))}
        </div>

        <button
          onClick={() => {
            if (currentSlide < slides.length - 1) {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentSlide(prev => prev + 1);
                setIsTransitioning(false);
              }, 150);
            }
          }}
          disabled={currentSlide === slides.length - 1}
          className="p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
        >
          <ChevronRight className={`w-5 h-5 ${
            currentSlide === slides.length - 1
              ? 'text-gray-600' 
              : 'text-gray-400 hover:text-gray-300'
          }`} />
        </button>
      </nav>
    </div>
  );
};

export default PresentationDeck;