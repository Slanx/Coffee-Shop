import Beans_logo from '../app/img/Beans_logo.svg';


import './home.scss'
import CoffeeItem from '../coffee-item/coffee-item';




const Home = ({data}) =>{

    const List = data.map(({src, tittle, price, country, key}) => {
        if(key < 4){
            return (<CoffeeItem src={src} tittle={tittle} price ={price} country ={country} key={key} />)
        } 
    })

    return(
        <div className="home">
                <div className="home__info">
                    <div className="container">
                        <h2 className="home__info-tittle">About Us</h2>
                        <img src={Beans_logo} alt="" className="home__info-logo" />
                        <div className="home__info-descr">
                            <p>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
    Afraid at highly months do things on at. Situation recommend objection do intention
    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
    met spot shy want. Children me laughing we prospect answered followed. At it went
    is song that held help face.
                            </p>
                            <p>
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
    horrible but confined day end marriage. Eagerness furniture set preserved far
    recommend. Did even but nor are most gave hope. Secure active living depend son
    repair day ladies now.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="home__product">
                    <div className="container">
                        <h2 className="home__product-tittle">
                            Our best
                        </h2>
                        <div className="home__product-list">
                            {List}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Home;