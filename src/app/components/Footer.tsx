import { motion } from 'motion/react';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = 'diogocvc@gmail.com';
    const textarea = document.createElement('textarea');
    textarea.value = email;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    } finally {
      document.body.removeChild(textarea);
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Available for freelance, long-term projects and full-time opportunities
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-white/50 text-sm mb-2">Email</p>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:diogocvc@gmail.com"
                  className="text-xl hover:opacity-70 transition-opacity"
                >
                  diogocvc@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <p className="text-white/50 text-sm mb-3">Connect</p>
              <div className="flex flex-wrap gap-6">
                <a
                  href="https://www.linkedin.com/in/diogocvc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:opacity-70 transition-opacity"
                >
                  LinkedIn
                </a>
                <a
                  href="https://diogocvc.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:opacity-70 transition-opacity"
                >
                  Substack
                </a>
                <a
                  href="https://www.behance.net/diogocvc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:opacity-70 transition-opacity"
                >
                  Behance
                </a>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Diogo Carvalho. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
