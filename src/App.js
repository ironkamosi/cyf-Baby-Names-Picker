import React, { useState } from "react";
import "./App.css";
import BabyData from "./BabyData";
import BabyNameDisplay from "./BabyNameDisplay";
import SearchBar from "./SearchBar";
import FavouriteNames from "./FavouriteNames.jsx";
import GenderButton from "./GenderButton" 
function App() {
  function addFavouriteName(event) {
    babyNames.forEach((element) => {
      if (element.name === event.target.textContent) {
        setFavouriteNames(favouriteNames.concat(element));
        console.log(event.target.textContent);
      }
    });
    setBabyNames(
      babyNames.filter((element) => { // filter copies everything which does not match 
        return element.name !== event.target.textContent ? true : false;
      })
    );
  }

  function removeFavouriteNames (event) {
    favouriteNames.forEach((element) => {
      if (element.name === event.target.textContent) {
        setBabyNames(babyNames.concat(element));
        console.log(event.target.textContent);
      }
    });
    setFavouriteNames(
      favouriteNames.filter((element) => {
        // filter copies everything which does not match
        return element.name !== event.target.textContent ? true : false;
      })
    );
  }
  const [babyNames, setBabyNames] = useState(BabyData);
  const [favouriteNames, setFavouriteNames] = useState([]);

  return (
    <div className="App">
      <SearchBar setData={setBabyNames} />
      <GenderButton setData={babyNames} handler={setBabyNames} />
      <FavouriteNames setData={favouriteNames} handler={removeFavouriteNames} />
      <BabyNameDisplay data={babyNames} handler={addFavouriteName} />
    </div>
  );
}
//setFoundNames={setFoundNames}
export default App;
/*
intialise found names with baby data

*/
