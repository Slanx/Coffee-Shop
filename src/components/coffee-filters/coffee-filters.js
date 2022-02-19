import './coffee-filters.scss';
import {Component} from 'react';


class CoffeeFilters extends Component{
    constructor(props){
        super(props);
        this.state ={
            filter: ''
        }
    }

    onUpdateFilter = (e) =>{
        let currentFilter = e.target.value;
        if (this.state.filter === currentFilter){
            currentFilter = '';
        } 
        this.setState(({filter}) =>{
                return{
                    filter: currentFilter 
                } 
        })
        this.props.onUpdateFilter(currentFilter);
    }


    render(){
        const Buttons = [
            {name:'Brazil', key:1},
            {name:'Kenya', key:2},
            {name:'Columbia', key:3}
        ];


        const btnList = Buttons.map(({name, key})  =>{
            let btnClassName = 'filters__btn';
            if (this.state.filter === name){
                btnClassName += ` btn__active` 
            }
            return (<button className={btnClassName} type="button" value={name} onClick = {this.onUpdateFilter} key={key}>{name}</button>);
        }) 


        return(
            <div className="filters">
                <div className="filters__descr">
                    <span>Or filter</span>
                </div>
                <div className="filters__btns-gruop">
                    {btnList}
                </div>
            </div>
        );
    }
}

export default CoffeeFilters;