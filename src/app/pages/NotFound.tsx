import { Link } from 'react-router';
import { motion } from 'motion/react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-8xl md:text-9xl">404</h1>
        <p className="text-2xl md:text-3xl text-black/60">Page not found</p>
        <Link
          to="/"
          className="inline-block bg-[#030213] text-white px-8 py-4 rounded-full hover:bg-[#030213]/90 transition-all duration-300"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
