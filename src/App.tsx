import { useState, useEffect } from "react";
import type { Project, Category, SortField, SortOrder } from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";

import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import Alert from "./components/Alert";

export default function App() {
  // --- 1. STATE (DURUM) YÖNETİMİ ---
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- 2. VERİ ÇEKME (EFFECT) ---
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        // JSON'dan verileri çekiyoruz
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Bilinmeyen hata");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []); // [] sayesinde sadece sayfa ilk açıldığında çalışır

  // --- 3. TÜRETİLMİŞ VERİ (DERIVED STATE) ---
  // Arama, kategori veya sıralama değiştiğinde projeler otomatik olarak filtrelenir
  const filtered = applyFilters(projects, search, category, sortField, sortOrder);
  const categories: (Category | "all")[] = ["all", "frontend", "fullstack", "backend"];

  // --- 4. KULLANICI ARAYÜZÜ (UI) ---
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Projelerim</h1>
          {/* LAB-4'teki Dark Mode Butonumuz */}
          <button
            onClick={() => document.documentElement.classList.toggle('dark')}
            className="bg-slate-200 dark:bg-slate-800 p-2 rounded-full shadow hover:scale-110 transition-transform"
            aria-label="Tema değiştir"
          >
            <span className="dark:hidden">🌙</span>
            <span className="hidden dark:inline">☀️</span>
          </button>
        </header>

        {/* HATA DURUMU */}
        {error && (
          <Alert variant="error" title="Hata" className="mb-6">
            {error}
          </Alert>
        )}

        {/* FİLTRELER VE KONTROLLER KUTUSU */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
          
          <div className="flex-1">
            <Input 
              id="search" 
              placeholder="Proje ara (örn: React, Python...)" 
              value={search} 
              onChange={(e: any) => setSearch(e.target.value)} 
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

          <div className="flex gap-2 items-center">
            <select 
              value={sortField} 
              onChange={e => setSortField(e.target.value as SortField)} 
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm dark:bg-slate-800 dark:border-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="year">Yıl</option>
              <option value="title">Başlık</option>
            </select>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")}
            >
              {sortOrder === "asc" ? "A-Z / Eski" : "Z-A / Yeni"}
            </Button>
          </div>
        </div>

        {/* YÜKLENİYOR DURUMU */}
        {loading && (
          <p className="text-center text-slate-500 my-12 animate-pulse font-medium">Projeler Yükleniyor...</p>
        )}

        {/* PROJE BULUNAMADI DURUMU */}
        {!loading && filtered.length === 0 && !error && (
          <p className="text-center text-slate-500 my-12 font-medium">Arama kriterlerine uygun proje bulunamadı.</p>
        )}

        {/* PROJE KARTLARI (GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <Card 
              key={project.id} 
              variant="elevated" 
              title={project.title} 
              image={project.image} 
              imageAlt={`${project.title} ekran görüntüsü`}
              className="hover:-translate-y-1 transition-transform duration-300"
            >
              <p className="text-sm mb-4 text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs px-2.5 py-1 rounded-full font-medium">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center text-xs text-slate-500 font-semibold uppercase tracking-wider">
                <span>{project.year}</span>
                <span className={
                  project.category === 'frontend' ? 'text-emerald-500' : 
                  project.category === 'backend' ? 'text-orange-500' : 'text-purple-500'
                }>
                  {project.category}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* ALT BİLGİ (SONUÇ SAYISI) */}
        {!loading && !error && (
          <p className="text-sm text-slate-500 mt-8 text-center font-medium">
            {filtered.length} / {projects.length} proje gösteriliyor
          </p>
        )}
        
      </div>
    </div>
  );
}