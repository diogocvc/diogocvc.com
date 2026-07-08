import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isPt = location.pathname.startsWith('/br');

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

  const toggleLocale = () => {
    const newPath = isPt
      ? location.pathname.replace(/^\/br/, '') || '/'
      : `/br${location.pathname}`;
    window.location.href = newPath;
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
          <button
            onClick={toggleLocale}
            className="text-sm hover:opacity-60 transition-opacity font-medium"
          >
            {isPt ? 'EN' : 'PT'}
          </button>
          <Button
            variant="accent"
            onClick={handleContactClick}
            className="rounded-full px-6 py-3 text-sm"
          >
            {isPt ? 'Contato' : 'Contact'}
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
