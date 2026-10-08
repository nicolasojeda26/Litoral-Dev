import { useEffect, useRef, useState } from 'react';
import Portfolio from './components/Portfolio';
import logo from './assets/logo-horizontal.svg';
import logoNegativo from './assets/logo-horizontal-negativo.svg';
import './index.css';
import './site.css';

const WHATSAPP = 'https://wa.me/5493795769425';
const wa = (text) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;
const WA_DEMO = wa('Hola! Quiero solicitar mi Demo Virtual Gratuita para mi negocio.');
const WA_CONTACTO = wa('Hola! Vi la web de Litoral Dev y quiero hacer una consulta.');

const NAV = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#diferenciales', label: 'Por qué Litoral' },
  { href: '#preguntas', label: 'Preguntas' },
];

const EN_PRODUCCION = [
  'Tommy Guns ARG',
  'Librería Bia',
  'PrincessLov',
  'GymAI',
  'PsicoPlus',
  'NBG Indumentaria',
  'Arandu Chess',
];

/* Tarjetas sueltas del bloque "relaciones": cada una es un resultado real de un proyecto. */
const RESULTADOS = [
  { who: 'Tommy Guns ARG', text: 'El catálogo se actualiza solo desde el proveedor.', x: -2, y: 4, r: -4 },
  { who: 'Librería Bia', text: 'Carga masiva de productos desde el panel.', x: 20, y: 0, r: 3 },
  { who: 'Litoral Dev', text: 'Código propio. Sin plantillas ni constructores visuales.', x: 49, y: 2, r: -2, brand: true },
  { who: 'PrincessLov', text: 'Cobros con Mercado Pago y programa de puntos.', x: 75, y: 3, r: 4 },
  { who: 'GymAI', text: 'Check-in por DNI con kiosco de auto-atención.', x: 8, y: 34, r: 3 },
  { who: 'Litoral Dev', text: 'Sin abono mensual de servidor.', x: 76, y: 32, r: -3, brand: true },
  { who: 'PsicoPlus', text: 'Agenda, facturación y liquidaciones en un solo lugar.', x: -3, y: 66, r: -2 },
  { who: 'NBG Indumentaria', text: 'Rifas con sorteo automático, sin planillas.', x: 20, y: 76, r: 2 },
  { who: 'Arandu Chess', text: 'Partidas online y análisis con Stockfish.', x: 58, y: 77, r: -4 },
  { who: 'Litoral Dev', text: 'Sistemas funcionando en 5 a 7 días hábiles.', x: 80, y: 64, r: 3, brand: true },
];

