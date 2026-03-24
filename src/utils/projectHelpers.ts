import type { Project, Category, SortField, SortOrder } from "../types/project";

// --- Arama Filtresi ---
// Arama kutusuna yazılan kelimeyi projenin başlığında, açıklamasında veya teknolojilerinde arar
export function filterBySearch(projects: Project[], query: string): Project[] {
  if (!query.trim()) return projects; // Arama kutusu boşsa tüm projeleri geri ver
  const lower = query.toLowerCase();
  
  return projects.filter((p) =>
    p.title.toLowerCase().includes(lower) ||
    p.description.toLowerCase().includes(lower) ||
    p.tech.some((t) => t.toLowerCase().includes(lower))
  );
}

// --- Kategori Filtresi ---
// Tümü ("all") seçildiyse hepsini, diğer durumlarda sadece eşleşen kategoriyi döndürür
export function filterByCategory(projects: Project[], category: Category | "all"): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}

// --- Sıralama Fonksiyonu ---
// Yıla veya Başlığa göre, Artan (asc) veya Azalan (desc) şeklinde sıralar
export function sortProjects(projects: Project[], field: SortField, order: SortOrder): Project[] {
  // Orijinal diziyi bozmamak için kopyasını ([...projects]) alıp onun üzerinden sıralıyoruz
  const sorted = [...projects].sort((a, b) => {
    if (field === "year") {
      return a.year - b.year; // Yıla göre sayısal sıralama
    }
    return a.title.localeCompare(b.title, "tr"); // Başlığa göre Türkçe karakter duyarlı alfabetik sıralama
  });
  
  return order === "desc" ? sorted.reverse() : sorted;
}

// --- Hepsini Birleştir (Orkestrasyon) ---
// Ana sayfamızın tek çağıracağı fonksiyon budur; tüm filtreleri sırayla uygular
export function applyFilters(
  projects: Project[],
  search: string,
  category: Category | "all",
  sortField: SortField,
  sortOrder: SortOrder
): Project[] {
  let result = filterBySearch(projects, search);
  result = filterByCategory(result, category);
  result = sortProjects(result, sortField, sortOrder);
  return result;
}