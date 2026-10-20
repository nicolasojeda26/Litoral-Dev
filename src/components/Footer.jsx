import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="section footer">
      <div className="container">
        <div className="footer-cta glass-card">
          <h2>Llevá tu negocio al siguiente nivel operativo.</h2>
          <p>Solicitá hoy mismo tu Demo Virtual Gratuita y mira cómo funciona.</p>
          <a 
            href="https://wa.me/5493794021813?text=Hola!%20Quiero%20solicitar%20mi%20Demo%20Virtual%20Gratuita%20para%20mi%20negocio." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary btn-large"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            Solicitar Demo Gratis
          </a>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-logo">
            <span className="logo-text">&lt;/&gt; litoral.dev</span>
          </div>
          <div className="footer-social">
            <a href="https://instagram.com/litoral.dev" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span>@litoral.dev</span>
            </a>
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Litoral.dev. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
