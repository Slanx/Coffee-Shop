import './coffee-item.scss';


const CoffeeItem = ({src, tittle, price}) =>{
    return(
        <div className="coffee-item">
            <img src={src} alt="SolimoCoffee pic" className="coffee-item__image" />
            <h3 className="coffee-item__tittle">
            {tittle}
            </h3>
            <span className='coffee-item__price'>{price + '$'}</span>
        </div>
    )
}

export default CoffeeItem;