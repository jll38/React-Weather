import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weather from './components/weather';


function App() {
  return (
    <div className="App">
      <header className="App-body">
        <h1>Weather</h1>
        <div className="container" id="weather-container">
          <Weather />
        </div>
      </header>
    </div>
  );
}

export default App;
