
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Cpu, Briefcase, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={20} /> },
    { path: '/about', label: 'About', icon: <User size={20} /> },
    { path: '/skills', label: 'Skills', icon: <Cpu size={20} /> },
    { path: '/projects', label: 'Projects', icon: <Briefcase size={20} /> },
    { path: '/contact', label: 'Contact', icon: <Mail size={20} /> },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-fit">
      <div className="glass px-6 py-3 rounded-full flex items-center gap-8 border-cyan-500/20 shadow-lg shadow-cyan-500/5">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `relative flex items-center gap-2 text-sm font-medium transition-all duration-300 group
              ${isActive ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`
            }
          >
            {({ isActive }) => (
              <>
                <span className="hidden md:inline">{item.label}</span>
                <span className="md:hidden">{item.icon}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(0,251,255,0.8)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
