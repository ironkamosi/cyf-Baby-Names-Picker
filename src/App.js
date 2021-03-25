import React,{useState} from "react"
import './App.css';
import BabyData from "./BabyData"
import BabyNameDisplay from "./BabyNameDisplay"
import SearchBar from "./SearchBar"

function App() {
const [babyNames,setBabyNames] = useState(BabyData)
  return (
    <div className="App">
      <SearchBar/>
      <BabyNameDisplay data={babyNames}/>
    </div>
  );
}
//setFoundNames={setFoundNames}
export default App;
/*
intialise found names with baby data

*/