import { motion } from 'motion/react';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'react-router';

export function Footer() {
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const isPt = location.pathname.startsWith('/br');

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
    <footer className="bg-card text-card-foreground border-t border-border py-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="text-h1 max-w-4xl">
            {isPt
              ? 'Disponível para freelances, projetos de longo prazo e oportunidades em tempo integral'
              : 'Available for freelance, long-term projects and full-time opportunities'}
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-small text-muted-foreground mb-2">{isPt ? 'Email' : 'Email'}</p>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:diogocvc@gmail.com"
                  className="text-h4 text-accent hover:opacity-70 transition-opacity"
                >
                  diogocvc@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-accent hover:bg-muted rounded-lg transition-colors"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-accent" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <p className="text-small text-muted-foreground mb-3">{isPt ? 'Conecte-se' : 'Connect'}</p>
              <div className="flex flex-wrap gap-6">
                <a
                  href="https://www.linkedin.com/in/diogocvc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small text-accent hover:opacity-70 transition-opacity"
                >
                  LinkedIn
                </a>
                <a
                  href="https://diogocvc.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small text-accent hover:opacity-70 transition-opacity"
                >
                  Substack
                </a>
                <a
                  href="https://www.behance.net/diogocvc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small text-accent hover:opacity-70 transition-opacity"
                >
                  Behance
                </a>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-border text-muted-foreground text-small">
            {isPt
              ? `© ${new Date().getFullYear()} Diogo Carvalho. Todos os direitos reservados.`
              : `© ${new Date().getFullYear()} Diogo Carvalho. All rights reserved.`}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
