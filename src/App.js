import background from './img/bg.png';
import ruong from './img/ruong.png';
import './app.css'

function App() {
  return (
    <div className="App">
      <img src={background} className="App-logo" alt="logo" />
      <div className="ruong">
        <img src={ruong} className="ruong-chil" alt="logo" />
        <img src={ruong} className="ruong-chil" alt="logo" />
        <img src={ruong} className="ruong-chil" alt="logo" />
        <img src={ruong} className="ruong-chil" alt="logo" />
        <img src={ruong} className="ruong-chil" alt="logo" />
        <img src={ruong} className="ruong-chil" alt="logo" />
        <div className="cay">
          <div className="day-ruong">
            <div className="o-ruong da-tuoi"><img src={require('./img/hat.png').default} className="cai-cay" alt="logo" /></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
          </div>
          <div className="day-ruong">
            <div className="o-ruong"><img src={require('./img/hat.png').default} className="cai-cay" alt="logo" /></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
          </div>
          <div className="day-ruong">
            <div className="o-ruong"></div>
            <div className="o-ruong"><img src={require('./img/hat.png').default} className="cai-cay" alt="logo" /></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
            <div className="o-ruong"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
