import { useTranslation } from 'react-i18next';
import { Check, Clock, Download, Award, ShieldCheck, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';

export default function Kurs() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Schema.org Course markup
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'AI-owy Survival Kit Kupca',
    description: 'Praktyczny kurs micro-learningowy AI dla profesjonalistów zakupowych. 50 minut kursu, które zaoszczędzą Ci godziny pracy.',
    provider: {
      '@type': 'Organization',
      name: 'AI w Zakupach',
      sameAs: 'https://aiwzakupach.pl',
    },
    instructor: {
      '@type': 'Person',
      name: 'Łukasz Ostrowski',
      description: '20 lat doświadczenia w zakupach strategicznych (Allegro, Bosch, Orange)',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT50M',
    },
    offers: {
      '@type': 'Offer',
      price: '149',
      priceCurrency: 'PLN',
      availability: 'https://schema.org/InStock',
      url: 'https://easl.ink/29qLY',
    },
  };

  const benefits = [
    {
      icon: '⚡',
      title: t('course.benefits.extraction.title'),
      description: t('course.benefits.extraction.desc'),
    },
    {
      icon: '🔍',
      title: t('course.benefits.auditor.title'),
      description: t('course.benefits.auditor.desc'),
    },
    {
      icon: '🎯',
      title: t('course.benefits.framework.title'),
      description: t('course.benefits.framework.desc'),
    },
    {
      icon: '💰',
      title: t('course.benefits.calculator.title'),
      description: t('course.benefits.calculator.desc'),
    },
  ];

  const lessons = [
    {
      number: 1,
      title: 'Wprowadzenie do AI w Zakupach',
      duration: '8 min',
      description: 'Podstawy wykorzystania AI w codziennej pracy kupca. Przegląd narzędzi i możliwości.',
    },
    {
      number: 2,
      title: 'Framework RTCFC - Pisanie Skutecznych Promptów',
      duration: '12 min',
      description: 'Metodyka tworzenia promptów, które dają konkretne, użyteczne wyniki.',
    },
    {
      number: 3,
      title: 'Ekstrakcja Danych z Ofert (60s)',
      duration: '10 min',
      description: 'Jak zamienić stos PDF-ów w uporządkowaną tabelę porównawczą w minutę.',
    },
    {
      number: 4,
      title: 'Audytor Umów - Wykrywanie Ryzyk',
      duration: '9 min',
      description: 'Wykorzystanie AI do identyfikacji klauzul waloryzacyjnych i "haczyków" w umowach.',
    },
    {
      number: 5,
      title: 'Kalkulator TCO i Analiza Kosztów',
      duration: '8 min',
      description: 'Szybkie wyliczanie Total Cost of Ownership i analiza opłacalności.',
    },
    {
      number: 6,
      title: 'Konfiguracja Agenta AI + Prompt Library',
      duration: '7 min',
      description: 'Tworzenie własnego asystenta AI + gotowa biblioteka promptów do wykorzystania.',
    },
  ];

  const faqs = [
    {
      question: 'Dla kogo jest ten kurs?',
      answer: 'Kurs jest idealny dla kupców, specjalistów zakupowych, menedżerów kategorii oraz wszystkich osób pracujących w działach zakupów, które chcą zaoszczędzić czas dzięki AI.',
    },
    {
      question: 'Czy potrzebuję zaawansowanej wiedzy technicznej?',
      answer: 'Nie! Kurs jest zaprojektowany dla osób bez technicznego background-u. Wszystko wyjaśniamy krok po kroku.',
    },
    {
      question: 'Jak długo mam dostęp do kursu?',
      answer: 'Po zakupie otrzymujesz dożywotni dostęp do wszystkich materiałów kursu oraz przyszłych aktualizacji.',
    },
    {
      question: 'Czy otrzymam certyfikat?',
      answer: 'Tak, po ukończeniu kursu otrzymasz certyfikat potwierdzający zdobyte kompetencje.',
    },
    {
      question: 'Co jeśli kurs mi nie pomoże?',
      answer: 'Oferujemy gwarancję zwrotu pieniędzy: jeśli nie zaoszczędzisz przynajmniej godziny pracy w pierwszym tygodniu, zwracamy 100% wpłaty.',
    },
    {
      question: 'Jakie narzędzia AI są omawiane?',
      answer: 'Kurs koncentruje się na ChatGPT i Claude, ale pokazujemy również inne narzędzia jak Gemini, NotebookLM i specjalistyczne agenty AI.',
    },
  ];

  return (
    <>
      <SEO
        title="Kurs AI dla Zakupów - AI-owy Survival Kit Kupca | 149 PLN"
        description="Praktyczny kurs micro-learningowy AI dla kupców. 50 minut kursu, które zaoszczędzą Ci godziny pracy. Ekstrakcja ofert, audytor umów, framework RTCFC. Gwarancja zwrotu."
        canonical="https://aiwzakupach.pl/kurs"
        schemaData={courseSchema}
      />
      <div className="bg-white">
        {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-500/30 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {t('course.tagline')}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t('course.title')}
            </h1>

            <p className="text-2xl md:text-3xl text-blue-100 mb-8">
              {t('course.subtitle')}
            </p>

            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              {t('course.description')}
            </p>

            {/* Key Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-blue-300" />
                <span className="text-lg font-semibold">{t('course.duration')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-6 h-6 text-blue-300" />
                <span className="text-lg font-semibold">Biblioteka promptów PDF</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-blue-300" />
                <span className="text-lg font-semibold">Certyfikat ukończenia</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://easl.ink/29qLY"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center gap-2"
              >
                {t('course.cta')} - {t('course.price')}
                <span className="text-sm line-through text-slate-400">{t('course.oldPrice')}</span>
              </a>
            </div>

            {/* Guarantee Badge */}
            <div className="mt-8 inline-flex items-start gap-3 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-lg p-4 text-left max-w-2xl">
              <ShieldCheck className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-green-100 mb-1">Gwarancja satysfakcji</p>
                <p className="text-sm text-green-200">{t('course.guarantee')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('course.benefits.title')}
            </h2>
            <p className="text-xl text-slate-600">
              Konkretne narzędzia i techniki, które zastosujesz od razu
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Program Kursu
            </h2>
            <p className="text-xl text-slate-600">
              6 lekcji wideo + materiały do pobrania
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {lessons.map((lesson) => (
              <div
                key={lesson.number}
                className="bg-slate-50 rounded-xl border border-slate-200 p-6 hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {lesson.number}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-slate-900">{lesson.title}</h3>
                      <span className="text-sm text-slate-500 flex items-center gap-1 flex-shrink-0 ml-4">
                        <Clock className="w-4 h-4" />
                        {lesson.duration}
                      </span>
                    </div>
                    <p className="text-slate-600">{lesson.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t('course.includes.title')}
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <Check className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">
                      {t('course.includes.videos')}
                    </h3>
                    <p className="text-slate-600">
                      Praktyczne video tutoriale z konkretnymi przykładami z zakupów
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <Check className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">
                      {t('course.includes.prompts')}
                    </h3>
                    <p className="text-slate-600">
                      Gotowe szablony promptów do ekstrakcji, analizy umów, negocjacji i więcej
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <Check className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">
                      {t('course.includes.agent')}
                    </h3>
                    <p className="text-slate-600">
                      Krok po kroku setup Twojego własnego AI Procurement Assistanta
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <Check className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">
                      {t('course.includes.certificate')}
                    </h3>
                    <p className="text-slate-600">
                      Dokument poświadczający ukończenie szkolenia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <Check className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">
                      Dożywotni dostęp
                    </h3>
                    <p className="text-slate-600">
                      Wszystkie przyszłe aktualizacje i nowe materiały bez dodatkowych opłat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t('course.trainer.title')}
              </h2>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                  src="/trainer-photo.jpg"
                  alt={t('course.trainer.name')}
                  className="w-48 h-48 rounded-full border-4 border-white shadow-xl object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {t('course.trainer.name')}
                  </h3>
                  <p className="text-lg text-slate-700 mb-4">
                    {t('course.trainer.bio')}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Allegro
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Bosch
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Orange
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      20+ lat doświadczenia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Najczęściej zadawane pytania
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition"
                  >
                    <span className="font-bold text-slate-900 pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Zacznij oszczędzać czas już dziś
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Dołącz do kupców, którzy wykorzystują AI do automatyzacji swojej pracy
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8 inline-block">
              <div className="flex items-baseline gap-2 justify-center">
                <span className="text-5xl font-bold">{t('course.price')}</span>
                <span className="text-2xl line-through text-blue-300">{t('course.oldPrice')}</span>
              </div>
              <p className="text-blue-100 mt-2">Oferta promocyjna - 50% taniej</p>
            </div>

            <div>
              <a
                href="https://easl.ink/29qLY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-12 py-4 rounded-lg font-bold text-xl hover:bg-blue-50 transition shadow-2xl hover:scale-105 transform"
              >
                {t('course.cta')} →
              </a>
            </div>

            <p className="mt-8 text-blue-200 text-sm">
              ✓ Dożywotni dostęp &nbsp;&nbsp; ✓ Gwarancja zwrotu &nbsp;&nbsp; ✓ Certyfikat
            </p>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
