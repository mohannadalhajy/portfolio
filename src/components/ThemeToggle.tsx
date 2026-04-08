"use client";

import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-zinc-800/50 focus:outline-none focus:ring-2 focus:ring-zinc-700/50 dark:border-zinc-800/50 dark:bg-zinc-900/50 dark:hover:bg-zinc-800/50 light:border-zinc-200/50 light:bg-zinc-100/50 light:hover:bg-zinc-200/50"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{ 
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Moon className="w-4 h-4 text-zinc-300 dark:text-zinc-300 light:text-zinc-600" />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{ 
          rotate: theme === 'light' ? 0 : -180,
          scale: theme === 'light' ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Sun className="w-4 h-4 text-yellow-400 dark:text-yellow-400 light:text-orange-500" />
      </motion.div>
    </motion.button>
  );
}
