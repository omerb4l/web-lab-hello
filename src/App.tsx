import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import UIKit from './pages/UIKit';

function App() {
  const [showUIKit, setShowUIKit] = useState(false);

  if (showUIKit) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowUIKit(false)}
          className="fixed top-4 left-4 z-[60] bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          ← Portföye Dön
        </button>
        <UIKit />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Skip Link */}
      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50">
        Ana içeriğe atla
      </a>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed bottom-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">🌙</span>
        <span className="hidden dark:inline">☀️</span>
      </button>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Ömer Bal
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li><a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Hakkımda</a></li>
              <li><a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Projeler</a></li>
              <li><a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">İletişim</a></li>
              <li>
                <button
                  onClick={() => setShowUIKit(true)}
                  className="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  UI Kit
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* Hakkımda */}
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img src="https://via.placeholder.com/160" alt="Ömer Bal vesikalık fotoğrafı" className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-blue-100 dark:border-blue-900" />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkımda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                Frontend geliştirici olarak modern web teknolojileriyle kullanıcı dostu arayüzler oluşturuyorum.
                Performanslı ve erişilebilir web uygulamaları geliştirmek tutkum.
              </p>
              <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">React</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">TypeScript</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Tailwind</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Node.js</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projeler */}
        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card variant="elevated" title="E-Ticaret Sitesi" image="https://via.placeholder.com/400x250" imageAlt="E-Ticaret anasayfa görünümü"
                footer={<Button size="sm" variant="ghost">Detaylar</Button>}>
                React ve Node.js ile tam kapsamlı uygulama.
              </Card>
              <Card variant="elevated" title="Portföy Sitesi" image="https://via.placeholder.com/400x250" imageAlt="Portföy görünümü">
                Tailwind CSS v4 ve Component yaklaşımı ile geliştirildi.
              </Card>
              <Card variant="elevated" title="Hava Durumu" image="https://via.placeholder.com/400x250" imageAlt="Hava durumu uygulaması">
                OpenWeather API ve React Hooks kullanımı.
              </Card>
            </div>
          </div>
        </section>

        {/* İletişim */}
        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              İletişim
            </h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input id="name" label="Ad Soyad" placeholder="Ömer Bal" required />
              <Input id="email" label="E-posta" type="email" placeholder="omer@mail.com" required />
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mesajınız
                </label>
                <textarea id="message" rows={5} required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 transition-shadow">
                </textarea>
              </div>
              <Button variant="primary" size="lg" type="submit" className="w-full">
                Gönder
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-8 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2025 Ömer Bal. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;
