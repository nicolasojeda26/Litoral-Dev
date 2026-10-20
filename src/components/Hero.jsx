import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero section animate-fade-in" id="inicio">
      <div className="container hero-container">
        
        {/* Left Column */}
        <div className="hero-left">
          <div className="hero-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            Sistemas de Venta y Automatización
          </div>
          
          <h1 className="hero-title">
            Automatizá tus ventas y organizá tu <span className="text-gradient">negocio digital</span>.
          </h1>
          
          <p className="hero-subtitle">
            Implementamos sistemas de catálogo autogestionable y plataformas de venta a medida. 
            Menos tiempo en chats, más control en tu negocio. Todo listo en 5 a 7 días.
          </p>
          
          <div className="hero-actions">
            <a 
              href="https://wa.me/5493795769425?text=Hola!%20Quiero%20solicitar%20mi%20Demo%20Virtual%20Gratuita%20para%20mi%20negocio." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              Solicitá tu Demo Virtual Gratuita
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#servicios" className="btn-outline">
              Ver Soluciones
            </a>
          </div>

          <div className="hero-tech-stack">
            <div className="tech-icons">
              <div className="tech-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
              <div className="tech-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>
              <div className="tech-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg></div>
            </div>
          </div>
        </div>

        {/* Right Column - Mockup Window */}
        <div className="hero-right">
          <div className="mockup-glow"></div>
          <div className="mockup-window glass-card">
            
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="dot bg-red"></span>
                <span className="dot bg-yellow"></span>
                <span className="dot bg-green"></span>
              </div>
              <div className="mockup-title">litoraldev.com.ar/sistema-demo</div>
            </div>
            
            <div className="mockup-body">
              <div className="mockup-grid">
                
                <div className="mockup-card border-blue">
                  <div className="mockup-icon icon-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <div className="mockup-text">
                    <h4>WhatsApp Inteligente</h4>
                    <p>Los pedidos se arman en la web y llegan detallados directamente a tu chat</p>
                  </div>
                </div>

                <div className="mockup-card border-purple">
                  <div className="mockup-icon icon-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15a4 4 0 0 0 4 4h9a5 5 0 1 0-.1-9.999 5.002 5.002 0 1 0-9.78 2.096A4.001 4.001 0 0 0 3 15z"></path></svg>
                  </div>
                  <div className="mockup-text">
                    <h4>Sincronización Cloud</h4>
                    <p>Integración con Google Sheets para controlar stock y precios externamente</p>
                  </div>
                </div>

                <div className="mockup-card border-green">
                  <div className="mockup-icon icon-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </div>
                  <div className="mockup-text">
                    <h4>Panel Autogestionable</h4>
                    <p>Subí, bajá y editá tus productos en segundos desde tu celular</p>
                  </div>
                </div>

                <div className="mockup-card border-orange">
                  <div className="mockup-icon icon-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                  </div>
                  <div className="mockup-text">
                    <h4>Cero Abono Servidor</h4>
                    <p>Despliegue ágil en Vercel con abonos de servidor totalmente gratis</p>
                  </div>
                </div>

              </div>

              <div className="mockup-stats">
                <div className="stat">
                  <span className="stat-value text-blue">$0/mes</span>
                  <span className="stat-label">Costo de Servidor</span>
                </div>
                <div className="stat">
                  <span className="stat-value text-purple">5-7 Días</span>
                  <span className="stat-label">Entrega Rápida</span>
                </div>
                <div className="stat">
                  <span className="stat-value text-green">Garantía</span>
                  <span className="stat-label">Analista en Sistemas</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Hero;
