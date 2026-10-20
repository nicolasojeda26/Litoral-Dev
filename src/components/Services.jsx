import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="section services" id="servicios">
      <div className="container">
        
        <div className="services-intro">
          <h2 className="section-title">Nuestras Soluciones de Venta</h2>
          <p className="section-subtitle">
            No desarrollamos simples páginas web. Creamos sistemas inteligentes para vender más, automatizar tus procesos y ahorrar tiempo valioso.
          </p>
        </div>

        {/* 1. Planes Base */}
        <div className="services-group">
          <div className="plans-grid">
            
            {/* Plan 1: Catálogo y Pedidos - DESTACADO */}
            <div className="glass-card premium-card featured-plan">
              <div className="plan-badge">El Más Elegido</div>
              
              <div className="premium-card-content">
                <div className="plan-header">
                  <div className="plan-title-wrapper">
                    <span className="plan-number">📦 PLAN 01</span>
                    <h3>Sistema de Catálogo y Pedidos Automatizado</h3>
                  </div>
                  <div className="plan-price">
                    <span className="price-amount">$70.000</span>
                    <span className="price-tag">Pago único por desarrollo</span>
                  </div>
                </div>
                
                <p className="card-description">
                  La solución ideal para locales de ropa, bazares o gastronomía que se saturan respondiendo mensajes y quieren que sus clientes compren de forma autónoma.
                </p>

                <div className="key-value-prop">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12.5l3 3 5-6"></path></svg>
                  <span><strong>Gran Gancho:</strong> Alojado en infraestructura en la nube moderna con <strong>Cero Abonos Mensuales de Servidor</strong> (Desplegado en Vercel).</span>
                </div>

                <h4 className="features-headline">¿Qué incluye este sistema?</h4>
                <ul className="check-list">
                  <li>
                    <strong>Diseño E-commerce Ultra Rápido:</strong> Desarrollado con arquitectura moderna React + Vite para carga instantánea.
                  </li>
                  <li>
                    <strong>Catálogo Autogestionable:</strong> Filtros avanzados por categoría, talles, colores o variantes de producto.
                  </li>
                  <li>
                    <strong>Enrutamiento Inteligente de Pedidos:</strong> El carrito se arma en la web y llega al WhatsApp del local totalmente detallado, limpio y ordenado.
                  </li>
                  <li>
                    <strong>Panel de Control Local:</strong> Interfaz intuitiva para subir, bajar o editar productos en segundos desde tu celular o laptop sin depender de nadie.
                  </li>
                  <li>
                    <strong>Garantía Técnica Completa:</strong> Código limpio, escalable y optimizado para SEO, entregado en tan solo 5 a 7 días.
                  </li>
                </ul>
              </div>

              <div className="premium-card-footer flex-footer">
                <div className="authority-seal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  <span>Desarrollado y garantizado por un <b>Analista Programador en Sistemas</b></span>
                </div>
                <a 
                  href="https://wa.me/5493794021813?text=Hola!%20Quiero%20solicitar%20mi%20Demo%20Virtual%20Gratuita%20del%20Plan%20Catalogo%20Automatizado."
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  Solicitar Demo Gratis
                </a>
              </div>
            </div>

            {/* Plan 2: Plataformas Específicas */}
            <div className="glass-card premium-card side-plan">
              <div className="premium-card-content">
                <span className="plan-number">🎟️ PLAN 02</span>
                <h3>Plataformas Específicas a Medida</h3>
                <p className="card-description">
                  Desarrollos verticales de alta complejidad técnica pensados para nichos concretos. Operan bajo presupuesto personalizado.
                </p>

                <div className="vertical-solutions">
                  
                  {/* Sorteos */}
                  <div className="vertical-solution-item">
                    <div className="solution-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M6 21V17"></path><path d="M18 21V17"></path><path d="M12 17V3"></path></svg>
                    </div>
                    <div className="solution-text">
                      <h5>Sistema de Sorteos Automatizado</h5>
                      <p>
                        Plataforma donde los participantes reservan números en tiempo real, cargan su comprobante de pago directo y el administrador valida desde un panel privado, eliminando planillas manuales de Excel.
                      </p>
                    </div>
                  </div>

                  {/* Inmobiliaria */}
                  <div className="vertical-solution-item">
                    <div className="solution-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    </div>
                    <div className="solution-text">
                      <h5>Plataforma Inmobiliaria Digital</h5>
                      <p>
                        Sitio de alto impacto visual para catálogo de propiedades en alquiler y venta. Incluye filtros de búsqueda avanzada, fichas técnicas completas y formularios de contacto directo por propiedad.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="premium-card-footer">
                <p className="custom-budget-note">Consultá la factibilidad de tu idea y obtené un diseño a medida de tu flujo de trabajo.</p>
                <a 
                  href="https://wa.me/5493794021813?text=Hola!%20Me%20interesa%20solicitar%20una%20Demo%20Virtual%20para%20una%20Plataforma%20a%20Medida."
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline btn-full-width"
                >
                  Consultar Presupuesto
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Menú de Integraciones Avanzadas */}
        <div className="services-group integrations-section">
          <div className="section-header-centered">
            <span className="section-badge">MÓDULOS ADICIONALES</span>
            <h3>Menú de Integraciones Avanzadas</h3>
            <p>Optimizá tu plan base con módulos de automatización avanzados para facturar en piloto automático.</p>
          </div>

          <div className="integrations-grid">
            
            {/* Integración 1 */}
            <div className="glass-card integration-card">
              <div className="integration-icon-wrapper mp-color">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
              </div>
              <h4>Mercado Pago Pro</h4>
              <span className="integration-tag">Pasarela Automatizada</span>
              <p>
                Integración de checkout transparente para cobrar con tarjetas de débito, crédito o dinero en cuenta en vivo. Configuración de webhooks para que el sistema reconozca el pago e impacte al instante en el pedido.
              </p>
            </div>

            {/* Integración 2 */}
            <div className="glass-card integration-card">
              <div className="integration-icon-wrapper sheets-color">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <h4>Stock Inteligente</h4>
              <span className="integration-tag">Sincronización Cloud</span>
              <p>
                Conexión bidireccional en la nube con Google Sheets. Si cambiás un precio o modificás el stock en tu planilla, impacta automáticamente en la web, permitiendo llevar tu caja diaria y stock de forma externa.
              </p>
            </div>

            {/* Integración 3 */}
            <div className="glass-card integration-card">
              <div className="integration-icon-wrapper wa-color">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <h4>WhatsApp Business</h4>
              <span className="integration-tag">Flujos Automatizados</span>
              <p>
                Configuración de flujos y respuestas rápidas automatizadas dentro del chat de tu local para educar a tus clientes y derivarlos directamente hacia el sistema web de compras de forma eficiente.
              </p>
            </div>

          </div>
        </div>

        {/* 3. Retención: Abono de Gestión */}
        <div className="glass-card abono-card">
          <div className="abono-content">
            <div className="abono-info">
              <span className="abono-badge">VALOR AGREGADO OPCIONAL</span>
              <h3>Abono de Gestión de Contenido y Soporte</h3>
              <p className="abono-desc">
                El servidor sigue siendo 100% gratuito. Sin embargo, para los comerciantes que no tienen tiempo de actualizar su catálogo, ofrecemos un fee mensual fijo para delegar la carga operativa por completo.
              </p>
            </div>
            
            <div className="abono-benefits">
              <ul className="abono-list">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Carga de fotos de nuevas temporadas o ingresos de mercadería.</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Modificación masiva de precios ante inflación.</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Actualización de banners publicitarios y ofertas especiales.</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Mantenimiento preventivo general de tu panel administrativo.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="abono-cta-wrapper">
            <span className="abono-delegation">Delegá el 100% de la carga operativa</span>
            <a 
              href="https://wa.me/5493794021813?text=Hola!%20Quiero%20saber%20mas%20sobre%20el%20Abono%20Mensual%20de%20Gestion%20y%20Soporte."
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline"
            >
              Consultar Fee Mensual
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
