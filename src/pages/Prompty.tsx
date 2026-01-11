import { useTranslation } from 'react-i18next';
import { Gift, Clock } from 'lucide-react';

export default function Prompty() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Clock className="w-4 h-4" />
              {t('prompts.subtitle')}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
              {t('prompts.title')}
            </h1>

            <p className="text-xl text-slate-600 mb-12">
              {t('prompts.description')}
            </p>

            {/* Coming Soon Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-12 max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 p-6 rounded-full">
                  <Gift className="w-16 h-16 text-blue-600" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Wkrótce dostępne!
              </h2>

              <p className="text-slate-600 text-lg mb-8">
                {t('prompts.comingSoon')}
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-blue-900 font-semibold mb-2">
                  Co znajdziesz w pakiecie?
                </p>
                <ul className="text-left text-blue-800 space-y-2">
                  <li>• Ekstrakcja danych z ofert handlowych</li>
                  <li>• Analiza umów i warunków</li>
                  <li>• Przygotowanie zestawień porównawczych</li>
                  <li>• Generowanie raportów oszczędności</li>
                  <li>• Negocjacje i komunikacja z dostawcami</li>
                </ul>
              </div>
            </div>

            {/* CTA to Course */}
            <div className="mt-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">
                Nie chcesz czekać?
              </h3>
              <p className="text-blue-100 mb-6">
                Sprawdź nasz kurs online - zawiera bibliotekę gotowych promptów!
              </p>
              <a
                href="/kurs"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Zobacz Kurs Online →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
