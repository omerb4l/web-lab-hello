import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>Ömer Bal - Kişisel Portföy</h1>
        <nav>
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <figure>
            <img src="https://via.placeholder.com/150" alt="Ömer Bal'ın vesikalık fotoğrafı" />
            <figcaption>Ömer Bal</figcaption>
          </figure>
          <p>Merhaba, ben Ömer Bal. Front-end geliştirme konusunda kendimi geliştiriyorum.</p>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <article>
            <h3>1. E-Ticaret Sitesi</h3>
            <img src="https://via.placeholder.com/300x150" alt="E-ticaret sitesi anasayfa ekran görüntüsü" />
            <p>React ve TypeScript ile geliştirilmiş modern e-ticaret arayüzü.</p>
          </article>
          <article>
            <h3>2. Portföy Sayfası</h3>
            <img src="https://via.placeholder.com/300x150" alt="Kişisel portföy sayfası ekran görüntüsü" />
            <p>Semantik HTML ve erişilebilirlik standartlarına uygun kişisel web sitesi.</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          {/* form buraya */}
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Ömer Bal. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App
