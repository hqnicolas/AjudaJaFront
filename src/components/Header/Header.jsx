
import { CenterNav, HeaderContainer } from './Header.styles.jsx';
import { logo_ajude_ja_minimizada } from '../../assets/logo/index.jsx';
import Button from '../Button/Button.jsx';
import { Link } from 'react-router-dom';

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
                    <Link to="campanhas">Campanhas</Link>
                    <Link to="ongs">Ong's</Link>
                    <Link to="noticias">Notícias</Link>
                    <Link to="sobre">Sobre nós</Link>
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
