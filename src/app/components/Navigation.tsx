import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-6 flex items-center justify-between">
        <Link to="/" className="font-medium tracking-tight hover:opacity-60 transition-opacity">
          Diogo Carvalho
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/about"
            className="text-sm hover:opacity-60 transition-opacity"
          >
            About
          </Link>
          <button
            onClick={handleContactClick}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm hover:opacity-90 transition-all duration-300"
          >
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
