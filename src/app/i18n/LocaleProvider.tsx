import { createContext, useContext, useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

interface LocaleContextType {
  locale: 'en' | 'pt-BR';
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'en',
  toggleLocale: () => {},
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const { i18n } = useTranslation();

  const isPt = location.pathname.startsWith('/br');
  const locale: 'en' | 'pt-BR' = isPt ? 'pt-BR' : 'en';

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);

  const toggleLocale = () => {
    const newPath = isPt
      ? location.pathname.replace(/^\/br/, '') || '/'
      : `/br${location.pathname}`;
    window.location.href = newPath;
  };

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
