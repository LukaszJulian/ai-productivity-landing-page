import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">AI w Zakupach</h3>
            <p className="text-slate-400 text-sm">
              Praktyczne szkolenia AI dla profesjonalistów zakupowych.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Szybkie linki</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/kurs" className="text-slate-400 hover:text-white transition">
                {t('nav.course')}
              </Link>
              <Link to="/warsztaty" className="text-slate-400 hover:text-white transition">
                {t('nav.workshops')}
              </Link>
              <Link to="/prompty" className="text-slate-400 hover:text-white transition">
                {t('nav.prompts')}
              </Link>
              <Link to="/kontakt" className="text-slate-400 hover:text-white transition">
                {t('nav.contact')}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <div className="flex flex-col space-y-2 text-slate-400 text-sm">
              <p>Łukasz Ostrowski</p>
              <p>Ekspert AI w Zakupach</p>
              <Link to="/kontakt" className="text-blue-400 hover:text-blue-300 transition">
                Skontaktuj się →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>
            © {currentYear} AI w Zakupach. {t('footer.rights')}.
          </p>
          <Link to="/polityka-prywatnosci" className="hover:text-slate-300 transition mt-4 md:mt-0">
            {t('footer.privacy')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
