import BabyData from "./BabyData";

const SearchBar = () => {

  // This is the input within the search bar
  let foundNames = [];
  function searchBabyData(searchString) { // event handler responds to the key down/up event
    BabyData.forEach((babyNames) => { // this analyses the data in the array
      if (babyNames.name.toLowerCase().includes(searchString))
        foundNames.concat(babyNames);
    });
  }
  // props.setFoundNames(foundNames); // sets the state with that array
    <input onKeyUp={searchBabyData} />;

  return ( 
    <div className="baby-names">
      {foundNames.map((element, index) => {
        return (
          <div key={index} className={element.sex}>
            {element.name}
          </div>
        );
      })}
    </div>
  );
};

export default SearchBar;
//   let dataFound = babyName.name.toLowerCase().includes(searchString);
//     babyName.name.style.display = dataFound ? "" : "none";
/**
tvShowData.forEach((data, index) => {
    let genres = data.genres.toString(); // extracted data from the array of genres
    if (
      data.name.toLowerCase().includes(searchString) ||
      data.summary.toLowerCase().includes(searchString) ||
      genres.toLowerCase().includes(searchString)
    ) {
      showEpisode(tvShowsInfoContainers[index]);
      episodeCount++;
    } else if (
      data.name == null ||
      data.name == "" ||
      data.summary == null ||
      data.summary == "" ||
      data.genres == null ||
      data.genres == ""
    ) {
      hideEpisode(tvShowsInfoContainers[index]);
    } else {
      hideEpisode(tvShowsInfoContainers[index]);
    }
  });
  updateCounter(episodeCount, tvShowData.length);
}
 */
