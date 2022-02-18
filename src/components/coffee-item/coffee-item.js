import './coffee-item.scss';


const CoffeeItem = ({src, tittle, price, country}) =>{
    return(
        <div className="coffee-item">
            <div className="coffee-item__image">
                <img src={src} alt="SolimoCoffee pic" className="image" />
            </div>
            <h3 className="coffee-item__tittle">
            {tittle}
            </h3>
            <div className='coffee-item__country'>
                {country}
            </div>
            <div className='coffee-item__price'>
                {price + '$'}
            </div>
        </div>
    )
}

export default CoffeeItem;