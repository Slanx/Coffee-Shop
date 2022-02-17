import './footer.scss';
import Beans_logo from '../app/img/Beans_logo.svg';

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__nav">
                    <a href='#' className="footer__nav-item "><span>Coffee house</span></a>
                    <a href='#' className="footer__nav-item ">Our coffee</a>
                    <a href='#' className="footer__nav-item " >For your pleasure</a>
                </div>
                <img src={Beans_logo} alt="" className="footer__logo" />
            </div>
        </footer>
    );
}

export default Footer;