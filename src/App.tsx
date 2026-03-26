import { useState, useEffect } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';
import UIKit from './pages/UIKit';
import type {
  Project, Category, SortField, SortOrder
} from './types/project';
import { fetchProjects } from './services/projectService';
import { applyFilters } from './utils/projectHelpers';

function App() {
  const [showUIKit, setShowUIKit] = useState(false);

  // --- STATE ---
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- VERİ ÇEKME ---
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Bilinmeyen hata"
        );
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // --- TÜRETİLMİŞ (DERIVED) VERİ ---
  const filtered = applyFilters(
    projects, search, category,
    sortField, sortOrder
  );

  const categories: (Category | "all")[] =
    ["all", "frontend", "fullstack", "backend"];

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

            {/* HATA DURUMU */}
            {error && (
              <div className="mb-8">
                <Alert variant="error" title="Hata">
                  {error}
                </Alert>
              </div>
            )}

            {/* FİLTRELER */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <Input
                  id="search"
                  placeholder="Proje ara (başlık, teknoloji...)"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <div className="flex gap-2 flex-wrap items-center">
                {categories.map(cat => (
                  <Button
                    key={cat}
                    variant={category === cat ? "primary" : "ghost"}
                    size="sm"
                    onClick={() => setCategory(cat)}
                  >
                    {cat === "all" ? "Tümü" : cat}
                  </Button>
                ))}
              </div>
              <div className="flex gap-2">
                <select
                  value={sortField}
                  onChange={e => setSortField(e.target.value as SortField)}
                  className="border rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-700 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
                >
                  <option value="year">Yıl</option>
                  <option value="title">Başlık</option>
                </select>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSortOrder(o => o === "asc" ? "desc" : "asc")}
                >
                  {sortOrder === "asc" ? "↑ A-Z" : "↓ Z-A"}
                </Button>
              </div>
            </div>

            {/* YÜKLENİYOR */}
            {loading && (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            )}

            {/* PROJE LİSTESİ */}
            {!loading && filtered.length === 0 && (
              <p className="text-center text-gray-500 py-20">
                Eşleşen proje bulunamadı.
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map(project => (
                <Card
                  key={project.id}
                  variant="elevated"
                  title={project.title}
                  image={project.image}
                  imageAlt={`${project.title} ekran görüntüsü`}
                  footer={
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{project.year}</span>
                      <span className="capitalize">{project.category}</span>
                    </div>
                  }
                >
                  <p className="text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map(t => (
                      <span key={t} className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-[10px] px-2 py-0.5 rounded-full font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* SONUÇ SAYISI */}
            <p className="text-sm text-gray-500 mt-8 text-center">
              {filtered.length} / {projects.length} proje gösteriliyor
            </p>
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