const SERVICIOS = [
  {
    n: '01',
    title: 'Webs y tiendas online',
    eyebrow: 'Una web que vende',
    text: 'Catálogos autogestionables y tiendas con checkout por WhatsApp o Mercado Pago, optimizadas para cargar rápido y convertir visitas en ventas.',
    ejemplos: 'Tommy Guns ARG · Librería Bia · PrincessLov',
    chips: ['Catálogo', 'Carrito', 'Mercado Pago', 'Panel admin'],
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 2.3c-.6.6-.2 1.7.7 1.7H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    n: '02',
    title: 'Sistemas de gestión a medida',
    eyebrow: 'Un sistema a medida',
    text: 'Mini-ERP, stock, caja, turnos y dashboards con analítica financiera en tiempo real, armados según cómo trabaja de verdad tu negocio.',
    ejemplos: 'GymAI · PsicoPlus',
    chips: ['Stock', 'Caja', 'Turnos', 'Dashboards'],
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    n: '03',
    title: 'Plataformas para tu industria',
    eyebrow: 'Desarrollos verticales',
    text: 'Inmobiliarias, sorteos automatizados, educación online: aplicaciones específicas para cuando nada de lo que hay en el mercado encaja con tu rubro.',
    ejemplos: 'NBG Indumentaria · Arandu Chess',
    chips: ['Tiempo real', 'Pagos', 'Usuarios', 'PWA'],
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  },
  {
    n: '04',
    title: 'Automatización e integraciones',
    eyebrow: 'Menos trabajo manual',
    text: 'Conectamos tu negocio con Mercado Pago, WhatsApp, Google Sheets y tus proveedores para que los datos se muevan solos y nadie tenga que copiarlos a mano.',
    ejemplos: 'Sincronización con proveedor · Webhooks de pago',
    chips: ['Webhooks', 'APIs', 'Google Sheets', 'Emails'],
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
];

const DIFERENCIALES = [
  {
    n: '01',
    title: 'Dirección profesional calificada',
    text: 'Código estable, lógico y mantenible. No improvisamos con constructores visuales: diseñamos arquitecturas de software robustas adaptadas a las reglas de tu negocio.',
  },
  {
    n: '02',
    title: 'Cero costos fijos mensuales',
    text: 'Desplegamos infraestructura moderna en la nube. Olvidate de los pagos recurrentes por servidores o plantillas: las ganancias de tu sistema son 100% tuyas.',
  },
  {
    n: '03',
    title: 'Plazos de entrega estrictos',
    text: 'El tiempo es dinero. Nuestros procesos estandarizados nos permiten tener sistemas funcionales y desplegados en 5 a 7 días hábiles.',
  },
];

const PREGUNTAS = [
  {
    q: '¿Con qué tipo de proyectos trabajan?',
    a: 'Webs y tiendas online, sistemas de gestión (stock, caja, turnos, facturación) y plataformas específicas para un rubro. En la sección de proyectos podés abrir y usar siete de ellos.',
  },
  {
    q: '¿Cuánto tiempo lleva desarrollar un proyecto?',
    a: 'Con nuestros procesos estandarizados, un sistema funcional queda desplegado en 5 a 7 días hábiles. Los proyectos más grandes se organizan por etapas, cada una con su entrega.',
  },
  {
    q: '¿Tengo que pagar un servidor todos los meses?',
    a: 'No. Desplegamos sobre infraestructura moderna en la nube sin costos fijos de servidor ni plantillas por suscripción. Lo que ganás con tu sistema es tuyo.',
  },
  {
    q: '¿Usan plantillas o constructores visuales?',
    a: 'No. Escribimos código propio, pensado para las reglas de tu negocio. Eso lo hace más rápido, más estable y más fácil de ampliar cuando crecés.',
  },
  {
    q: '¿Cómo arranco?',
    a: 'Escribinos por WhatsApp contando qué hace tu negocio y qué te gustaría resolver. Te proponemos una demo virtual gratuita para que veas la solución antes de decidir.',
  },
];

/* ------------------------------- Utilidades ------------------------------- */

const Arrow = ({ className = '' }) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

const Isotipo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
    <rect width="120" height="120" rx="30" fill="#1D4E89" />
    <circle cx="60" cy="58" r="22" fill="#F26A3D" />
    <path d="M14 74c10-8 20-8 30 0s20 8 30 0 20-8 32 0" fill="none" stroke="#F6EFE3" strokeWidth="9" strokeLinecap="round" />
    <path d="M14 92c10-8 20-8 30 0s20 8 30 0 20-8 32 0" fill="none" stroke="#F6EFE3" strokeWidth="9" strokeLinecap="round" opacity=".55" />
  </svg>
);

/* Aparece al entrar en pantalla. */
const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('is-in'));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }),
      { rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

/* --------------------------------- Secciones -------------------------------- */

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#inicio" className="nav-logo" aria-label="Litoral Dev, inicio">
          <img src={logo} alt="Litoral Dev" width="612" height="120" />
        </a>
        <nav className="nav-links" aria-label="Principal">
          {NAV.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href={WA_CONTACTO} target="_blank" rel="noopener noreferrer" className="nav-cta">
          Hablemos
        </a>
      </div>
    </header>
  );
};

