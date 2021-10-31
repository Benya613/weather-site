import "./App.css";
import { Header } from "./partial/Header/Header";
import { Switch, Route } from "react-router-dom";
import { MainPage } from "./pages/Main/Main";
import { CurrentWeatherPage } from "./pages/CurrentWeather/CurrentWeather";
import { MapsPage } from "./pages/Maps/Maps";
import { HistoricalViewPage } from "./pages/HistoricalView/HistoricalView";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <MainPage></MainPage>
        </Route>
        <Route exact path="/current-weather">
          <CurrentWeatherPage></CurrentWeatherPage>
        </Route>
        <Route exact path="/historical-weather">
          <HistoricalViewPage></HistoricalViewPage>
        </Route>
        <Route exact path="/weather-maps">
          <MapsPage></MapsPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
