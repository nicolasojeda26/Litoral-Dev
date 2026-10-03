import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import './Portfolio.css';

const WHATSAPP = 'https://wa.me/5493795769425';

const PROJECTS = [
  {
    id: 'tommyguns',
    name: 'Tommy Guns ARG',
    category: 'E-commerce',
    status: 'En producción',
    url: 'https://tomas-hazel.vercel.app/',
    tagline: 'Tienda de airsoft y paintball con un catálogo que se actualiza solo desde el proveedor.',
    problem: 'Cargar y actualizar cientos de productos a mano era imposible: precios desactualizados y ventas perdidas por stock fantasma.',
    highlights: [
      'Catálogo sincronizado automáticamente con el proveedor',
      'Cuentas de usuario, carrito y checkout por WhatsApp',
      'Panel de administración con control de stock y precios',
    ],
    stack: ['React', 'TypeScript', 'Firebase', 'Scraping'],
  },
  {
    id: 'libreria-bia',
    name: 'Librería Bia',
    category: 'E-commerce',
    status: 'Online',
    url: 'https://libreria-bia.vercel.app/',
    tagline: 'Papelería con catálogo por categorías y carga masiva de productos desde el panel.',
    problem: 'Un catálogo largo y estacional que había que renovar seguido, sin tiempo para cargar producto por producto.',
    highlights: [
      'Catálogo por categorías con carrito y checkout',
      'Panel de administración con carga masiva de productos',
      'Base de datos PostgreSQL con stock real',
    ],
    stack: ['Next.js 16', 'PostgreSQL', 'Tailwind', 'Zustand'],
  },
  {
    id: 'princesslov',
    name: 'PrincessLov',
    category: 'E-commerce',
    status: 'Online',
    url: 'https://princess-lov.vercel.app/',
    tagline: 'Indumentaria femenina con filtros, cobro por Mercado Pago y programa de fidelidad.',
    problem: 'Vender por historias y DM: sin buscador, sin filtros y con cada pago negociado a mano.',
    highlights: [
      'Filtros por categoría, disponibilidad y precio',
      'Checkout con Mercado Pago sobre funciones serverless',
      'Panel de administración y programa de puntos',
    ],
    stack: ['JavaScript', 'Serverless', 'Mercado Pago', 'Google Sheets'],
  },
  {
    id: 'gymai',
    name: 'GymAI',
    category: 'Gestión',
    status: 'Demo abierta',
    url: 'https://gym-ai-tawny.vercel.app/',
    tagline: 'SaaS multi-sede para gimnasios: check-in por DNI, caja, rutinas y BI ejecutivo.',
    problem: 'Varias sedes, planillas separadas y ninguna forma de saber en el día cómo venía el negocio.',
    highlights: [
      'Check-in por DNI con kiosco táctil de auto-atención',
      'Socios, ficha médica, caja y arqueo ciego',
      'Business Intelligence con heatmap de asistencia',
    ],
    stack: ['Next.js 14', 'TypeScript', 'Drizzle ORM', 'Multi-tenant'],
  },
  {
    id: 'psicoplus',
    name: 'PsicoPlus',
    category: 'Gestión',
    status: 'Demo abierta',
    url: 'https://psicoplus-iota.vercel.app/',
    tagline: 'Gestión de consultorios de psicología: agenda, pacientes, facturación y liquidaciones.',
    problem: 'Turnos en cuaderno, honorarios calculados en Excel y ninguna trazabilidad entre profesionales.',
    highlights: [
      'Agenda de turnos y ficha clínica de pacientes',
      'Facturación, finanzas y liquidación a profesionales',
      'Multisede con autenticación segura',
    ],
    stack: ['React', 'Supabase', 'Vite', 'Tailwind'],
  },
  {
    id: 'giorgio',
    name: 'Giorgio Gestión',
    category: 'Gestión',
    status: 'Online',
    url: 'https://erm-mocha.vercel.app/',
    tagline: 'El panel que le dice al comerciante cuánto tiene que vender hoy para no perder plata.',
    problem: 'Sabía cuánto facturaba, no cuánto ganaba: los gastos fijos nunca entraban en la cuenta del día.',
    highlights: [
      'Resumen de ventas y ganancia del día',
      'Gastos fijos prorrateados y punto de equilibrio diario',
      'Stock valorizado a precio de venta',
    ],
    stack: ['React', 'Vite', 'Tailwind'],
  },
  {
    id: 'nbg',
    name: 'NBG Indumentaria',
    category: 'Plataformas',
    status: 'En producción',
    url: 'https://nbg-six.vercel.app/',
    tagline: 'Rifas online con cobro por Mercado Pago y sorteo automático, sin planillas.',
    problem: 'Números vendidos por WhatsApp, comprobantes sueltos y una planilla que nunca cerraba.',
    highlights: [
      'Venta de números con grilla en tiempo real',
      'Pago con Mercado Pago y webhook de confirmación',
      'Sorteo automático y aviso por email al ganador',
    ],
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Mercado Pago'],
  },
  {
    id: 'arandu',
    name: 'Arandu Chess',
    category: 'Plataformas',
    status: 'Online',
    url: 'https://arandu-chess-web.vercel.app/',
    tagline: 'Plataforma de ajedrez PWA con partidas online, bots por Elo y análisis con Stockfish.',
    problem: 'Enseñar ajedrez con tablero físico y video: sin métricas, sin práctica guiada entre clases.',
    highlights: [
      'Partidas en tiempo real contra bots o jugadores',
      'Puzzles, lecciones y entrenamiento por nivel',
      'Análisis con barra de evaluación y jugadas brillantes',
    ],
    stack: ['React', 'Vite', 'chess.js', 'Stockfish'],
  },
  {
    id: 'shopy',
    name: 'ShopyDashboard',
    category: 'Automatización',
    status: 'Online',
    url: 'https://shopy-dashboard-xi.vercel.app/',
    tagline: 'Un pipeline de agentes que arma, optimiza y despacha una tienda de dropshipping sola.',
    problem: 'Cada producto nuevo eran horas de redacción, diseño y carga manual antes de poder venderlo.',
    highlights: [
      'Agente de catálogo: fichas con IA y títulos SEO',
      'Agente de arte e inyección de componentes al theme',
      'Fulfillment automático con webhook firmado y tracking',
    ],
    stack: ['Python', 'FastAPI', 'Shopify GraphQL', 'IA'],
  },
];

