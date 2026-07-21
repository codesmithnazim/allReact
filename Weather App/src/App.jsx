import "./App.css";
import LeftSideBar from "./components/LeftSideBar";
import Header from "./components/Header";
import WeatherContextProvider from "./contexts/WeatherContextProvider";
import Weathercards from "./components/weather/Weather-cards-Main";
import NearByContext from "./contexts/nearByContextProvider";
import WeatherForeCastText from "./components/weatherForcast/weatherForeCastText";

function App() {
  return (
    <>
      <WeatherContextProvider>
        <div className="main  box-border flex flex-col bg-[url('https://i.pinimg.com/1200x/4a/64/c0/4a64c0c0a0b5ba93e4cb68359ce4c876.jpg')] w-screen h-screen bg-cover bg-center p-4 pr-10 pl-28 gap-16">
          <LeftSideBar />
          <NearByContext>
            <Header />
            <WeatherForeCastText />
            <Weathercards />
          </NearByContext>
        </div>
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
