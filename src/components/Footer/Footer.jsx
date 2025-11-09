import { logo_ajude_ja_minimizada } from "../../assets/logo";
import { FooterContainer } from "./Footer.styles";


export const Footer = () => {
  return (
    <FooterContainer>
    <footer className=" border-top py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4 mb-4">
          <div className="col">
            <div className="d-flex align-items-center gap-2 mb-4">
           <img src={logo_ajude_ja_minimizada} alt="" width={'30px'} className="mt-2"/>
              <span className="fw-bold fs-5">AjudeJá</span>
            </div>
            <p className="small text-muted">
              Transformando boas intenções em ação real desde 2025.
            </p>
          </div>
          <div className="col">
            <h5 className="fw-semibold mb-4">Sobre</h5>
            <ul className="list-unstyled footer-links small">
              <li className="mb-2"><a href="#">Quem Somos</a></li>
              <li className="mb-2"><a href="#">Como Funciona</a></li>
   
            </ul>
          </div>
          <div className="col">
            <h5 className="fw-semibold mb-4">Ajuda</h5>
            <ul className="list-unstyled footer-links small">
              <li className="mb-2"><a href="#">Central de Ajuda</a></li>
              <li className="mb-2"><a href="#">Perguntas Frequentes</a></li>
              <li className="mb-2"><a href="#">Contato</a></li>
              <li className="mb-2"><a href="#">Termos de Uso</a></li>
            </ul>
          </div>
          <div className="col">
            <h5 className="fw-semibold mb-4">Redes Sociais</h5>
            <div className="d-flex gap-4">
              <a href="#" className="social-link">
                <i className="fa-brands fa-facebook fs-5" />
              </a>
              <a href="#" className="social-link">
                <i className="fa-brands fa-instagram fs-5" />
              </a>
              <a href="#" className="social-link">
                <i className="fa-brands fa-x-twitter fs-5" />
              </a>
              <a href="#" className="social-link">
                <i className="fa-brands fa-youtube fs-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-4 mt-4 border-top text-center small text-muted">
          <p className="mb-0">© 2025 AjudeJá. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
    </FooterContainer>
  );
};