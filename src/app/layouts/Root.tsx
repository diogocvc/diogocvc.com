import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { LocaleProvider } from '../i18n/LocaleProvider';

export function Root() {
  return (
    <LocaleProvider>
      <div className="min-h-screen">
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </LocaleProvider>
  );
}
