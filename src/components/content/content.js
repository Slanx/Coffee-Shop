import './content.scss';
import SolimoCoffee from './img/SolimoCoffeeBeans.jpg';
import AromisoCoffee from './img/AromisoCoffee.jpg';
import PrestoCoffee from './img/PrestoCoffeeBeans.jpg';

import { Component } from 'react';
import Home from '../home/home';
import Coffee from '../coffee/coffee';

class Content extends Component{
    constructor(props){
        super(props);
        this.state ={
            data: [
                {src:SolimoCoffee, tittle:'Solimo Coffee Beans 2 kg', price:10.73, country:'Brazil', key:1},
                {src:PrestoCoffee, tittle:'Presto Coffee Beans 1 kg', price:15.99, country:'Kenya', key:2},
                {src:AromisoCoffee, tittle:'AROMISTICO Coffee 1 kg', price:6.99, country:'Kenya', key:3},
                {src:AromisoCoffee, tittle:'AROMISTICO Coffee 1 kg', price:6.99, country:'Brazil', key:4},
                {src:AromisoCoffee, tittle:'AROMISTICO Coffee 1 kg', price:6.99, country:'Columbia', key:5},
                {src:AromisoCoffee, tittle:'AROMISTICO Coffee 1 kg', price:6.99, country:'Columbia', key:6}
            ],
            term: '',
            filter: ''
        }
    }
    

    SearchCoffee = (data, term) =>{
        if (term.length === 0) {
            return data;
        }

        return data.filter(item => {
            return item.tittle.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onUpdateFilter = (filter) => {
        this.setState({filter});
    }

    FilterCoffee = (data, filter) =>{
        if (filter.length === 0){
            return data;
        }else{
            return data.filter(item =>{
                return item.country === filter;
            })
        }
    }

    FilterPage = (data, pageFilter) =>{
        const pageObj = data.filter(item =>{
            return item.filter === pageFilter;
        });
        return pageObj[0].name;
    }

    render(){
        const {data, term, filter} = this.state;
        const {page} = this.props;
        
        const visibleData = this.FilterCoffee(this.SearchCoffee(data, term), filter);

        const CoffeePage =<Coffee 
        data={visibleData} 
        onUpdateSearch ={this.onUpdateSearch}
        onUpdateFilter = {this.onUpdateFilter}
        />;
        const HomePage = <Home 
        data = {data} />;
        const dataPage = [
            {name: CoffeePage, filter: 'coffee'},
            {name: HomePage, filter: 'home'}
        ]

        const visiblePage = this.FilterPage(dataPage, page)

        return(

            <div className="content">
                {visiblePage}
            </div>
        )
    }
}

export default Content;


