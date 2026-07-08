import { Link, useLocation } from 'react-router';

export function NotFound() {
  const location = useLocation();
  const isPt = location.pathname.startsWith('/br');
  const linkPrefix = isPt ? '/br' : '';

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-8xl md:text-9xl font-medium tracking-tight mb-6">404</h1>
        <p className="text-2xl text-foreground/60 mb-8">
          {isPt ? 'Página não encontrada' : 'Page not found'}
        </p>
        <Link
          to={linkPrefix || '/'}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300"
        >
          {isPt ? 'Voltar ao início' : 'Return to home'}
        </Link>
      </div>
    </div>
  );
}
