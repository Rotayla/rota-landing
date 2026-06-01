import {
  ArrowUpRight,
  CheckCircle2,
  Heart,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const instagramUrl = "https://www.instagram.com/rotaylaa";
const supportEmail = "destek@rotayla.com";

const reasons = [
  {
    title: "Güvenli tanışma",
    description: "Rota, tanışma sürecini daha kontrollü ve güven veren bir zeminde tasarlar.",
    icon: ShieldCheck,
  },
  {
    title: "Saygılı iletişim",
    description: "İletişimin merkezinde netlik, nezaket ve karşılıklı sınırlar yer alır.",
    icon: HeartHandshake,
  },
  {
    title: "Karşılıklı eşleşme",
    description: "Sohbet yalnızca iki taraf da tanışmak istediğinde başlar.",
    icon: MessageCircle,
  },
  {
    title: "Modern profil deneyimi",
    description: "Kendini sade, anlaşılır ve güven veren bir profille ifade edersin.",
    icon: UserCheck,
  },
];

const steps = [
  "Profilini oluştur",
  "Sana uygun kişileri keşfet",
  "Karşılıklı eşleşince sohbet et",
];

const footerLinks = [
  { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
  { label: "Destek", href: "/destek" },
];

function App() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="nav" aria-label="Ana gezinme">
          <a className="brand-mark" href="https://rotayla.com" aria-label="Rota ana sayfa">
            <span className="brand-symbol" aria-hidden="true">
              <MapPin size={22} strokeWidth={2.4} />
              <Heart className="brand-heart" size={10} fill="currentColor" strokeWidth={2.2} />
            </span>
            <span>Rota</span>
          </a>
          <a className="nav-link" href={`mailto:${supportEmail}`}>
            <Mail size={18} aria-hidden="true" />
            Bize ulaş
          </a>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              <CheckCircle2 size={16} aria-hidden="true" />
              Yakında iOS ve Android’de
            </span>
            <h1 id="hero-title">Doğru insanlarla yolun kesişsin.</h1>
            <p className="hero-description">
              Rota, güvenli ve saygılı tanışma deneyimi için hazırlanıyor.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href={instagramUrl} target="_blank" rel="noreferrer">
                <Instagram size={20} aria-hidden="true" />
                Instagram'da takip et
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="ghost-button" href={`mailto:${supportEmail}`}>
                Bize ulaş
              </a>
            </div>
            <p className="store-note">Yakında App Store ve Google Play’de.</p>
          </div>

          <div className="abstract-visual" aria-hidden="true">
            <div className="route-line route-line-one" />
            <div className="route-line route-line-two" />
            <div className="route-node node-heart">
              <Heart size={22} />
            </div>
            <div className="route-node node-pin">
              <MapPin size={23} />
            </div>
            <div className="route-node node-chat">
              <MessageCircle size={22} />
            </div>
            <div className="route-logo">
              <span>R</span>
            </div>
            <div className="route-caption">
              <span>Güvenli</span>
              <span>Saygılı</span>
              <span>Modern</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-section" aria-labelledby="about-title">
        <div className="section-kicker">Rota nedir?</div>
        <div className="split">
          <h2 id="about-title">Yeni nesil sosyal tanışma deneyimi.</h2>
          <p>
            Rota, doğru insanlarla tanışmayı daha güvenli, saygılı ve modern hale
            getirmek için geliştirilen yeni nesil bir sosyal tanışma uygulamasıdır.
          </p>
        </div>
      </section>

      <section className="section reasons-section" aria-labelledby="reasons-title">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Neden Rota?</div>
            <h2 id="reasons-title">Sade, dengeli ve güven veren.</h2>
          </div>
          <p>
            Rota; arkadaşlık ve tanışma deneyimini daha sakin, saygılı ve anlaşılır
            bir akışla sunmak için hazırlanıyor.
          </p>
        </div>

        <div className="feature-grid">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <article className="feature-card" key={item.title}>
                <span className="feature-icon">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section steps-section" aria-labelledby="steps-title">
        <div className="section-kicker">Nasıl çalışır?</div>
        <div className="steps-grid">
          <div>
            <h2 id="steps-title">Üç adımda daha doğru tanışmalar.</h2>
            <p>
              Rota, karmaşık akışlar yerine basit ve güven veren bir tanışma yolu
              sunmayı hedefler.
            </p>
          </div>
          <ol className="step-list">
            {steps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="coming-soon" aria-labelledby="coming-title">
        <div>
          <div className="section-kicker">Yakında geliyor</div>
          <h2 id="coming-title">Rota çok yakında yayında.</h2>
          <p>Lansmanı kaçırmamak için bizi Instagram'da takip et.</p>
        </div>
        <a className="secondary-button" href={instagramUrl} target="_blank" rel="noreferrer">
          <Instagram size={20} aria-hidden="true" />
          @rotaylaa
        </a>
      </section>

      <section className="section contact-section" aria-labelledby="contact-title">
        <div className="contact-card">
          <div>
            <div className="section-kicker">İletişim</div>
            <h2 id="contact-title">Destek ve KVKK başvuruları</h2>
            <p>
              Destek ve KVKK başvuruları için:{" "}
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            </p>
          </div>
          <a className="icon-button" href={`mailto:${supportEmail}`} aria-label="E-posta gönder">
            <Mail size={22} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="footer">
        <a className="footer-brand" href="https://rotayla.com">
          <span className="brand-symbol small" aria-hidden="true">
            <MapPin size={18} strokeWidth={2.4} />
            <Heart className="brand-heart" size={8} fill="currentColor" strokeWidth={2.2} />
          </span>
          Rota
        </a>
        <nav className="footer-links" aria-label="Alt gezinme">
          {footerLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </nav>
      </footer>
    </main>
  );
}

export default App;
