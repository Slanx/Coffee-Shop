import './App.scss';

import Header from '../header/header';
import Content from '../content/content';
import Footer from '../footer/footer';

const App = () => {
  return (
    <div className='Wrapper'>
      <Header />
      <Content />
      <Footer/>
    </div>
  );

}

export default App;
