import './content.scss';
import Beans_logo from '../app/img/Beans_logo.svg';
import SolimoCoffee from './img/SolimoCoffeeBeans.jpg';
import AromisoCoffee from './img/AromisoCoffee.jpg';
import PrestoCoffee from './img/PrestoCoffeeBeans.jpg';


const Content = () =>{
    return(
        <div className="content">
                <div className="content__info">
                    <div className="container">
                        <h2 className="content__info-tittle">About Us</h2>
                        <img src={Beans_logo} alt="" className="content__info-logo" />
                        <div className="content__info-descr">
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
                <div className="content__product">
                    <div className="container">
                        <h2 className="content__product-tittle">
                            Our best
                        </h2>
                        <div className="content__product-list">
                            <div className="content__product-item">
                                <img src={SolimoCoffee} alt="SolimoCoffee pic" className="content__product-image" />
                                <h3 className="content__product-item-tittle">
                                Solimo Coffee Beans 2 kg
                                </h3>
                                <span className='content__product-item-price'>10.73$</span>
                            </div>
                            <div className="content__product-item">
                                <img src={PrestoCoffee} alt="SolimoCoffee pic" className="content__product-image" />
                                <h3 className="content__product-item-tittle">
                                Presto Coffee Beans 1 kg
                                </h3>
                                <span className='content__product-item-price'>15.99$</span>
                            </div>
                            <div className="content__product-item">
                                <img src={AromisoCoffee} alt="SolimoCoffee pic" className="content__product-image" />
                                <h3 className="content__product-item-tittle">
                                AROMISTICO Coffee 1 kg
                                </h3>
                                <span className='content__product-item-price'>6.99$</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Content;