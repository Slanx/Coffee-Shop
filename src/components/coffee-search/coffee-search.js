import './coffee-search.scss';
import { Component } from 'react';



class CoffeeSearch extends Component{
    constructor(props){
        super(props);
        this.state ={
            term:''
        }
    }

    onUpdateSearch = (e) =>{
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }
    
    render(){
        return(
            <div className="search">
                <div className="search__descr">
                    <span>Looking for</span>
                </div>
                <input type="text" placeholder='start typing here...' onChange={this.onUpdateSearch} value ={this.state.term}/>
            </div>
            );
    }
}

export default CoffeeSearch;