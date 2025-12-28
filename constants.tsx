
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus OS Interface',
    description: 'A futuristic operating system dashboard with real-time data visualization.',
    tech: ['React', 'Three.js', 'Tailwind'],
    image: 'https://picsum.photos/seed/p1/600/400',
    github: '#'
  },
  {
    id: '2',
    title: 'Quantum Ledger',
    description: 'A decentralized finance tracking app with glassmorphism UI.',
    tech: ['TypeScript', 'Node.js', 'MongoDB'],
    image: 'https://picsum.photos/seed/p2/600/400',
    github: '#'
  },
  {
    id: '3',
    title: 'Cyber-Chat',
    description: 'Real-time encrypted messaging application with neon aesthetics.',
    tech: ['Socket.io', 'Express', 'React'],
    image: 'https://picsum.photos/seed/p3/600/400',
    github: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React.js', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Programming' },
  { name: 'Three.js', level: 70, category: 'Frontend' },
  { name: 'C++', level: 75, category: 'Programming' },
  { name: 'Python', level: 80, category: 'Programming' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'Git & GitHub', level: 85, category: 'Tools' },
  { name: 'Figma', level: 75, category: 'Tools' },
  { name: 'VS Code', level: 90, category: 'Tools' }
];
