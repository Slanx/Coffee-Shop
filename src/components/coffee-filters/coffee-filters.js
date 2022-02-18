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
        let filter = e.target.value;
        if (this.state.filter){
            filter = '';
        }
        this.setState({filter})
        this.props.onUpdateFilter(filter);
    }


    render(){
        const Buttons = [
            {name:'Brazil'},
            {name:'Kenya'},
            {name:'Columbia'}
        ];

        const btnList = Buttons.map(item =>{
            return <button className="filters__btn" type="button" value={item.name} onClick = {this.onUpdateFilter}>{item.name}</button>;
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