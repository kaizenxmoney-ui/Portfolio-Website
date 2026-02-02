// Added React import to resolve 'Cannot find namespace React' error on React.ReactNode
import React from 'react';

export interface VideoProject {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  metrics?: string;
  thumbnail: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  title: string;
  description: string;
}
