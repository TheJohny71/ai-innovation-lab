'use client';
import { useState, useEffect } from 'react';
import SlideLayout from './components/layout/SlideLayout';
import CascadingCard from './components/cards/CascadingCard';
import ExpandingCard from './components/cards/ExpandingCard';
import AnimatedStats from './components/layout/AnimatedStats';
import CallToAction from './components/layout/CallToAction';
import Loading from './components/ui/loading';
import { Database, Search, BarChart } from 'lucide-react';

const solutions = [
  {
    title: "Data Analysis",
    description: "Advanced analytics and insights for legal professionals",
    icon: Database,
    features: [
      "Real-time data processing",
      "Custom report generation",
      "Trend analysis and forecasting",
      "Automated data visualization"
    ]
  },
  {
    title: "Smart Search",
    description: "AI-powered document search and retrieval",
    icon: Search,
    features: [
      "Natural language processing",
      "Context-aware search",
      "Document classification",
      "Semantic analysis"
    ]
  },
  {
    title: "Analytics Platform",
    description: "Comprehensive legal data visualization",
    icon: BarChart,
    features: [
      "Interactive dashboards",
      "Custom metrics tracking",
      "Performance analytics",
      "Predictive insights"
    ]
  }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const handleSectionChange = (index: number) => {
    setCurrentSection(index);
  };

  return (
    <SlideLayout onSectionChange={handleSectionChange}>
      {/* Hero Section */}
      <section className="flex items-center justify-center p-8 min-h-screen bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 mb-8 animate-fade-in">
            AI Innovation Lab
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-delay">
            Next-generation legal technology solutions powered by artificial intelligence
          </p>
        </div>
      </section>

      {/* Solutions Overview - Cascading Cards */}
      <section className="flex items-center justify-center p-8 min-h-screen bg-gradient-to-br from-purple-900/10 to-blue-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Our Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <CascadingCard 
                key={index}
                title={solution.title}
                description={solution.description}
                Icon={solution.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features - Expanding Cards */}
      <section className="flex items-center justify-center p-8 min-h-screen bg-gradient-to-br from-blue-900/10 to-purple-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Explore Our Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <ExpandingCard 
                key={index}
                title={solution.title}
                description={solution.description}
                features={solution.features}
                Icon={solution.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="flex items-center justify-center p-8 min-h-screen bg-gradient-to-br from-purple-900/10 to-teal-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Impact & Performance
          </h2>
          <AnimatedStats />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="flex items-center justify-center p-8 min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
        <CallToAction />
      </section>
    </SlideLayout>
  );
}