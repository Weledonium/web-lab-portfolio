# CSS Kararları

## 1. Breakpoint Seçimi

- Tasarımı mobile-first yaklaşımıyla kurguladım. Kırılım noktası olarak tabletler için 640px, masaüstü ekranlar için 1024px belirledim.
- 640px'te "Hakkımda" bölümü yan yana (row) hizalanıyor. 1024px'te ise sayfa içeriği maksimum 1200px genişliğe sabitlenip ortalanıyor.

## 2. Layout Tercihleri

- Header ve Navigasyon kısmında, elemanları sağa-sola hizalamak ve mobilde dikey yığılmayı kolayca sağlamak için Flexbox kullandım.
- Proje kartları bölümünde, elemanların iki boyutlu (satır ve sütun) akışını kontrol etmek için CSS Grid tercih ettim.
- Grid yapısında `auto-fit` kullandım çünkü ekran genişlediğinde mevcut kartların boşlukları doldurmasını, daraldığında ise otomatik alt satıra geçmesini istedim.

## 3. Design Tokens

- Renk paletinde güven veren ve okunaklı bir mavi tonu (`#1E3A8A`) ana renk (primary) olarak seçtim.
- Spacing (boşluk) skalasını 4px'in katları olacak şekilde (0.25rem, 0.5rem, 1rem vb.) hiyerarşik olarak belirledim.
- Fluid typography için `clamp()` fonksiyonunda `rem + vw` formatını kullandım. Böylece yazılar belirlediğim minimum ve maksimum değerler arasında, ekran genişliğine orantılı olarak akıcı şekilde büyüyüp küçülüyor.

## 4. Responsive Stratejiler

- Tasarımı önce mobil (0-639px) için yazdım. Daha sonra `@media (min-width: ...)` kuralları ile büyük ekranlara özellik ekledim.
- Breakpoint'lerde özellikle "Hakkımda" bölümünün yönü (column'dan row'a) ve butonların genişliği (yüzde 100'den auto'ya) değişiyor.
- Görsellerin taşmasını engellemek için `max-width: 100%` ve kart içindeki fotoğrafların oranını korumak için `object-fit: cover` kullandım.
