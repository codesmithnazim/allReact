import "./App.css";
import LeftSideBar from "./components/LeftSideBar";
import Header from "./components/Header";
import WeatherContextProvider from "./contexts/WeatherContextProvider";
import Weathercards from "./components/weather/Weather-cards-Main";

function App() {
  return (
    <>
      <WeatherContextProvider>
        <div className="main  box-border flex flex-col bg-[url('https://i.pinimg.com/1200x/4a/64/c0/4a64c0c0a0b5ba93e4cb68359ce4c876.jpg')] w-screen h-screen bg-cover bg-center p-4 pr-10 pl-28 gap-2.5">
          <LeftSideBar />
          <Header />
          <div className="aboutWeather w-120 border-2 border-red-700 text-2xl text-white ">
            {"I will have the plain text information about the weather "}
          </div>
          {/* <div className="Weather-cards w-55 h-100 border-2 border-fuchsia-600 text-2xl text-white self-end mr-5">
            {" I will have the exact evlauated information about the weather "}
          </div> */}
          <Weathercards />
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
