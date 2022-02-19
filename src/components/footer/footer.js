import './footer.scss';
import Beans_logo from '../app/img/Beans_logo.svg';
import Nav from '../nav/nav';

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__nav">
                    <Nav />
                </div>
                <div className="footer__logo logo">
                    <img src={Beans_logo} alt="" className="logo__item" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;