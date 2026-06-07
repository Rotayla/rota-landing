import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  Apple,
  Heart,
  MapPin,
  MessageCircle,
  Play,
  Send,
} from "lucide-react";
import { legalPages, routeAliases, type LegalPageContent } from "./legalContent";

const supportEmail = "destek@rotayla.com";
const rotaIconSrc = "/rota-icon.png";

const navLinks = [
  { label: "Güvenlik", href: "#safety" },
  { label: "Destek", href: "/support" },
  { label: "Yasal", href: "/privacy" },
];

const steps = [
  {
    title: "Paylaş",
    description: "Durumunu ve seni anlatan küçük anları sade biçimde paylaş.",
  },
  {
    title: "Keşfet",
    description: "Ana akışta paylaşımları ve profilleri kaydırma baskısı olmadan incele.",
  },
  {
    title: "Tanışmak istiyorum gönder",
    description: "İlgini çeken kişiye net ve saygılı bir tanışma isteği ilet.",
  },
  {
    title: "Sohbet",
    description: "Karşılıklı kabul sonrası konuşma daha kontrollü ve doğal başlasın.",
  },
];

const footerLinks = [
  { label: "Gizlilik Politikası", href: "/privacy" },
  { label: "KVKK", href: "/kvkk" },
  { label: "Kullanım Şartları", href: "/terms" },
  { label: "Destek", href: "/support" },
  { label: "Hesap Silme", href: "/delete-account" },
];

const floatingKinds = ["heart", "pin", "chat", "logo", "profile", "phone", "message"] as const;

type FloatingKind = (typeof floatingKinds)[number];

type FloatingObject = {
  id: number;
  kind: FloatingKind;
  rotate: number;
  x: number;
  y: number;
};

