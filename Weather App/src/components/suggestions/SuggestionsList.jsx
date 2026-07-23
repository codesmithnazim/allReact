import { useEffect, useState } from "react";
// import { ModelSuggestions } from "./ModelSuggestions";
import axios from "axios";
import { UseCityContext } from "../../contexts/weatherContextProvider";

function SuggestionsList({ query }) {
  const [isvisible, setIsvisible] = useState(true);
  let newSuggestions = [];
  console.log("Header called me and the suggestions are ", isvisible);
  // console.log("Header called me and the suggestions are ", display);

  const [suggestions, setSuggestions] = useState([
    { id: 2801268, name: "London" },
    { id: 136022, name: "Sydney" },
    { id: 1925445, name: "Peshawar" },
  ]);
  const { setCity } = UseCityContext();

  const setcity = (e, name) => {
    setCity(name);
    // setIsvisible(false);
    isvisible ? (e.target.parentNode.style.display = "none") : "";
  };

  useEffect(() => {
    if (query.length > 0) {
      const fetchData = async () => {
        const { data } = await axios.get(
          `https://api.weatherapi.com/v1/search.json?key=3b56079a4522479786550155261707&q=${query}`,
        );
        return data;
      };
      fetchData().then((data) => {
        for (const element of data) {
          // console.log(element);
          newSuggestions.push({ id: element.id, name: element.name });
          setSuggestions(newSuggestions);
          // console.log(newSuggestions);
          // console.log(suggestions);
        }
      });
    }
    return () => {};
  }, [query]);

  return (
    (
      <div className="suggestionsList grid grid-rows-1  w-55.5 p-2 gap-y-1 box-border absolute right-39 rounded-2xl top-17 backdrop-blur-md bg-white/10 text-white/95 z-10">
        {suggestions.map((suggestion) => {
          return (
            <div
              key={suggestion.id}
              className="suggestions cursor-pointer"
              onClick={(e) => {
                setcity(e, suggestion.name);
              }}
            >
              {suggestion.name}
            </div>
          );
        })}
      </div>
    )
  );
}

export default SuggestionsList;
