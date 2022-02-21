import './header.scss';
import beans__logo from './img/beans__logo.svg'

import Nav from '../nav/nav';

const Header = ({onUpdatePage}) =>{
    return(
        <header className="header">
            <nav className="header__nav">
                <Nav onUpdatePage = {onUpdatePage} />
            </nav>
            <div className="container">
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
                    <div className="header__link">
                        <a href='# ' className="header__link-item">More</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
