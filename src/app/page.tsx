'use client';
import { useState } from 'react';
import SlideLayout from './components/layout/SlideLayout';
import CascadingCard from './components/cards/CascadingCard';
import ContactForm from './components/layout/ContactForm';
import { Brain, Rocket, Zap } from 'lucide-react';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  const handleSectionChange = (index: number) => {
    setCurrentSection(index);
  };

  const solutions = [
    {
      title: "AI Strategy",
      description: "Develop comprehensive AI strategies tailored to your business goals",
      Icon: Brain
    },
    {
      title: "Innovation Lab",
      description: "Experiment with cutting-edge AI technologies in a controlled environment",
      Icon: Rocket
    },
    {
      title: "Quick Implementation",
      description: "Rapidly deploy AI solutions with our proven methodology",
      Icon: Zap
    }
  ];

  return (
    <SlideLayout onSectionChange={handleSectionChange}>
      {/* Hero Section */}
      <section className="flex items-center justify-center p-8 min-h-screen bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            AI Innovation Lab
          </h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Empowering businesses through innovative AI solutions
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="flex items-center justify-center p-8 min-h-screen bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <CascadingCard
                key={index}
                title={solution.title}
                description={solution.description}
                Icon={solution.Icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex items-center justify-center p-8 min-h-screen bg-gradient-to-br from-pink-900/20 to-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <ContactForm />
        </div>
      </section>
    </SlideLayout>
  );
}
