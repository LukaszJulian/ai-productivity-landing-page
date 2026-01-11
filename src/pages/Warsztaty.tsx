import { useTranslation } from 'react-i18next';
import { Users, UserCircle, Check, ShieldCheck, Calendar } from 'lucide-react';

export default function Warsztaty() {
  const { t } = useTranslation();

  const teamFeatures = [
    'Dostosowane do Twojej branży',
    'Praktyczne warsztaty hands-on',
    'Wsparcie po szkoleniu',
    'Format elastyczny: on-site, zdalny lub hybrydowy',
  ];

  const executiveFeatures = [
    '100% personalizowane',
    'Elastyczny harmonogram',
    'Poufne środowisko',
    'Strategiczne fokus',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
              Szkolenia Dedykowane
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
              {t('workshops.title')}
            </h1>
            <p className="text-lg text-slate-600">
              Programy strukturalne dla wdrożenia AI w całych działach lub indywidualny coaching dla kadry kierowniczej. Obie opcje zawierają praktyczne workflow, ramy pomiarowe i wsparcie po szkoleniu.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Team Training Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">{t('workshops.team.title')}</h3>
                </div>
                <p className="text-blue-100">{t('workshops.team.tagline')}</p>
              </div>

              <div className="p-8">
                <p className="text-slate-600 mb-6">{t('workshops.team.desc')}</p>

                <div className="space-y-4 mb-8">
                  {teamFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-1">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <p className="text-slate-700">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-slate-800 mb-2">
                      {t('workshops.team.price')}
                    </div>
                    <p className="text-sm text-slate-600">{t('workshops.team.priceDetails')}</p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <p className="text-sm text-green-800 flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Gwarancja 50% zwrotu:</strong> Jeśli Twój zespół nie zaoszczędzi minimum 5 godzin/tydzień na uczestnika w ciągu 60 dni, zwracamy połowę inwestycji.
                      </span>
                    </p>
                  </div>

                  <p className="text-sm text-slate-500 mb-4">
                    <strong>Idealne dla:</strong> Zespoły HR, Marketing, Operacje, Finanse oraz działy cross-funkcjonalne
                  </p>

                  <a
                    href="/kontakt"
                    className="block w-full bg-blue-500 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                  >
                    {t('workshops.team.cta')}
                  </a>
                </div>
              </div>
            </div>

            {/* Executive Coaching Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <UserCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">{t('workshops.executive.title')}</h3>
                </div>
                <p className="text-teal-100">{t('workshops.executive.tagline')}</p>
              </div>

              <div className="p-8">
                <p className="text-slate-600 mb-6">{t('workshops.executive.desc')}</p>

                <div className="space-y-4 mb-8">
                  {executiveFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-teal-100 p-1 rounded-full mt-1">
                        <Check className="w-4 h-4 text-teal-600" />
                      </div>
                      <p className="text-slate-700">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-slate-800 mb-2">
                      {t('workshops.executive.price')}
                    </div>
                    <p className="text-sm text-slate-600">{t('workshops.executive.priceDetails')}</p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <p className="text-sm text-green-800 flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Gwarancja pierwszej sesji:</strong> Zwrot 50% dostępny po pierwszej sesji, jeśli cele i podejście nie odpowiadają Twoim wymaganiom.
                      </span>
                    </p>
                  </div>

                  <p className="text-sm text-slate-500 mb-4">
                    <strong>Idealne dla:</strong> Kadra kierownicza C-level, Dyrektorzy, Senior Managerowie oraz niezależni profesjonaliści
                  </p>

                  <a
                    href="https://calendar.app.google/n1fxohs2CJfJ8yut5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-teal-500 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition"
                  >
                    {t('workshops.executive.cta')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-slate-50 rounded-xl p-8 shadow-lg max-w-3xl mx-auto border border-slate-200">
            <h3 className="text-2xl font-bold mb-3">Nie jesteś pewien, która opcja jest odpowiednia?</h3>
            <p className="text-slate-600 mb-6">
              Porozmawiajmy o Twoich specyficznych potrzebach i znajdźmy idealne rozwiązanie szkoleniowe AI dla Ciebie lub Twojej organizacji.
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition"
            >
              <Calendar className="w-5 h-5" />
              Umów rozmowę konsultacyjną
            </a>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Czego się nauczysz?
              </h2>
              <p className="text-lg text-slate-600">
                Program szkolenia obejmuje praktyczne zastosowania AI w codziennej pracy
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold text-slate-900 mb-2">Fundamenty AI</h3>
                <p className="text-slate-600 text-sm">
                  Zrozumienie koncepcji personal AI, prompt engineering i ekosystemu narzędzi
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-slate-900 mb-2">Praktyczne Zastosowania</h3>
                <p className="text-slate-600 text-sm">
                  Konkretne use case z Twojego środowiska biznesowego
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-bold text-slate-900 mb-2">Pomiar Efektów</h3>
                <p className="text-slate-600 text-sm">
                  Frameworki do śledzenia time savings i ROI z implementacji AI
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-bold text-slate-900 mb-2">Współpraca</h3>
                <p className="text-slate-600 text-sm">
                  Jak dzielić się promptami i najlepszymi praktykami w zespole
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-bold text-slate-900 mb-2">Bezpieczeństwo</h3>
                <p className="text-slate-600 text-sm">
                  Polityki bezpieczeństwa i best practices przy używaniu AI
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-bold text-slate-900 mb-2">Skalowanie</h3>
                <p className="text-slate-600 text-sm">
                  Strategia długoterminowego wdrożenia AI w organizacji
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Zaufali mi
            </h2>
            <p className="text-lg text-slate-600 mb-12">
              20+ lat doświadczenia w zakupach strategicznych
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-1">20+</div>
                <div className="text-slate-600">lat doświadczenia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-1">3</div>
                <div className="text-slate-600">duże korporacje</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-1">100+</div>
                <div className="text-slate-600">przeszkolonych osób</div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-8 flex-wrap opacity-60">
              <span className="text-2xl font-bold text-slate-700">Allegro</span>
              <span className="text-2xl font-bold text-slate-700">Bosch</span>
              <span className="text-2xl font-bold text-slate-700">Orange</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
