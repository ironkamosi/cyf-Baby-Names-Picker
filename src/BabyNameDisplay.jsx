// import BabyData from "./BabyData";
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

const BabyNameDisplay = (props) => {
  return (
    <div className="baby-names">
      {props.data.sort(compare).map((element, index) => {
        return (
          <div key={index} className={element.sex}>
            {element.name}
          </div>
        );
      })}
    </div>
  );
};

export default BabyNameDisplay;
