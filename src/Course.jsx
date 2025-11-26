// import noImg from "./assets/ImageComingSoon.jpg";
import PropTypes from "prop-types";

function Course(props){

  function BuyCourse() {
    alert("Purchasing "+props.name+" Course at "+props.price+" rupees?");
    console.log(props.name,"Course Purchased at",props.price,"rupees");
  }

  return (
    props.name && (
      <div className="card">
        <div className="imgBlock">
          <img src={props.image} alt={props.name} />
        </div>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <button onClick={BuyCourse}>Buy Course</button>
      </div>
    )
  );
}

Course.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
};

export default Course;
