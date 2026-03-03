import './App.css';
function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      <header>
        <h1>Kişisel Portfolyo</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkımda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#İletişim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          {/* Yan yana dizebilmek için eklediğimiz kapsayıcı div */}
          <div className="about-content">
            <figure>
              <img src="https://via.placeholder.com/200" alt="Vesikalik fotografim" />
            </figure>
            <div>
              <p>Merhaba! Yazılım mühendisliği 3. sınıf öğrencisiyim. Boş zamanlarımda veri yapıları ve algoritmalar üzerine çalışmayı, antrenmanlarımı ve beslenmemi optimize etmeyi, ayrıca detaylı RPG oyunları oynamayı seviyorum.</p>
                <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                  <li>React & TypeScript</li>
                  <li>Python</li>
                  <li>Veri Yapıları ve Algoritmalar</li>
                  <li>Ağ Programlama</li>
                  <li>VS Code</li>
              </ul>
            </div>
          </div>
        </section>

<section id="projeler">
          <h2>Projelerim</h2>
          
          <div className="project-grid">
            
            <article className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="GencKal uygulamasının ekran görüntüsü" />
              <h3>GencKal</h3>
              <p>Besin değerleri hesaplama ve takip odaklı, kullanıcı dostu arayüze sahip modern bir web uygulaması.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>TypeScript</li>
                <li>CSS Grid</li>
              </ul>
            </article>
            
            <article className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="RPG karakter yaratım ekranı" />
              <h3>RPG Karakter Ekranı</h3>
              <p>Sıra tabanlı oyunlardan ilham alan, istatistik ve yetenek ağacı barındıran dinamik bir karakter oluşturma arayüzü.</p>
              <ul className="skill-tags">
                <li>HTML5</li>
                <li>Flexbox</li>
              </ul>
            </article>

          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  minLength={2} 
                  aria-describedby="name-error" 
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta: </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  aria-describedby="email-error" 
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu: </label>
                <select 
                  id="subject" 
                  name="subject" 
                  required 
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız: </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  minLength={10} 
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Atahan Bora Bozkurt. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App