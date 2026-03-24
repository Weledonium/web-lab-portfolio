// --- Kategori Tipleri ---
// Projelerimizin sadece bu 3 kategoriden biri olabileceğini garanti ediyoruz
export type Category = "frontend" | "fullstack" | "backend";

// --- Sıralama Seçenekleri ---
export type SortField = "year" | "title";
export type SortOrder = "asc" | "desc"; // asc: Artan (A-Z), desc: Azalan (Z-A)

// --- Ana Proje Veri Modeli ---
// JSON dosyamızdaki her bir projenin sahip olduğu alanlar
export interface Project {
  readonly id: number;      // readonly: id sonradan değiştirilemez
  title: string;
  description: string;
  tech: string[];           // Metinlerden oluşan bir dizi (örn: ["React", "Python"])
  year: number;
  category: Category;       // Sadece yukarıda belirlediğimiz 3 kategori olabilir
  featured: boolean;        // true veya false
  image: string;
  demoUrl?: string;         // ? işareti bu alanın opsiyonel olduğunu belirtir
  sourceUrl?: string;       // ? işareti bu alanın opsiyonel olduğunu belirtir
}

// --- Filtre Durumu Modeli ---
// Sayfadaki arama, kategori seçimi ve sıralama ayarlarını tutacak yapı
export interface FilterState {
  search: string;
  category: Category | "all"; // Kategorilere ek olarak "all" (Tümü) seçeneği
  sortField: SortField;
  sortOrder: SortOrder;
}