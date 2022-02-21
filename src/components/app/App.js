import './App.scss';

import { Component } from 'react';

import Header from '../header/header';
import Content from '../content/content';
import Footer from '../footer/footer';

class App extends Component  {
  constructor(props){
    super(props);
    this.state = {
      page: 'home'
    }
  }


  onUpdatePage = (page) =>{
    this.setState({page});
  }

  render(){
    return (
      <div className='Wrapper'>
        <Header
        onUpdatePage = {this.onUpdatePage}
        />
        <Content page = {this.state.page}
        onUpdatePage = {this.onUpdatePage} />
        <Footer/>
      </div>
    );
  }

}

export default App;
