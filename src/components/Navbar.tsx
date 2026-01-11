import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
    setIsMenuOpen(false);
  };

  const languages = [
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-slate-800 hover:text-blue-600 transition">
            AI w Zakupach
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-blue-500 transition">
              {t('nav.about')}
            </Link>
            <Link to="/kurs" className="text-slate-600 hover:text-blue-500 transition">
              {t('nav.course')}
            </Link>
            <Link to="/warsztaty" className="text-slate-600 hover:text-blue-500 transition">
              {t('nav.workshops')}
            </Link>
            <Link to="/prompty" className="text-slate-600 hover:text-blue-500 transition">
              {t('nav.prompts')}
            </Link>
            <Link to="/kontakt" className="text-slate-600 hover:text-blue-500 transition">
              {t('nav.contact')}
            </Link>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 text-slate-600 hover:text-blue-500 transition"
              >
                <Globe className="w-5 h-5" />
                <span>{currentLang.flag}</span>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-slate-200 py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-2"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/kontakt"
              className="bg-slate-800 text-white px-5 py-2 rounded-lg font-medium hover:bg-slate-700 transition"
            >
              {t('hero.cta')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-600 hover:text-blue-500"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-600 hover:text-blue-500 transition"
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/kurs"
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-600 hover:text-blue-500 transition"
              >
                {t('nav.course')}
              </Link>
              <Link
                to="/warsztaty"
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-600 hover:text-blue-500 transition"
              >
                {t('nav.workshops')}
              </Link>
              <Link
                to="/prompty"
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-600 hover:text-blue-500 transition"
              >
                {t('nav.prompts')}
              </Link>
              <Link
                to="/kontakt"
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-600 hover:text-blue-500 transition"
              >
                {t('nav.contact')}
              </Link>

              {/* Mobile Language Switcher */}
              <div className="border-t border-slate-200 pt-4">
                <p className="text-sm text-slate-500 mb-2">Language</p>
                <div className="flex gap-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`px-3 py-1 rounded ${
                        i18n.language === lang.code
                          ? 'bg-blue-500 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {lang.flag} {lang.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <Link
                to="/kontakt"
                onClick={() => setIsMenuOpen(false)}
                className="bg-slate-800 text-white px-5 py-2 rounded-lg font-medium hover:bg-slate-700 transition text-center"
              >
                {t('hero.cta')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
