import {useState} from "react";
import './App.css';



function App() {
  const [tank, setTank] = useState(0);
  const [mpg, setMpg] = useState(0);
  const [distance, setDistance] = useState(0);

  const [result, setResult] = useState('');

  const onTankChange = (e) => {
    setTank(e.target.value);
    calculate();
  };

  const onMpgChange = (e) => {
    setMpg(e.target.value);
    calculate();
  };

  const onDistanceChange = (e) => {
    setDistance(e.target.value);
    calculate();
  };
  
  const calculate = () => {
    const carDistance = tank * mpg; // how many miles can the car drive based on the amount of fuel in the tank
    if(carDistance >= distance) setResult('You have arrived!');
    else setResult('You have not arrived!');
  };

  return (
    <div className="App">

      <h1 className="app-header">Car trip</h1>

      <div>
        <label htmlFor="tank">Tank, Gal</label>
        <input className="tank" value={tank} onChange={onTankChange} name='tank' type='number'/>
      </div>

      <div>
        <label htmlFor="mpg">MPG</label>
        <input className="mpg" value={mpg} onChange={onMpgChange} name='mpg' type='number'/>
      </div>

      <div>
        <label htmlFor="distance">Distance, Miles</label>
        <input className="distance" value={distance} onChange={onDistanceChange} name='distance' type='number'/>
      </div>


      <hr/>
      <div>{tank}</div>
      <div>{mpg}</div>
      <div>{distance}</div>
      <hr/>

      <div className="result">{result}</div>

    </div>
  );
}

export default App;
