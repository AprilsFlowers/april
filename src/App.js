import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

        <div className='box'>
          <div className='infobox'>Info</div>
          <br/>
          This is my box
          <br/>
          Thank you Vesnea for helping me set this up :3
          <br/>
          <br/>
          <button className='button'><a href='https://x.com/shinyprowl'>Click Me</a></button>
          <div className='image'></div>
        </div>

      </div>
    </Router>
  );
}

export default App;
