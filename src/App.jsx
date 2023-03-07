import "./styles/styles.css";
import CurrentWeather from "./components/current-weather";
import Search from "./components/search";
import { useState } from "react";
function App() {
  const [location, setLocation] = useState("Olongapo");
  return (
    <div className="App">
      <Search setLocation={setLocation} />
      <div className="container">
        <CurrentWeather location={location} />
      </div>
    </div>
  );
}

export default App;
