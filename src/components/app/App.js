import './App.scss';

import Header from '../header/header';

const App = () => {
  return (
    <div className='Wrapper'>
      <Header />
      <div className="content">
        <div className="content__info"></div>
        <div className="content__best"></div>
      </div>
      <footer>
        
      </footer>
    </div>
  );

}

export default App;
