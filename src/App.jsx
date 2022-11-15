import logo from './logo.svg';
import './App.css';
import Study1 from './Date/Study1';
import Study2 from './Date/Study2';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Study1></Study1>
        <Study2></Study2>
      </header>
    </div>
  );
}

export default App;
