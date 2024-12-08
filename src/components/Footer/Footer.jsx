import '../Footer/Footer.css'

const Footer = () => {
    return (
    <div>
        <footer className="footer">
        
            <div className="footer-container">
                <div className="footer-section">
            
                    <h4>Sobre Nosotros</h4>
                    <p>
                        Somos una tienda online dedicada a ofrecer los mejores productos a
                        nuestros clientes.
                    </p>
                </div>
                <div className="footer-section">
            
                    <h4>Contacto</h4> 
                    <p>Email: contacto@tiendaonline.com</p>
                    <p>Teléfono: +123 456 7890</p>

                </div>
                
                <div className="footer-section">
            
                    <h4>Síguenos</h4> 
                    <a href="https://www.facebook.com/" target="_blank">Facebook</a> 
                    <a href=".https://www.instagram.com/" target="_blank">Instagram</a>
                    <a href="https://x.com/" target="_blank">Twitter</a>

                </div>
            </div>
        <p className="footer-copy">
            &copy; 2024 Tienda Online. Todos los derechos reservados.
        </p>
        </footer>
    </div>
    );
};

export default Footer;
