import React from 'react';
import Portfolio from './components/Portfolio';
import './index.css';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary/30 selection:text-white">
      {/* Navbar */}
      <nav className="w-full py-8 px-6 md:px-12 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Using a placeholder SVG for the logo, aligning it cleanly to the left */}
          <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center border border-border">
            <span className="text-primary font-bold text-xl">L</span>
          </div>
          <span className="font-bold text-xl tracking-tight">Litoral Dev</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
          <a href="#soluciones" className="hover:text-primary transition-colors">Soluciones</a>
          <a href="#proyectos" className="hover:text-primary transition-colors">Proyectos</a>
          <a href="#diferenciales" className="hover:text-primary transition-colors">Diferenciales</a>
        </div>
        <a href="#contacto" className="hidden md:inline-flex px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-primary/10 transition-colors">
          Contactar
        </a>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 text-xs font-medium text-primary mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Software Engineering Agency
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-8 text-balance max-w-5xl">
            Software a Medida para Empresas que No Improvisan.
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mb-12 text-balance leading-relaxed">
            Soluciones tecnológicas avanzadas dirigidas por un Analista Programador en Sistemas. Automatizamos tus operaciones sin plantillas genéricas ni costos fijos de servidor.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <a 
              href="#demo" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-[#020617] rounded-full font-bold text-lg hover:bg-primary-hover transition-all hover:scale-105 active:scale-95"
            >
              Solicitar Demo Virtual
            </a>
            <a 
              href="#proyectos" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-primary rounded-full font-bold text-lg border border-primary hover:bg-primary/10 transition-all"
            >
              Ver Proyectos Reales
            </a>
          </div>
        </section>

        {/* Solutions Grid */}
        <section id="soluciones" className="py-24 px-6 md:px-12 bg-card/20 border-y border-border/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center">Infraestructura Digital <span className="text-primary">Premium</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Card 1 */}
              <div className="group bg-card border border-border p-8 md:p-12 hover:border-primary/50 transition-colors flex flex-col">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-8 border border-border group-hover:border-primary/30 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">E-commerce de Alta Velocidad</h3>
                <p className="text-foreground/60 leading-relaxed mt-auto">
                  Catálogos autogestionables con enrutamiento directo a WhatsApp. Rendimiento optimizado para conversión instantánea.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group bg-card border border-border p-8 md:p-12 hover:border-primary/50 transition-colors flex flex-col">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-8 border border-border group-hover:border-primary/30 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">Mini-ERP & Dashboards</h3>
                <p className="text-foreground/60 leading-relaxed mt-auto">
                  Control de inventario, analítica financiera y cálculo automático de punto de equilibrio en tiempo real.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group bg-card border border-border p-8 md:p-12 hover:border-primary/50 transition-colors flex flex-col">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-8 border border-border group-hover:border-primary/30 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">Desarrollos Verticales</h3>
                <p className="text-foreground/60 leading-relaxed mt-auto">
                  Plataformas inmobiliarias, sistemas de sorteos automatizados y aplicaciones específicas para tu industria.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Differentials Section */}
        <section id="diferenciales" className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight sticky top-24">
                El Valor Real.
              </h2>
            </div>
            <div className="md:w-2/3 flex flex-col gap-16">
              
              <div className="flex flex-col gap-4">
                <div className="text-primary font-mono text-sm tracking-widest uppercase">01</div>
                <h3 className="text-2xl font-bold tracking-tight">Dirección Profesional Calificada</h3>
                <p className="text-foreground/60 text-lg leading-relaxed">
                  Código estable, lógico y mantenible. No improvisamos con constructores visuales, diseñamos arquitecturas de software robustas adaptadas a las reglas de tu negocio.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="text-primary font-mono text-sm tracking-widest uppercase">02</div>
                <h3 className="text-2xl font-bold tracking-tight">Cero Costos Fijos Mensuales</h3>
                <p className="text-foreground/60 text-lg leading-relaxed">
                  Desplegamos infraestructura moderna en la nube. Olvídate de los pagos recurrentes por servidores o plantillas; las ganancias de tu sistema son 100% tuyas.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="text-primary font-mono text-sm tracking-widest uppercase">03</div>
                <h3 className="text-2xl font-bold tracking-tight">Plazos de Entrega Estrictos</h3>
                <p className="text-foreground/60 text-lg leading-relaxed">
                  Entendemos que el tiempo es dinero. Nuestros procesos estandarizados nos permiten tener sistemas funcionales y desplegados en 5 a 7 días hábiles.
                </p>
              </div>

            </div>
          </div>
        </section>
        {/* Portfolio / Casos reales */}
        <Portfolio />
      </main>

      <footer className="py-12 border-t border-border/50 text-center text-foreground/40 text-sm">
        <p>© {new Date().getFullYear()} Litoral Dev. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
