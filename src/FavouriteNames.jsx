function compare(babyOne, babyTwo) {
  // This helps put the array in order
  if (babyOne.name < babyTwo.name) {
    return -1;
  }
  if (babyOne.name > babyTwo.name) {
    return 1;
  }
  return 0;
}

const FavouriteNames = (props) => {
  return (
    <div>
      <h2 id="favourite-names-title">Favourite Names:</h2>
      <div className="baby-names" style={{border:"none", margin:"0em"}} >
      {props.setData.sort(compare).map((element, index) => {
        return (
          <div key={index} className={element.sex} onClick={props.handler}>
            {element.name}
          </div>
        );
      })}
          </div>
    </div>
  );
};
export default FavouriteNames;
