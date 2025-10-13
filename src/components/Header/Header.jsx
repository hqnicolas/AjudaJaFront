import { Nav, Navbar, Container } from 'react-bootstrap';
import { CenterNav, HeaderContainer } from './Header.styles.jsx';
import { logo_ajude_ja_minimizada } from '../../assets/logo/index.jsx';
import Button from '../Button/Button.jsx';

export default function Header() {
    return (

        <HeaderContainer className="d-flex justify-content-between align-items-center">
            <div className="navbar-left">
                    <img
                        src={logo_ajude_ja_minimizada}
                        alt="Logo AjudeJá"
                    />
            </div>
            <div className="navbar-center">
                <CenterNav>
                    <Nav.Link href="#campanhas">Campanhas</Nav.Link>
                    <Nav.Link href="#ongs">Ong's</Nav.Link>
                    <Nav.Link href="#noticias">Notícias</Nav.Link>
                    <Nav.Link href="#sobre">Sobre nós</Nav.Link>
                </CenterNav>
            </div>

            <div className="navbar-right">
              <Button
              text={'Entrar'}
              typeButton={'primary'}
              />
            </div>
        </HeaderContainer>

    );
}
