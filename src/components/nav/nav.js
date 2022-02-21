import './nav.scss';

import {Component} from 'react';

class Nav extends Component{
    constructor(props){
        super(props);
    }

    onUpdatePageNav = (e) =>{
        const link = e.target.name;
        this.props.onUpdatePage(link);
    }


    render(){


        return(
        <div className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href='# ' className="nav__link" onClick={this.onUpdatePageNav} name = 'home'>Coffee house</a></li>
                <li className="nav__item"><a href='# ' className="nav__link" name = 'coffee' onClick={this.onUpdatePageNav}>Our coffee</a></li>
                <li className="nav__item"><a href='# ' className="nav__link" name = 'pleasure' onClick={this.onUpdatePageNav}>For your pleasure</a></li>
            </ul>
        </div>
        );
    }
}

export default Nav;