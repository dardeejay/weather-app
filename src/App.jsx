import "./styles/styles.css";
import CurrentWeather from "./components/current-weather";
import Search from "./components/search";
function App() {
  return (
    <div className="App">
      <div className="container">
        <CurrentWeather />
      </div>
    </div>
  );
}

export default App;
