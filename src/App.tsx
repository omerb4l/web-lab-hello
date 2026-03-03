import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>
      <header>
        <h1 className="site-title">Ömer Bal - Kişisel Portföy</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <div className="about-content">
            <figure>
              <img src="https://via.placeholder.com/150" alt="Ömer Bal'ın vesikalık fotoğrafı" />
              <figcaption>Ömer Bal</figcaption>
            </figure>
            <div>
              <p>Merhaba, ben Ömer Bal. Front-end geliştirme konusunda kendimi geliştiriyorum.</p>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img src="https://via.placeholder.com/300x200" alt="E-ticaret sitesi anasayfa ekran görüntüsü" />
              <h3>E-Ticaret Sitesi</h3>
              <p>React ve TypeScript ile geliştirilmiş modern e-ticaret arayüzü.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://via.placeholder.com/300x200" alt="Kişisel portföy sayfası ekran görüntüsü" />
              <h3>Portföy Sayfası</h3>
              <p>Semantik HTML ve erişilebilirlik standartlarına uygun kişisel web sitesi.</p>
              <ul className="skill-tags">
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://via.placeholder.com/300x200" alt="Hava durumu uygulaması arayüzü" />
              <h3>Hava Durumu</h3>
              <p>OpenWeather API ile anlık hava durumu bilgisi.</p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input type="email" id="email" name="email" required aria-describedby="email-error" />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error"></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Ömer Bal. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App
