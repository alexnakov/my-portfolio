import logo from './logo.svg';
import './App.scss';
import MenuIcon from './components/MenuIcon';

function App() {
  return (
    <div className="App">
      <header>
        <div className='nav-wrapper'>
          <div>Homepage</div>
          <MenuIcon />
        </div>
        <div className='intro-wrapper'>
          <br/>
          <span>Hi, I'm Alex</span>
          <br/><br/>
          <span>a front-end web developer.</span>
        </div>
        <div className='prof-img-wrapper'>
          <img src='portfolio-funny-ppic.jpg' alt='Profile img'/>
        </div>
      </header>
    </div>
  );
}

export default App;
