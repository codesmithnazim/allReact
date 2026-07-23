import "./App.css";
import LeftSideBar from "./components/LeftSideBar";
import Header from "./components/Header";
import WeatherContextProvider from "./contexts/WeatherContextProvider";
import Weathercards from "./components/weather/Weather-cards-Main";
import NearByContext from "./contexts/nearByContextProvider";
import WeatherForeCastText from "./components/weatherForcast/weatherForeCastText";
import MainBoxImageContainer from "./components/mainBoxImageContainer";
import TemperatureContextProvider from "./contexts/temperatureContextProvider";

function App() {
  return (
    <>
      <WeatherContextProvider>
        <TemperatureContextProvider>
          <NearByContext>
            <MainBoxImageContainer>
              <Header />
              <LeftSideBar />
              <WeatherForeCastText />
              <Weathercards />
            </MainBoxImageContainer>
          </NearByContext>
        </TemperatureContextProvider>
      </WeatherContextProvider>
    </>
  );
}

export default App;

{
  /* <div className="bg-pink-950 w-full h-screen box-border pt-5">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
          I am a div
        </div>
      </div> */
}
