import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, UserCircle, ArrowRight, Star, Clock, Award } from 'lucide-react';

export default function Index() {
  const { t } = useTranslation();

  const products = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: 'Kurs Online',
      subtitle: 'AI-owy Survival Kit',
      description: 'Praktyczny kurs micro-learningowy. 50 minut wiedzy, która zaoszczędzi Ci godziny pracy.',
      price: '149 PLN',
      oldPrice: '299 PLN',
      features: ['6 lekcji wideo', 'Biblioteka promptów', 'Certyfikat', 'Dostęp lifetime'],
      link: '/kurs',
      cta: 'Zobacz Kurs',
      badge: 'Bestseller',
      color: 'blue',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Warsztaty Firmowe',
      subtitle: 'Szkolenia zespołowe',
      description: '8-tygodniowy program wdrożeniowy dla zespołów 5-50+ osób. Hands-on training z mierzalnymi rezultatami.',
      price: '€2,400',
      oldPrice: null,
      features: ['16h live training', 'Dostosowane do branży', 'Wsparcie 90 dni', 'On-site/zdalnie'],
      link: '/warsztaty',
      cta: 'Zapytaj o Ofertę',
      badge: 'Dla firm',
      color: 'blue',
    },
    {
      icon: <UserCircle className="w-12 h-12" />,
      title: 'Coaching 1:1',
      subtitle: 'Executive coaching',
      description: 'Spersonalizowany coaching dla kadry kierowniczej. 100% dopasowane do Twoich celów i wyzwań.',
      price: '€800',
      oldPrice: null,
      features: ['Sesje 1:1', 'Elastyczny harmonogram', 'Strategiczny fokus', 'Minimum 4 sesje'],
      link: '/warsztaty#executive',
      cta: 'Umów Sesję',
      badge: 'Premium',
      color: 'teal',
    },
  ];

  const tools = [
    { name: 'ChatGPT', logo: '/chatgpt-logo.png' },
    { name: 'Claude', logo: '/claude_logo.png' },
    { name: 'Gemini', logo: '/gemini-color.png' },
    { name: 'Copilot', logo: '/copilot_Icon.png' },
    { name: 'NotebookLM', logo: '/notebooklm-logo.png' },
    { name: 'Google AI Studio', logo: '/Google_ai_studio_logo.png' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-blue-500/30 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {t('hero.tag')}
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-12">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kurs"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Zobacz Kurs Online
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/kontakt"
                className="bg-blue-500/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500/30 transition inline-flex items-center justify-center gap-2"
              >
                Skontaktuj się
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">20+</div>
                <div className="text-blue-200 text-sm">lat doświadczenia</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">10+</div>
                <div className="text-blue-200 text-sm">godzin oszczędności</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">6+</div>
                <div className="text-blue-200 text-sm">narzędzi AI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-blue-200 text-sm">zadowolonych uczestników</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
              {t('offerings.tag')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('offerings.title')}
            </h2>
            <p className="text-lg text-slate-600">
              {t('offerings.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${product.color === 'blue' ? 'from-blue-500 to-blue-600' : 'from-teal-500 to-teal-600'} p-6 text-white relative`}>
                  {product.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                        {product.badge}
                      </span>
                    </div>
                  )}
                  <div className={`${product.color === 'blue' ? 'bg-blue-400/30' : 'bg-teal-400/30'} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{product.title}</h3>
                  <p className={`${product.color === 'blue' ? 'text-blue-100' : 'text-teal-100'} text-sm`}>
                    {product.subtitle}
                  </p>
                </div>

                {/* Body */}
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-slate-600 mb-6">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className={`${product.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-teal-100 text-teal-600'} rounded-full p-0.5`}>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="mb-4 pb-4 border-b border-slate-200">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-slate-900">{product.price}</span>
                        {product.oldPrice && (
                          <span className="text-lg line-through text-slate-400">{product.oldPrice}</span>
                        )}
                      </div>
                    </div>

                    <Link
                      to={product.link}
                      className={`block w-full ${product.color === 'blue' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-teal-500 hover:bg-teal-600'} text-white text-center px-6 py-3 rounded-lg font-semibold transition`}
                    >
                      {product.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Narzędzia AI, których nauczysz się używać
            </h2>
            <p className="text-lg text-slate-600">
              Praktyczne szkolenie z najpopularniejszych i najskuteczniejszych narzędzi AI
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 max-w-5xl mx-auto items-center">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition group"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-12 object-contain mb-3 group-hover:scale-110 transition"
                />
                <span className="text-sm font-medium text-slate-600">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/trainer-photo.jpg"
                  alt="Łukasz Ostrowski"
                  className="rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>

              <div>
                <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
                  O prowadzącym
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Łukasz Ostrowski
                </h2>
                <p className="text-lg text-slate-700 mb-6">
                  20 lat doświadczenia w zakupach strategicznych w największych korporacjach: Allegro, Bosch, Orange.
                </p>
                <p className="text-slate-600 mb-6">
                  Nie uczę teorii - uczę systemów, które działają w korporacyjnej praktyce. Jeśli szukasz konkretnych narzędzi i metod, które możesz zastosować już dziś, jesteś we właściwym miejscu.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    20+ lat w zakupach
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    100+ przeszkolonych
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Praktyczne podejście
                  </span>
                </div>

                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition"
                >
                  Skontaktuj się
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gotowy zaoszczędzić 10+ godzin tygodniowo?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Dołącz do profesjonalistów, którzy wykorzystują AI do automatyzacji swojej pracy
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kurs"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition shadow-xl inline-flex items-center justify-center gap-2"
              >
                Kup Kurs za 149 PLN
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/warsztaty"
                className="bg-blue-500/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500/30 transition inline-flex items-center justify-center gap-2"
              >
                Warsztaty Firmowe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