function BrandLink() {
  return (
    <a className="brand-mark" href="/" aria-label="Rota ana sayfa">
      <img className="brand-icon" src={rotaIconSrc} alt="" width="44" height="44" />
      <span>Rota</span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand-block">
          <a className="footer-brand" href="/">
            <img className="brand-icon small" src={rotaIconSrc} alt="" width="34" height="34" />
            Rota
          </a>
          <p>Doğru insanlarla yolun kesişsin.</p>
        </div>
        <nav className="footer-links" aria-label="Alt gezinme">
          {footerLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

function FloatingHeroObject({ item }: { item: FloatingObject }) {
  const style = {
    left: `${item.x}px`,
    top: `${item.y}px`,
    "--rotate": `${item.rotate}deg`,
  } as CSSProperties;

  if (item.kind === "profile") {
    return (
      <span className="floating-object floating-profile" style={style}>
        <i />
        <b />
        <b />
      </span>
    );
  }

  if (item.kind === "phone") {
    return (
      <span className="floating-object floating-phone" style={style}>
        <i />
        <b />
        <b />
      </span>
    );
  }

  if (item.kind === "message") {
    return (
      <span className="floating-object floating-message" style={style}>
        Tanışmak istiyorum
      </span>
    );
  }

  if (item.kind === "logo") {
    return (
      <span className="floating-object floating-logo" style={style}>
        <img src={rotaIconSrc} alt="" />
      </span>
    );
  }

  const Icon = item.kind === "pin" ? MapPin : item.kind === "chat" ? MessageCircle : Heart;

  return (
    <span className={`floating-object floating-icon floating-${item.kind}`} style={style}>
      <Icon size={28} fill={item.kind === "heart" ? "currentColor" : "none"} strokeWidth={2.2} />
    </span>
  );
}

function HomePage() {
  const [floatingObjects, setFloatingObjects] = useState<FloatingObject[]>([]);
  const objectIdRef = useRef(0);
  const lastMoveRef = useRef(0);
  const timeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  const spawnObject = useCallback((event: ReactPointerEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;

    if (target.closest("a, button")) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = Math.random() * 96 - 48;
    const offsetY = Math.random() * 82 - 41;
    const x = Math.min(Math.max(event.clientX - rect.left + offsetX, 44), rect.width - 44);
    const y = Math.min(Math.max(event.clientY - rect.top + offsetY, 76), rect.height - 70);
    const kind = floatingKinds[objectIdRef.current % floatingKinds.length];
    const id = objectIdRef.current + 1;
    const rotate = Math.round(Math.random() * 22 - 11);

    objectIdRef.current = id;
    setFloatingObjects((items) => [...items.slice(-4), { id, kind, rotate, x, y }]);

    const timeoutId = window.setTimeout(() => {
      setFloatingObjects((items) => items.filter((item) => item.id !== id));
    }, 2700);

    timeoutsRef.current.push(timeoutId);
  }, []);

  const handleHeroPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      if (event.pointerType !== "mouse") {
        return;
      }

      const now = window.performance.now();

      if (now - lastMoveRef.current < 460) {
        return;
      }

      lastMoveRef.current = now;
      spawnObject(event);
    },
    [spawnObject],
  );

  return (
    <main className="site-shell home-shell">
      <section
        className="hero"
        aria-labelledby="hero-title"
        onPointerDown={spawnObject}
        onPointerMove={handleHeroPointerMove}
      >
        <div className="floating-layer" aria-hidden="true">
          {floatingObjects.map((item) => (
            <FloatingHeroObject item={item} key={item.id} />
          ))}
        </div>

        <header className="nav home-nav" aria-label="Ana gezinme">
          <BrandLink />
          <nav className="header-links" aria-label="Üst menü">
            {navLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="hero-center">
          <span className="hero-logo" aria-label="Rota">
            <img className="brand-icon hero-brand-icon" src={rotaIconSrc} alt="" width="64" height="64" />
            Rota
          </span>
          <h1 id="hero-title">
            <span>Doğru insanlarla,</span>
            {" "}
            <span>yolun kesişsin.</span>
          </h1>
          <div className="hero-actions" id="app-store">
            <a className="store-button" href="#app-store">
              <Apple size={22} aria-hidden="true" />
              App Store’da Yakında
            </a>
            <a className="store-button" href="#google-play" id="google-play">
              <Play size={21} aria-hidden="true" />
              Google Play’de Yakında
            </a>
          </div>
          <p className="hero-hint">Keşfetmek için ekrana dokun.</p>
        </div>
      </section>

      <section className="section intro-section" id="about" aria-labelledby="about-title">
        <span className="section-kicker">Rota nedir?</span>
        <h2 id="about-title">Kaydırmadan daha doğal bir tanışma akışı.</h2>
        <p>
          Rota’da paylaşımları keşfet, profilleri incele, ilgini çeken kişiye
          “Tanışmak istiyorum” gönder. Karşılıklı kabul sonrası sohbet başlasın.
        </p>
      </section>

      <section className="section steps-section" aria-labelledby="steps-title">
        <div className="section-heading">
          <span className="section-kicker">Nasıl çalışır?</span>
          <h2 id="steps-title">Dört sade adım.</h2>
        </div>

        <div className="feature-grid">
          {steps.map((item, index) => (
            <article className="feature-card" key={item.title}>
              <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section safety-section" id="safety" aria-labelledby="safety-title">
        <span className="section-kicker">Güvenlik</span>
        <h2 id="safety-title">Kontrol sende.</h2>
        <p>Şikayet et, engelle, hesabını ve verilerini yönet.</p>
      </section>

      <Footer />
    </main>
  );
}

function LegalPage({ page }: { page: LegalPageContent }) {
  return (
    <main className="site-shell legal-shell">
      <section className="legal-hero" aria-labelledby="legal-title">
        <header className="nav legal-nav" aria-label="Ana gezinme">
          <BrandLink />
          <a className="legal-nav-link" href="/">
            Ana sayfa
          </a>
        </header>
        <div className="legal-hero-content">
          <span className="eyebrow legal-eyebrow">Rota yasal bilgilendirme</span>
          <h1 id="legal-title">{page.title}</h1>
          <p>{page.intro}</p>
        </div>
      </section>

      <section className="legal-content" aria-label={page.title}>
        {page.sections.map((section) => (
          <article className="legal-card" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.list ? (
              <ul>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
        <div className="legal-note">
          <strong>İletişim:</strong>{" "}
          <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function App() {
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const normalizedPath = routeAliases[pathname] ?? pathname;
  const legalPage = legalPages[normalizedPath as keyof typeof legalPages];

  useEffect(() => {
    document.title = legalPage
      ? `${legalPage.title} | Rota`
      : "Rota - Gerçek Tanışmalar";
  }, [legalPage]);

  if (legalPage) {
    return <LegalPage page={legalPage} />;
  }

  return <HomePage />;
}

export default App;
