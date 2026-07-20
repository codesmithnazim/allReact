import { useEffect, useState } from "react";
// import { ModelSuggestions } from "./ModelSuggestions";
import axios from "axios";

function SuggestionsList({ query }) {
  let newSuggestions = [];
  console.log("Header called me ");

  const [suggestions, setSuggestions] = useState([
    { id: 2801268, name: "London" },
    { id: 136022, name: "Sydney" },
    { id: 1925445, name: "Peshawar" },
  ]);
  useEffect(() => {
    if (query.length > 0) {
      const fetchData = async () => {
        const responce = await axios.get(
          `https://api.weatherapi.com/v1/search.json?key=3b56079a4522479786550155261707&q=${query}`,
        );
        return responce.data;
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
    <div className="suggestionsList grid grid-rows-1 border-2 border-blue-600 w-50 p-2 gap-y-1 box-border absolute right-39.5 top-17 backdrop-blur-md bg-white/10 text-white/95">
      {suggestions.map((suggestion) => {
        return (
          <div key={suggestion.id} className="suggestions ">
            {suggestion.name}
          </div>
        );
      })}
    </div>
  );
}

export default SuggestionsList;
