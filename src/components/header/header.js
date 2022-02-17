import './header.scss';
import beans__logo from './img/beans__logo.svg'

const Header = () =>{
    return(
        <header className="header">
            <nav className="header__nav">
                <a href='#' className="header__nav-item"><span>Coffee house</span></a>
                <a href='#' className="header__nav-item">Our coffee</a>
                <a href='#' className="header__nav-item">For your pleasure</a>
            </nav>
            <div className='header__content'>
            <h2 className="header__tittle">Everything You Love About Coffee</h2>
            <img src={beans__logo} alt="logo" />
            <div className="header__descr">
                <p>
                    We makes every day full of energy and taste
                </p>
                <p>
                    Want to try our beans?
                </p>
            </div>
            <a href='#' className="header__link">More</a>
            </div>
        </header>
    );
}

export default Header;
