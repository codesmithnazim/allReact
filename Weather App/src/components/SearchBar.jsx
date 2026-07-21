import { useState } from "react";
import { Grid, Search } from "lucide-react";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
import SuggestionsList from "./suggestions/SuggestionsList";
import { UseCityContext } from "../contexts/weatherContextProvider";

function SearchBar() {
  // const [classActive, setClassActive] = useState("smallNavbarIcons");
  const [isClicked, setIsClicked] = useState(false);
  const [query, setQuery] = useState("");
  const { setCity } = UseCityContext();

  const setcity = () => {
    setCity(query);
  };

  const toggleHandler = (e) => {
    console.log(e.target.parentNode.classList.contains("smallNavbarIcons"));
    setIsClicked(!isClicked);
  };

  const showSugggestionList =(e)=>{
    // console.log("check",e.target.parentNode.parentNode.nextElementSibling.style.display="grid")
    // e.target.parentNode.nextElementSibling.style.display="grid"
    console.log(document.querySelector(".suggestionsList").style.display="grid")
  }

  return (
    <>
      <div className="searchBar" onClick={showSugggestionList} >
        {isClicked ? (
          <div className="flex justify-between items-center">
            <Search
              className="cursor-pointer  text-red-800"
              size={24}
              onClick={setcity}
            />
            <input
              id={uuidv4()}
              className="inputText flex"
              type="text"
              placeholder={`Enter the area name `}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              // onClick={toggleHandler}
            />
          </div>
        ) : (
          <Search
            className="cursor-pointer icons"
            size={24}
            onClick={toggleHandler}
          />
        )}
      </div>
      {isClicked && <SuggestionsList query={query}/>}
    </>
  );
}

export default SearchBar;
