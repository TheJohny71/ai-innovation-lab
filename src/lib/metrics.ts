// src/lib/metrics.ts

// Static metrics for the Disruption dashboard
export const metrics = {
    // Key statistics
    totalInitiatives: 125,
    globalDeployments: 42,
    activeProjects: 83,
    launches2024: 15,
  
    // Implementation categories data
    implementationTypes: [
      { name: 'Document Analysis', count: 45 },
      { name: 'Legal Research', count: 32 },
      { name: 'Contract Management', count: 28 },
      { name: 'Case Prediction', count: 20 },
    ],
  
    // Deployment status breakdown
    deploymentStatus: {
      active: 83,
      pending: 27,
      planned: 15
    }
  } as const;
  
  // Types for type safety
  export type Metrics = typeof metrics;
  export type ImplementationType = typeof metrics.implementationTypes[number];