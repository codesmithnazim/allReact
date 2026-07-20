import { useState } from "react";
import { Search } from "lucide-react";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
import SuggestionsList from "./suggestions/SuggestionsList";

function SearchBar() {
  // const [classActive, setClassActive] = useState("smallNavbarIcons");
  const [isClicked, setIsClicked] = useState(false);
  const [query, setQuery] = useState("");

  const toggleHandler = (e) => {
    console.log(e.target.parentNode.classList.contains("smallNavbarIcons"));
    // e.target.parentNode.classList.contains("smallNavbarIcons")? e.target.parentNode.classList:
    // let targetNode=e.target.parentNode
    // // e.target.parentNode.classList.toggle("smallNavbarIcons");
    // e.target.parentNode.classList.toggle("searchBar");
    // // isClicked?targetNode.setAttribute("class", "searchBar"):targetNode.setAttribute("class","smallNavbarIcons")
    // console.log(e.target.parentNode.classList.contains("smallNavbarIcons"));
    setIsClicked(!isClicked);
  };
  return (
    <>
      <div className="searchBar">
        {isClicked ? (
          <div className="flex justify-between items-center">
            <Search
              className="cursor-pointer  text-red-800"
              size={24}
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
      {isClicked && <SuggestionsList query={query} />}
    </>
  );
}

export default SearchBar;
