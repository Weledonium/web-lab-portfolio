import type { Project } from "../types/project";

// Veriyi çekeceğimiz adres (Sanki uzak bir sunucuymuş gibi davranıyoruz)
const API_URL = "/data/projects.json";

// Asenkron (sayfayı dondurmayan) veri çekme fonksiyonumuz
export async function fetchProjects(): Promise<Project[]> {
  try {
    // 1. Ağa gidip veriyi iste
    const response = await fetch(API_URL);
    
    // 2. Sunucu 404 (Bulunamadı) veya 500 (Sunucu Hatası) gibi bir kod döndürdü mü kontrol et
    if (!response.ok) {
      throw new Error(`Projeler yüklenemedi: ${response.status}`);
    }
    
    // 3. Gelen yanıtı JSON formatına çevir ve bunun bir 'Project' dizisi olduğunu TypeScript'e söyle
    const data: Project[] = await response.json();
    
    return data;
  } catch (error) {
    // Ağ bağlantısı koparsa veya JSON bozuksa burası çalışır
    console.error("Veri çekme hatası:", error);
    throw error; // Hatayı sayfada gösterebilmek için yukarı (App.tsx'e) fırlat
  }
}