const HeroRio = () => (
  <svg className="hero-rio" viewBox="0 0 640 560" aria-hidden="true">
    <defs>
      <linearGradient id="rio-cinta" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#1D4E89" />
        <stop offset="1" stopColor="#16243A" />
      </linearGradient>
      <path id="rio-camino" d="M70 120 H420 C560 120 560 300 420 300 H220 C80 300 80 460 220 460 H700" />
    </defs>
    {/* Cinta principal: el río del isotipo, en grande */}
    <use href="#rio-camino" fill="none" stroke="url(#rio-cinta)" strokeWidth="92" strokeLinecap="round" strokeLinejoin="round" />
    <use href="#rio-camino" fill="none" stroke="#F6EFE3" strokeWidth="4" strokeDasharray="2 18" strokeLinecap="round" opacity=".35" />
    <circle r="30" fill="#F26A3D">
      <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
        <mpath href="#rio-camino" />
      </animateMotion>
    </circle>
    <circle r="22" fill="#F4B942">
      <animateMotion dur="14s" begin="-5s" repeatCount="indefinite">
        <mpath href="#rio-camino" />
      </animateMotion>
    </circle>
    <circle r="16" fill="#F6EFE3">
      <animateMotion dur="14s" begin="-9.5s" repeatCount="indefinite">
        <mpath href="#rio-camino" />
      </animateMotion>
    </circle>
  </svg>
);

