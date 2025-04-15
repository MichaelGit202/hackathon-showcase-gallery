export interface Project {
  id: number;
  title: string;
  teamName: string;
  image: string;
  videoUrl?: string; // Make videoUrl optional since not all projects might have videos
  rank?: number;
  category: 'ai-gestures' | 'algorithmic-trading' | 'health-wellness';
}

export const projects: Project[] = [
  // AI Gestures Projects
  {
    id: 1,
    teamName: "Team 1",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    title: "Hand Motion Controller",
    category: "ai-gestures",
    rank: 1, // Gold
    videoUrl: "./src/data/vids/team7.mp4" // Local video file path
  },
  {
    id: 2,
    teamName: "Team 2",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=800",
    title: "Gesture Navigation System",
    category: "ai-gestures",
    rank: 2, // Silver
  },
  {
    id: 3,
    teamName: "Team 3",
    image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&q=80&w=800",
    title: "Sign Language Translator",
    category: "ai-gestures",
    rank: 3, // Bronze
  },
  {
    id: 4,
    teamName: "Team 4",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    title: "Virtual Reality Conductor",
    category: "ai-gestures",
  },
  {
    id: 5,
    teamName: "Team 5",
    image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&q=80&w=800",
    title: "Gesture Drawing Assistant",
    category: "ai-gestures",
  },
  {
    id: 6,
    teamName: "Team 6",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=800",
    title: "Motion Capture Interface",
    category: "ai-gestures",
  },
  
  // Algorithmic Trading Projects
  {
    id: 7,
    teamName: "Team 7",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    title: "Predictive Market Analyzer",
    category: "algorithmic-trading",
    rank: 1, // Gold
  },
  {
    id: 8,
    teamName: "Team 8",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800",
    title: "Sentiment-Based Trading Bot",
    category: "algorithmic-trading",
    rank: 2, // Silver
  },
  {
    id: 9,
    teamName: "Team 9",
    image: "https://images.unsplash.com/photo-1642543348745-337a2bf0b403?auto=format&fit=crop&q=80&w=800",
    title: "Multi-Asset Portfolio Optimizer",
    category: "algorithmic-trading",
    rank: 3, // Bronze
  },
  {
    id: 10,
    teamName: "Team 10",
    image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=800",
    title: "High-Frequency Trading System",
    category: "algorithmic-trading",
  },
  {
    id: 11,
    teamName: "Team 11",
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&q=80&w=800",
    title: "Risk Assessment Algorithm",
    category: "algorithmic-trading",
  },
  {
    id: 12,
    teamName: "Team 12",
    image: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&q=80&w=800",
    title: "Crypto Market Pattern Detector",
    category: "algorithmic-trading",
  },
  
  // Health & Wellness Projects
  {
    id: 13,
    teamName: "Team 13",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    title: "Mindfulness Meditation App",
    category: "health-wellness",
    rank: 1, // Gold
  },
  {
    id: 14,
    teamName: "Team 14",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    title: "Personalized Fitness Coach",
    category: "health-wellness",
    rank: 2, // Silver
  },
  {
    id: 15,
    teamName: "Team 15",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
    title: "Sleep Cycle Analyzer",
    category: "health-wellness",
    rank: 3, // Bronze
  },
  {
    id: 16,
    teamName: "Team 16",
    image: "https://images.unsplash.com/photo-1596116889035-735bbfcc9bf2?auto=format&fit=crop&q=80&w=800",
    title: "Nutrition Tracking System",
    category: "health-wellness",
  },
  {
    id: 17,
    teamName: "Team 17",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=800",
    title: "Mental Health Check-in Tool",
    category: "health-wellness",
  },
  {
    id: 18,
    teamName: "Team 18",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=800",
    title: "Hydration Reminder App",
    category: "health-wellness",
  },
];
