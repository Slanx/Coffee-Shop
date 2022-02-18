import './coffee.scss';

import Beans_logo from '../app/img/Beans_logo.svg';
import Picture from './img/Group.jpg';

import CoffeeItem from '../coffee-item/coffee-item';
import CoffeeSearch from '../coffee-search/coffee-search';
import CoffeeFilters from '../coffee-filters/coffee-filters';


const Coffee = ({data, onUpdateSearch, onUpdateFilter}) =>{

    const List = data.map((item) =>{
        return(<CoffeeItem src={item.src} tittle={item.tittle} price ={item.price} country ={item.country} key={item.key} />);
    })
    
    return(
        <div className="coffee">
            <div className="container">
                <div className="coffee__info">
                    <div className="coffee__picture">
                        <img src={Picture} alt="" className="picture" />
                    </div>
                    <div className="coffee__descr">
                    <h2 className="coffee__tittle"> About our beans</h2>
                    <img src={Beans_logo} alt="" className="coffee__logo" />
                    <div className="coffee__about">
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                        <p>Afraid at highly months do things on at. Situation 
                            <br/>
                            recommend objection do intention
                            <br/>
                            so questions.
                            <br/>
                            As greatly removed calling pleased improve an. Last ask him cold feel
                            <br/>
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            <br/> 
                            is song that held help face.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="coffee__catalog">
                    <div className="coffee__services">
                        <CoffeeSearch onUpdateSearch = {onUpdateSearch} />
                        <CoffeeFilters onUpdateFilter = {onUpdateFilter} />
                    </div>
                    <div className="coffee__list">
                        {List}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coffee;