const Hero = () => (
  <section className="hero" id="inicio">
    <div className="hero-inner">
      <div className="hero-copy">
        <span className="eyebrow eyebrow-rombo">Agencia de software · Corrientes, AR</span>
        <h1 className="hero-title">
          Software a medida para empresas que <strong>no improvisan.</strong>
        </h1>
        <p className="hero-lead">
          Soluciones digitales para negocios que <span>quieren crecer</span>.
        </p>
        <p className="hero-text">
          Diseñamos, desarrollamos e integramos sistemas dirigidos por un Analista Programador en Sistemas. Automatizamos tus operaciones sin plantillas genéricas ni costos fijos de servidor.
        </p>
        <div className="hero-actions">
          <a href={WA_DEMO} target="_blank" rel="noopener noreferrer" className="b b-solid">
            Solicitar demo virtual
          </a>
          <a href="#proyectos" className="b b-pill">
            Ver casos
            <span className="b-pill-dot">
              <Arrow />
            </span>
          </a>
          <a href="#servicios" className="b b-line">
            ¿Qué hacemos?
          </a>
        </div>
      </div>
      <HeroRio />
    </div>

    <div className="hero-strip">
      <span className="eyebrow eyebrow-rombo hero-strip-label">En producción</span>
      <div className="marquee" aria-label={`Proyectos en producción: ${EN_PRODUCCION.join(', ')}`}>
        <div className="marquee-track" aria-hidden="true">
          {[...EN_PRODUCCION, ...EN_PRODUCCION].map((n, i) => (
            <span key={i} className={`marquee-item mi-${i % 4}`}>
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Relaciones = () => {
  const area = useRef(null);
  const [pos, setPos] = useState(() => RESULTADOS.map(() => ({ dx: 0, dy: 0 })));
  const [top, setTop] = useState(-1);
  const drag = useRef(null);

  const onDown = (i) => (e) => {
    if (window.matchMedia('(max-width: 860px)').matches) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { i, x: e.clientX, y: e.clientY, base: pos[i] };
    setTop(i);
  };
  const onMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const dx = d.base.dx + e.clientX - d.x;
    const dy = d.base.dy + e.clientY - d.y;
    setPos((p) => p.map((v, j) => (j === d.i ? { dx, dy } : v)));
  };
  const onUp = () => {
    drag.current = null;
  };

  return (
    <section className="rel" ref={area} aria-labelledby="rel-title">
      <div className="rel-cards">
        {RESULTADOS.map((c, i) => (
          <article
            key={i}
            className={`rel-card ${c.brand ? 'is-brand' : ''} ${top === i ? 'is-top' : ''}`}
            style={{
              left: `${c.x}%`,
              top: `${c.y}%`,
              transform: `translate(${pos[i].dx}px, ${pos[i].dy}px) rotate(${c.r}deg)`,
            }}
            onPointerDown={onDown(i)}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerCancel={onUp}
          >
            <span className="rel-card-who">
              {c.brand ? <Isotipo size={22} /> : <span className="rel-card-ini">{c.who.charAt(0)}</span>}
              {c.who}
            </span>
            <p>{c.text}</p>
          </article>
        ))}
      </div>
      <div className="rel-center">
        <span className="rel-hint">Arrastrá cada tarjeta para ordenarlas</span>
        <h2 id="rel-title">
          Construimos sistemas que <em>trabajan solos.</em>
        </h2>
        <p>Cada tarjeta es algo que hoy resuelve el software de un cliente, sin que nadie tenga que hacerlo a mano.</p>
      </div>
    </section>
  );
};

const Servicios = () => (
  <section className="svc" id="servicios">
    <div className="wrap">
      <header className="sec-head" data-reveal>
        <div>
          <span className="eyebrow">Qué hacemos / 01–04</span>
          <h2 className="sec-title">
            Tecnología
            <br />
            que resuelve.
          </h2>
        </div>
        <div className="sec-head-side">
          <p>Estrategia, diseño y código para convertir problemas reales de tu negocio en herramientas que funcionan.</p>
          <a href={WA_DEMO} target="_blank" rel="noopener noreferrer" className="link-arrow">
            Pedir demo gratuita <span aria-hidden="true">→</span>
          </a>
        </div>
      </header>

      <div className="svc-stack">
        {SERVICIOS.map((s, i) => (
          <article key={s.n} className="svc-card" style={{ '--i': i }}>
            <div className="svc-body">
              <a
                className="svc-bar"
                href={wa(`Hola! Me interesa: ${s.title}. ¿Podemos hablar?`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="svc-ico">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={s.icon} />
                  </svg>
                </span>
                <span className="svc-num">{s.n}</span>
                <span className="svc-name">{s.title}</span>
                <span className="svc-go">
                  <Arrow />
                </span>
              </a>
              <span className="eyebrow eyebrow-sm">{s.eyebrow}</span>
              <p className="svc-text">{s.text}</p>
              <div className="svc-meta">
                <span>Casos</span>
                <strong>{s.ejemplos}</strong>
              </div>
            </div>
            <div className="svc-panel">
              <svg className="svc-olas" aria-hidden="true">
                <defs>
                  <pattern id={`olas-svc-${i}`} width="60" height="44" patternUnits="userSpaceOnUse">
                    <path d="M-20 10c7-5 13-5 20 0s13 5 20 0 13-5 20 0 13 5 20 0" fill="none" stroke="currentColor" strokeWidth="5" />
                    <path d="M-20 26c7-5 13-5 20 0s13 5 20 0 13-5 20 0 13 5 20 0" fill="none" stroke="currentColor" strokeWidth="5" opacity=".5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#olas-svc-${i})`} />
              </svg>
              <div className="svc-chips">
                {s.chips.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
              <span className="svc-big">{s.n}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Diferenciales = () => (
  <section className="dif" id="diferenciales">
    <div className="wrap dif-grid">
      <div className="dif-copy" data-reveal>
        <span className="eyebrow">Por qué Litoral Dev</span>
        <h2 className="sec-title">
          Código propio.
          <br />
          Sin abonos.
          <br />
          <span className="t-rio">En días,</span> no meses.
        </h2>
        <p>
          Trabajamos como un equipo de ingeniería, no como una plantilla: entendemos las reglas de tu negocio, las convertimos en software y te lo entregamos funcionando.
        </p>
        <div className="dif-actions">
          <a href={WA_DEMO} target="_blank" rel="noopener noreferrer" className="b b-round b-solid">
            Solicitar demo virtual
          </a>
          <a href="#proyectos" className="b b-round b-accion">
            Ver proyectos
          </a>
        </div>
      </div>
      <ol className="dif-list">
        {DIFERENCIALES.map((d) => (
          <li key={d.n} className="dif-item" data-reveal>
            <span className="dif-n">{d.n}</span>
            <div>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const Preguntas = () => (
  <section className="faq" id="preguntas">
    <div className="wrap faq-grid">
      <div>
        <span className="eyebrow eyebrow-wide">Antes de empezar</span>
        <h2 className="faq-title">Preguntas frecuentes</h2>
      </div>
      <div className="faq-list">
        {PREGUNTAS.map((p) => (
          <details key={p.q} className="faq-item">
            <summary>
              {p.q}
              <span className="faq-plus" aria-hidden="true" />
            </summary>
            <p>{p.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const Contacto = () => {
  const [idea, setIdea] = useState('');
  const submit = (e) => {
    e.preventDefault();
    const msg = idea.trim()
      ? `Hola! Vengo de la web de Litoral Dev. Mi idea: ${idea.trim()}`
      : 'Hola! Vi la web de Litoral Dev y quiero hacer una consulta.';
    window.open(wa(msg), '_blank', 'noopener');
  };

  return (
    <section className="cta" id="contacto">
      <div className="cta-inner">
        <h2>¿No tenés tiempo para una reunión?</h2>
        <p>Contanos tu idea en una línea y seguimos la charla por WhatsApp.</p>
        <form className="cta-form" onSubmit={submit}>
          <label htmlFor="idea" className="sr-only">
            Tu idea
          </label>
          <input
            id="idea"
            type="text"
            placeholder="Ej.: quiero una tienda online para mi negocio"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            autoComplete="off"
          />
          <button type="submit">Enviar por WhatsApp</button>
        </form>

        <figure className="cta-quote">
          <span className="cta-mark" aria-hidden="true">“</span>
          <blockquote>
            Hacemos software a la medida de cómo trabaja tu negocio, <em>no al revés.</em>
          </blockquote>
          <figcaption>Equipo Litoral Dev</figcaption>
        </figure>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="foot">
    <div className="wrap foot-grid">
      <div className="foot-brand">
        <img src={logoNegativo} alt="Litoral Dev" width="612" height="120" />
        <p>Webs, tiendas online y sistemas de gestión a medida, desde Corrientes para todo el país.</p>
      </div>
      <div>
        <h3>Navegación</h3>
        <ul>
          {NAV.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Servicios</h3>
        <ul>
          {SERVICIOS.map((s) => (
            <li key={s.n}>
              <a href="#servicios">{s.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Contacto</h3>
        <ul>
          <li>
            <a href={WA_CONTACTO} target="_blank" rel="noopener noreferrer">
              WhatsApp · +54 9 379 576-9425
            </a>
          </li>
          <li>
            <a href={WA_DEMO} target="_blank" rel="noopener noreferrer">
              Pedir demo virtual gratuita
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="wrap foot-bottom">
      <p>© {new Date().getFullYear()} Litoral Dev. Todos los derechos reservados.</p>
    </div>
  </footer>
);

const BotonFlotante = () => (
  <a href={WA_CONTACTO} target="_blank" rel="noopener noreferrer" className="flota" aria-label="Escribinos por WhatsApp">
    <svg className="flota-texto" viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <path id="flota-circulo" d="M50 50m-40 0a40 40 0 1 1 80 0a40 40 0 1 1-80 0" />
      </defs>
      <text>
        <textPath href="#flota-circulo">hablemos · whatsapp · hablemos · whatsapp ·</textPath>
      </text>
    </svg>
    <span className="flota-centro">
      <Isotipo size={44} />
    </span>
  </a>
);

function App() {
  useReveal();
  return (
    <div className="site">
      <a href="#proyectos" className="skip">
        Saltar al contenido
      </a>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Relaciones />
        <Servicios />
        <Diferenciales />
        <Preguntas />
        <Contacto />
      </main>
      <Footer />
      <BotonFlotante />
    </div>
  );
}

export default App;
