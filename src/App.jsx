import React from 'react';
import Portfolio from './components/Portfolio';
import logo from './assets/logo-horizontal.svg';
import logoNegativo from './assets/logo-horizontal-negativo.svg';
import './index.css';

const WHATSAPP = 'https://wa.me/5493795769425';
const WA_DEMO = `${WHATSAPP}?text=${encodeURIComponent('Hola! Quiero solicitar mi Demo Virtual Gratuita para mi negocio.')}`;
const WA_CONTACTO = `${WHATSAPP}?text=${encodeURIComponent('Hola! Vi la web de Litoral Dev y quiero hacer una consulta.')}`;

function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navbar */}
      <nav className="w-full py-6 px-6 md:px-12 max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center py-1" aria-label="Litoral Dev, inicio">
          <img src={logo} alt="Litoral Dev" width="612" height="120" className="h-9 md:h-10 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-noche-suave">
          <a href="#soluciones" className="hover:text-rio transition-colors">Soluciones</a>
          <a href="#proyectos" className="hover:text-rio transition-colors">Proyectos</a>
          <a href="#diferenciales" className="hover:text-rio transition-colors">Diferenciales</a>
        </div>
        <a href={WA_CONTACTO} target="_blank" rel="noopener noreferrer" className="btn btn-contorno-noche px-4 md:px-5 py-2.5 text-sm">
          Contactar
        </a>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-16 pb-24 md:pt-24 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-arena-200 text-xs font-semibold uppercase tracking-[0.08em] text-noche mb-8">
            <span className="w-2 h-2 rounded-full bg-atardecer animate-pulse"></span>
            Software Engineering Agency
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.04] mb-8 text-balance max-w-5xl">
            Software a Medida para Empresas que <span className="resaltado">No Improvisan.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-noche-suave max-w-3xl mb-12 text-balance leading-relaxed">
            Soluciones tecnológicas avanzadas dirigidas por un Analista Programador en Sistemas. Automatizamos tus operaciones sin plantillas genéricas ni costos fijos de servidor.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <a 
              href={WA_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accion w-full sm:w-auto px-8 py-4 text-lg"
            >
              Solicitar Demo Virtual
            </a>
            <a 
              href="#proyectos"
              className="btn btn-contorno w-full sm:w-auto px-8 py-4 text-lg"
            >
              Ver Proyectos Reales
            </a>
          </div>
        </section>

        {/* Solutions Grid */}
        <section id="soluciones" className="relative overflow-hidden pt-24 pb-44 px-6 md:px-12 bg-rio text-white">
          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-[2.5rem] md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-16 text-center">Infraestructura Digital <span className="text-sol">Premium</span></h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 */}
              <div className="tarjeta bg-arena text-noche rounded-card p-8 md:p-10 flex flex-col">
                <div className="w-12 h-12 rounded-full bg-atardecer flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-noche" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-2xl font-extrabold leading-tight mb-4 tracking-tight">E-commerce de Alta Velocidad</h3>
                <p className="text-noche-suave leading-relaxed mt-auto">
                  Catálogos autogestionables con enrutamiento directo a WhatsApp. Rendimiento optimizado para conversión instantánea.
                </p>
              </div>

              {/* Card 2 */}
              <div className="tarjeta bg-arena text-noche rounded-card p-8 md:p-10 flex flex-col">
                <div className="w-12 h-12 rounded-full bg-atardecer flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-noche" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="text-2xl font-extrabold leading-tight mb-4 tracking-tight">Mini-ERP & Dashboards</h3>
                <p className="text-noche-suave leading-relaxed mt-auto">
                  Control de inventario, analítica financiera y cálculo automático de punto de equilibrio en tiempo real.
                </p>
              </div>

              {/* Card 3 */}
              <div className="tarjeta bg-arena text-noche rounded-card p-8 md:p-10 flex flex-col">
                <div className="w-12 h-12 rounded-full bg-atardecer flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-noche" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <h3 className="text-2xl font-extrabold leading-tight mb-4 tracking-tight">Desarrollos Verticales</h3>
                <p className="text-noche-suave leading-relaxed mt-auto">
                  Plataformas inmobiliarias, sistemas de sorteos automatizados y aplicaciones específicas para tu industria.
                </p>
              </div>
            </div>
          </div>

          {/* Motivo de olas del isotipo: arena sobre río */}
          <svg className="olas left-0 bottom-10 w-full h-[66px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="olas-costanera" width="90" height="66" patternUnits="userSpaceOnUse">
                <g transform="scale(1.5)" fill="none" stroke="currentColor" strokeWidth="9">
                  <path d="M-30 12c10-8 20-8 30 0s20 8 30 0 20-8 30 0 20 8 30 0" />
                  <path d="M-30 30c10-8 20-8 30 0s20 8 30 0 20-8 30 0 20 8 30 0" opacity=".55" />
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#olas-costanera)" />
          </svg>
        </section>

        {/* Differentials Section */}
        <section id="diferenciales" className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="md:w-1/3">
              <h2 className="text-[2.5rem] md:text-6xl font-extrabold tracking-tighter leading-none sticky top-24">
                El Valor Real.
              </h2>
            </div>
            <div className="md:w-2/3 flex flex-col gap-16">
              
              <div className="flex flex-col gap-4">
                <div className="font-display font-extrabold text-rio text-5xl md:text-6xl leading-none tracking-tighter">01</div>
                <h3 className="text-2xl font-extrabold leading-tight tracking-tight">Dirección Profesional Calificada</h3>
                <p className="text-noche-suave text-lg leading-relaxed">
                  Código estable, lógico y mantenible. No improvisamos con constructores visuales, diseñamos arquitecturas de software robustas adaptadas a las reglas de tu negocio.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="font-display font-extrabold text-rio text-5xl md:text-6xl leading-none tracking-tighter">02</div>
                <h3 className="text-2xl font-extrabold leading-tight tracking-tight">Cero Costos Fijos Mensuales</h3>
                <p className="text-noche-suave text-lg leading-relaxed">
                  Desplegamos infraestructura moderna en la nube. Olvídate de los pagos recurrentes por servidores o plantillas; las ganancias de tu sistema son 100% tuyas.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="font-display font-extrabold text-rio text-5xl md:text-6xl leading-none tracking-tighter">03</div>
                <h3 className="text-2xl font-extrabold leading-tight tracking-tight">Plazos de Entrega Estrictos</h3>
                <p className="text-noche-suave text-lg leading-relaxed">
                  Entendemos que el tiempo es dinero. Nuestros procesos estandarizados nos permiten tener sistemas funcionales y desplegados en 5 a 7 días hábiles.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Portfolio / Casos reales */}
        <Portfolio />
      </main>

      <footer className="bg-noche py-12 px-6 border-t border-arena/15 flex flex-col items-center gap-6 text-center text-noche-claro text-sm">
        <img src={logoNegativo} alt="Litoral Dev" width="612" height="120" className="h-9 w-auto" />
        <p>© {new Date().getFullYear()} Litoral Dev. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
