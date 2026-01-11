import { useTranslation } from 'react-i18next';
import { Mail, Linkedin, Calendar } from 'lucide-react';

export default function Kontakt() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                {t('contact.title')}
              </h1>
              <p className="text-xl text-slate-600">
                {t('contact.subtitle')}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Email */}
              <a
                href="mailto:kontakt@aiwzakupach.pl"
                className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-600 text-sm">
                  kontakt@aiwzakupach.pl
                </p>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/lukasz-ostrowski-procurement/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                  <Linkedin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">LinkedIn</h3>
                <p className="text-slate-600 text-sm">
                  Łukasz Ostrowski
                </p>
              </a>

              {/* Calendar */}
              <a
                href="https://calendar.app.google/n1fxohs2CJfJ8yut5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Spotkanie</h3>
                <p className="text-slate-600 text-sm">
                  Umów się na rozmowę
                </p>
              </a>
            </div>

            {/* Alternative Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Lub wypełnij formularz
              </h2>

              <form
                action="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"
                method="POST"
                target="_blank"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="entry.name"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="entry.email"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="entry.message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  {t('contact.form.submit')}
                </button>
              </form>

              <p className="mt-6 text-sm text-slate-500 text-center">
                * Odpowiem w ciągu 24 godzin
              </p>
            </div>

            {/* About */}
            <div className="mt-12 text-center">
              <div className="flex justify-center mb-6">
                <img
                  src="/trainer-photo.jpg"
                  alt="Łukasz Ostrowski"
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Łukasz Ostrowski
              </h3>
              <p className="text-slate-600">
                Ekspert AI w Zakupach | 20+ lat doświadczenia
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
