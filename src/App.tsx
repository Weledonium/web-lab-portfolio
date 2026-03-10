import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';

export default function App() {
  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen font-sans text-slate-900 dark:text-slate-100 selection:bg-blue-500 selection:text-white">
      
      {/* ===== HEADER & NAVİGASYON ===== */}
      <a href="#hakkimda" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50">
        Ana içeriğe atla
      </a>
      
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400 tracking-tight">
            Atahan Bora Bozkurt
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a href="#hakkimda" className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors">
                  Hakkımda
                </a>
              </li>
              <li>
                <a href="#projeler" className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#iletisim" className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* ===== HAKKIMDA BÖLÜMÜ ===== */}
        <section id="hakkimda" className="py-20 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
            <figure className="shrink-0">
              <img 
                src="https://via.placeholder.com/200" 
                alt="Vesikalık fotoğrafım" 
                className="w-40 h-40 rounded-full object-cover shadow-xl ring-4 ring-blue-50 dark:ring-slate-800" 
              />
            </figure>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Hakkımda
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-lg">
                Merhaba! Yazılım mühendisliği 3. sınıf öğrencisiyim. Boş zamanlarımda veri yapıları ve algoritmalar üzerine çalışmayı, antrenmanlarımı ve beslenmemi optimize etmeyi, ayrıca detaylı RPG oyunları oynamayı seviyorum.
              </p>
              
              {/* Beceri Etiketleri */}
              <ul className="flex flex-wrap justify-center md:justify-start gap-2" role="list" aria-label="Beceri etiketleri">
                <li className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800">React & TypeScript</li>
                <li className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800">Python</li>
                <li className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800">Veri Yapıları ve Algoritmalar</li>
                <li className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800">Ağ Programlama</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== PROJELERİM BÖLÜMÜ (Card Component Kullanımı) ===== */}
        <section id="projeler" className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <Card 
                variant="elevated" 
                title="MakroLens" 
                image="https://via.placeholder.com/600x300" 
                imageAlt="MakroLens uygulamasının ekran görüntüsü"
                className="hover:-translate-y-1 transition-transform duration-300 hover:shadow-blue-500/20"
              >
                <p className="mb-4">Besin değerleri hesaplama ve takip odaklı, kullanıcı dostu arayüze sahip modern bir web uygulaması.</p>
                <ul className="flex gap-2 text-xs font-semibold">
                  <li className="text-blue-500">#React</li>
                  <li className="text-emerald-500">#TypeScript</li>
                  <li className="text-purple-500">#Tailwind</li>
                </ul>
              </Card>

              <Card 
                variant="elevated" 
                title="RPG Karakter Ekranı" 
                image="https://via.placeholder.com/600x300" 
                imageAlt="RPG karakter yaratım ekranı"
                className="hover:-translate-y-1 transition-transform duration-300 hover:shadow-blue-500/20"
              >
                <p className="mb-4">Sıra tabanlı oyunlardan ilham alan, istatistik ve yetenek ağacı barındıran dinamik bir karakter oluşturma arayüzü.</p>
                <ul className="flex gap-2 text-xs font-semibold">
                  <li className="text-blue-500">#HTML5</li>
                  <li className="text-emerald-500">#CSS</li>
                </ul>
              </Card>

            </div>
          </div>
        </section>

        {/* ===== İLETİŞİM BÖLÜMÜ (Input ve Button Component Kullanımı) ===== */}
        <section id="iletisim" className="py-20 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-8">
              İletişim
            </h2>
            <form className="space-y-5 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <Input id="name" label="Ad Soyad" placeholder="Adınızı girin" required />
              <Input id="email" type="email" label="E-posta" placeholder="ornek@mail.com" required />
              
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Mesajınız
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required 
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-slate-900 dark:text-slate-100 transition-colors resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>
              
              <Button variant="primary" size="lg" type="submit" className="w-full mt-2">
                Gönder
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* ===== DARK MODE TOGGLE BUTONU ===== */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed bottom-6 right-6 z-50 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema değiştir"
      >
        {/* Açık temada ay (gece), karanlık temada güneş (gündüz) ikonu görünür */}
        <span className="dark:hidden text-xl">🌙</span>
        <span className="hidden dark:inline text-xl">☀️</span>
      </button>

      {/* ===== FOOTER ===== */}
      <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center py-8 px-4 text-slate-500 dark:text-slate-400 text-sm">
        <p>&copy; 2026 Atahan Bora Bozkurt. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}