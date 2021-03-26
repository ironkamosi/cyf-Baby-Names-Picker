import BabyData from "./BabyData"

const GenderButton = (props) => {
  
    BabyData.filter(element => {
        return (
            element.sex === "m" 
        )
    });

    function genderFilter(event) {
        if (event.target.textContent === "Male") {
            props.handler(BabyData.filter(element => element.sex === "m"))
        } if (event.target.textContent === "Female") {
            props.handler(
                BabyData.filter((element) => element.sex === "f")
            );
        }
        if (event.target.textContent === "Mixed Gender") {
            props.handler(BabyData.filter(_ => true))
            // console.log("event", event.target.textContent === "Male");
        }
    }

    return (
      <div className="gender-buttons">
        <button onClick={genderFilter} className="male-button">
          Male
        </button>
        <button onClick={genderFilter} className="female-button">
          Female
        </button>
        <button onClick={genderFilter} className="mixed=gender-button">
          Mixed Gender
        </button>
      </div>
    );
};

export default GenderButton;