import './content.scss';
import SolimoCoffee from './img/SolimoCoffeeBeans.jpg';
import AromisoCoffee from './img/AromisoCoffee.jpg';
import PrestoCoffee from './img/PrestoCoffeeBeans.jpg';

import { Component } from 'react';
import MainPage from '../main-page/main-page';
import Coffee from '../coffee/coffee';

class Content extends Component{
    constructor(){
        super();
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
            filter: '',
            page: ''
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


    render(){

        const {data, term, filter} = this.state;
        const visibleData = this.FilterCoffee(this.SearchCoffee(data, term), filter);
        const cof =<Coffee 
        data={visibleData} 
        onUpdateSearch ={this.onUpdateSearch}
        onUpdateFilter = {this.onUpdateFilter}/>;

        const mainPage = (<MainPage data = {data} />)


        return(

            <div className="content">
                mainpage
            </div>
        )
    }
}

export default Content;