const FILTERS = ['Todos', 'E-commerce', 'Gestión', 'Plataformas', 'Automatización'];

/* ---------- Preview en vivo, montada sólo cuando entra en pantalla ---------- */

const LivePreview = ({ url, name, interactive = false }) => {
  const holder = useRef(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const node = holder.current;
    if (!node || visible) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [visible]);

  useEffect(() => {
    if (!visible || loaded) return undefined;
    const t = setTimeout(() => setFailed((f) => (loaded ? f : true)), 12000);
    return () => clearTimeout(t);
  }, [visible, loaded]);

  return (
    <div className={`lp ${interactive ? 'lp-interactive' : ''}`} ref={holder}>
      <div className="lp-chrome">
        <span className="lp-dot" />
        <span className="lp-dot" />
        <span className="lp-dot" />
        <span className="lp-url">{url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
      </div>

      <div className="lp-viewport">
        {!loaded && !failed && <div className="lp-skeleton" aria-hidden="true" />}

        {failed && !loaded && (
          <div className="lp-fallback">
            <span className="lp-fallback-mark">{name.charAt(0)}</span>
            <p>Vista previa no disponible</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Abrir el sitio
            </a>
          </div>
        )}

        {visible && (
          <iframe
            src={url}
            title={`Vista previa de ${name}`}
            className={`lp-frame ${loaded ? 'is-loaded' : ''}`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            tabIndex={-1}
          />
        )}
      </div>
    </div>
  );
};

/* ---------------------------------- Modal --------------------------------- */

const CaseModal = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  if (!project) return null;

  const waText = encodeURIComponent(
    `Hola! Vi ${project.name} en el portfolio de Litoral Dev y quiero algo así para mi negocio.`
  );

  return (
    <div className="pf-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="pf-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
      >
        <button className="pf-modal-close" onClick={onClose} aria-label="Cerrar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="pf-modal-preview">
          <LivePreview url={project.url} name={project.name} interactive />
        </div>

        <div className="pf-modal-body">
          <div className="pf-tagrow">
            <span className="pf-badge">{project.category}</span>
            <span className="pf-status">{project.status}</span>
          </div>

          <h3>{project.name}</h3>
          <p className="pf-modal-tagline">{project.tagline}</p>

          <div className="pf-block">
            <span className="pf-block-label">El problema</span>
            <p>{project.problem}</p>
          </div>

          <div className="pf-block">
            <span className="pf-block-label">Lo que construimos</span>
            <ul className="pf-list">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="pf-block">
            <span className="pf-block-label">Stack</span>
            <div className="pf-chips">
              {project.stack.map((s) => (
                <span key={s} className="pf-chip">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="pf-modal-actions">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="pf-btn pf-btn-ghost">
              Ver el sitio en vivo
            </a>
            <a href={`${WHATSAPP}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="pf-btn pf-btn-primary">
              Quiero algo así
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------- Portfolio -------------------------------- */

const Portfolio = () => {
  const [filter, setFilter] = useState('Todos');
  const [open, setOpen] = useState(null);

  const visible = useMemo(
    () => (filter === 'Todos' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  const counts = useMemo(() => {
    const map = { Todos: PROJECTS.length };
    PROJECTS.forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1;
    });
    return map;
  }, []);

  const close = useCallback(() => setOpen(null), []);

  return (
    <section className="section portfolio" id="proyectos">
      <div className="container">
        <header className="pf-head">
          <span className="pf-eyebrow">Portfolio</span>
          <h2 className="pf-title">
            Nueve sistemas reales, <span className="pf-title-accent">funcionando ahora mismo</span>.
          </h2>
          <p className="pf-sub">
            No son maquetas ni plantillas. Todo lo que ves acá está desplegado y se puede abrir y usar.
          </p>

          <div className="pf-stats">
            <div className="pf-stat">
              <strong>9</strong>
              <span>proyectos en línea</span>
            </div>
            <div className="pf-stat">
              <strong>4</strong>
              <span>rubros distintos</span>
            </div>
            <div className="pf-stat">
              <strong>5-7</strong>
              <span>días de entrega</span>
            </div>
            <div className="pf-stat">
              <strong>$0</strong>
              <span>de abono de servidor</span>
            </div>
          </div>
        </header>

        <div className="pf-filters" role="tablist" aria-label="Filtrar proyectos">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              className={`pf-filter ${filter === f ? 'is-active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className="pf-filter-count">{counts[f] || 0}</span>
            </button>
          ))}
        </div>

        <div className="pf-grid">
          {visible.map((p) => (
            <article key={p.id} className="pf-card">
              <button
                className="pf-card-preview"
                onClick={() => setOpen(p)}
                aria-label={`Ver el caso ${p.name}`}
              >
                <LivePreview url={p.url} name={p.name} />
                <span className="pf-card-hoverhint">Ver el caso</span>
              </button>

              <div className="pf-card-body">
                <div className="pf-tagrow">
                  <span className="pf-badge">{p.category}</span>
                  <span className="pf-status">{p.status}</span>
                </div>

                <h3 className="pf-card-title">{p.name}</h3>
                <p className="pf-card-tagline">{p.tagline}</p>

                <div className="pf-chips">
                  {p.stack.slice(0, 3).map((s) => (
                    <span key={s} className="pf-chip">
                      {s}
                    </span>
                  ))}
                  {p.stack.length > 3 && <span className="pf-chip pf-chip-more">+{p.stack.length - 3}</span>}
                </div>

                <div className="pf-card-actions">
                  <button className="pf-link" onClick={() => setOpen(p)}>
                    Ver el caso <span aria-hidden="true">→</span>
                  </button>
                  <a
                    className="pf-link pf-link-muted"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Abrir sitio
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pf-cta">
          <p>¿Tu negocio necesita algo parecido a alguno de estos?</p>
          <a
            href={`${WHATSAPP}?text=${encodeURIComponent(
              'Hola! Vi el portfolio de Litoral Dev y quiero mi demo virtual gratuita.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pf-btn pf-btn-primary"
          >
            Pedir mi demo gratuita
          </a>
        </div>
      </div>

      {open && <CaseModal project={open} onClose={close} />}
    </section>
  );
};

export default Portfolio;
