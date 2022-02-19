import './nav.scss';

import {Component} from 'react';

class Nav extends Component{
    render(){
        return(
        <div className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href='# ' className="nav__link">Coffee house</a></li>
                <li className="nav__item"><a href='# ' className="nav__link">Our coffee</a></li>
                <li className="nav__item"><a href='# ' className="nav__link">For your pleasure</a></li>
            </ul>
        </div>
        );
    }
}

export default Nav;