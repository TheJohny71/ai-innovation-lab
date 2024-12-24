"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Zap,
  Lightbulb,
  Command,
  Database,
  Search,
} from "lucide-react";
import ParticleCanvas from "../ui/ParticleCanvas";
import AnimatedStats from "./AnimatedStats";
import ExpandingCard from "../cards/ExpandingCard";
import CascadingCard from "../cards/CascadingCard";

const colorSchemes = {
  primary: "from-purple-400 via-cyan-400 to-emerald-400",
  secondary: "from-emerald-500 to-emerald-700",
  cardBg: "bg-slate-800/50",
  cardBorder: "border-slate-700/50",
};

export default function PresentationDeck() {
  const [activePage, setActivePage] = useState("Welcome");
  const [expandedApp, setExpandedApp] = useState<string | null>(null);

  // The order of pages for Navigation
  const pages = ["Welcome", "Solutions", "Impact", "Apps"];

  /**
   * NOTE:
   * Every single metric value is now a string—no question marks, no undefined.
   */
  const apps = [
    {
      id: "ai-analysis",
      title: "AI Analysis",
      subtitle: "Enhanced Legal Research",
      description:
        "Advanced AI-powered legal document analysis and research assistance.",
      icon: Command,
      color: "text-purple-400",
      features: ["Natural Language Processing", "Citation Checking", "Key Fact Extraction"],
      metrics: {
        timeReduction: "40%",
        accuracyRate: "85%",
        // Add defaults for any other metrics you plan on using
        processingSpeed: "N/A",       // => It's a string
        dataAccuracy: "N/A",         // => It's a string
        predictionAccuracy: "N/A",   // => It's a string
        reportingEfficiency: "N/A",  // => It's a string
      },
    },
    {
      id: "data-integration",
      title: "Data Integration",
      subtitle: "Unified Data Platform",
      description: "Seamless integration with existing legal databases and systems.",
      icon: Database,
      color: "text-cyan-400",
      features: ["Real-time Sync", "Data Validation", "API Integration"],
      // IMPORTANT: All assigned string values
      metrics: {
        timeReduction: "N/A",       
        accuracyRate: "N/A",
        processingSpeed: "60%",      // => No question mark
        dataAccuracy: "95%",         // => Must be string
        predictionAccuracy: "N/A",
        reportingEfficiency: "N/A",
      },
    },
    {
      id: "analytics",
      title: "Analytics",
      subtitle: "Insights & Reporting",
      description: "Data-driven insights and customizable reporting.",
      icon: Search,
      color: "text-rose-400",
      features: ["Predictive Analytics", "Custom Dashboards", "Trend Analysis"],
      // Again, everything is a string
      metrics: {
        timeReduction: "N/A",
        accuracyRate: "N/A",
        processingSpeed: "N/A",
        dataAccuracy: "N/A",
        predictionAccuracy: "85%",
        reportingEfficiency: "75%",
      },
    },
  ];

  /**
   * Basic Navigation (left-right) for the deck
   */
  const Navigation = () => (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setActivePage(pages[pages.indexOf(activePage) - 1])}
        disabled={pages.indexOf(activePage) === 0}
        className="p-2 text-slate-500 hover:text-slate-400 transition-colors disabled:opacity-50"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition-colors ${
              activePage === page
                ? "bg-emerald-500 text-white"
                : "text-slate-500"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => setActivePage(pages[pages.indexOf(activePage) + 1])}
        disabled={pages.indexOf(activePage) === pages.length - 1}
        className="p-2 text-slate-500 hover:text-slate-400 transition-colors disabled:opacity-50"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );

  /**
   * "Welcome" page
   */
  const renderWelcome = () => (
    <div className="flex-1 flex flex-col items-center justify-center px-16 relative z-10">
      <h1
        className={`text-5xl font-bold mb-16 bg-gradient-to-r ${colorSchemes.primary} text-transparent bg-clip-text`}
      >
        AI Innovation Lab
      </h1>
      <p className="text-xl text-slate-300 text-center mb-16">
        Disrupting the legal industry through human-centered AI
      </p>

      <div className="relative w-full max-w-6xl">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <div className="grid grid-cols-3 gap-8">
          {[
            {
              title: "Enhanced Client Service",
              description: "Elevating client experience through AI",
              icon: Shield,
              color: "text-purple-400",
            },
            {
              title: "Accelerated Workflows",
              description: "Streamlining legal processes with automation",
              icon: Zap,
              color: "text-cyan-400",
            },
            {
              title: "Practice Innovation",
              description: "Leading-edge legal tech solutions",
              icon: Lightbulb,
              color: "text-emerald-400",
            },
          ].map((card) => (
            <CascadingCard
              key={card.title}
              title={card.title}
              description={card.description}
              Icon={card.icon}
              color={card.color}
            />
          ))}
        </div>
      </div>
    </div>
  );

  /**
   * "Solutions" page - showing a grid of ExpandingCards
   */
  const renderSolutions = () => (
    <div className="flex-1 flex flex-col px-16 relative z-10">
      <div className="h-20 flex justify-center items-center">
        <Navigation />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-white mb-16">
          Integrated Solutions
        </h2>
        <div className="grid grid-cols-3 gap-8 max-w-6xl">
          {apps.map((app) => (
            <ExpandingCard key={app.id} {...app} />
          ))}
        </div>
      </div>
    </div>
  );

  /**
   * "Impact" page - with AnimatedStats
   */
  const renderImpact = () => (
    <div className="flex-1 flex flex-col px-16 relative z-10">
      <div className="h-20 flex justify-center items-center">
        <Navigation />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-white mb-16">
          Real-World Impact
        </h2>
        <AnimatedStats />
      </div>
    </div>
  );

  /**
   * "Apps" page - expand only one at a time
   */
  const renderApps = () => (
    <div className="flex-1 flex flex-col px-16 relative z-10">
      <div className="h-20 flex justify-center items-center">
        <Navigation />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-white mb-16">
          Our Applications
        </h2>
        <div className="space-y-6 w-full max-w-6xl">
          {apps.map((app) => (
            <ExpandingCard
              key={app.id}
              {...app}
              isExpanded={expandedApp === app.id}
              onToggle={() =>
                setExpandedApp(expandedApp === app.id ? null : app.id)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      <ParticleCanvas />

      {/* Gradient orbs in the background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 bg-purple-500/30 -top-48 -left-48" />
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 bg-green-500/30 -bottom-48 -right-48" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {activePage === "Welcome" && renderWelcome()}
        {activePage === "Solutions" && renderSolutions()}
        {activePage === "Impact" && renderImpact()}
        {activePage === "Apps" && renderApps()}
      </div>
    </div>
  );
}
