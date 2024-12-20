// src/app/page.tsx
'use client';
import { useState, useEffect } from 'react';
import SlideLayout from './components/layout/SlideLayout';
import CascadingCard from './components/cards/CascadingCard';
import ExpandingCard from './components/cards/ExpandingCard';
import AnimatedStats from './components/layout/AnimatedStats';
import CallToAction from './components/layout/CallToAction';
import Loading from './components/ui/loading';

const solutions = [
  {
    title: "Data Analysis",
    description: "Advanced analytics and insights for legal professionals",
    icon: "database" as const,
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
    icon: "search" as const,
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
    icon: "database" as const,
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

  return (
    <SlideLayout>
      {/* Hero Section */}
      <section className="flex items-center justify-center p-8 min-h-full">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 mb-6">
            AI Innovation Lab
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Next-generation legal technology solutions powered by artificial intelligence
          </p>
        </div>
      </section>

      {/* Solutions Overview - Cascading Cards */}
      <section className="flex items-center justify-center p-8 min-h-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <CascadingCard 
                key={index}
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features - Expanding Cards */}
      <section className="flex items-center justify-center p-8 min-h-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Explore Our Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <ExpandingCard 
                key={index}
                title={solution.title}
                description={solution.description}
                features={solution.features}
                icon={solution.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="flex items-center justify-center p-8 min-h-full bg-gradient-to-br from-purple-900/10 to-teal-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Impact & Performance
          </h2>
          <AnimatedStats />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="flex items-center justify-center p-8 min-h-full">
        <CallToAction />
      </section>
    </SlideLayout>
  );
}