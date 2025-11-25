// import noImg from "./assets/ImageComingSoon.jpg";
import PropTypes from "prop-types";

function Course(props){
  return (
    props.name && (
      <div className="card">
        <div className="imgBlock">
          <img src={props.image} alt={props.name} />
        </div>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <span>{props.rating}</span>
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
