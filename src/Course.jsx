import noImg from "./assets/ImageComingSoon.jpg";
import PropTypes from "prop-types";

function Course({
  name = "Course",
  price = "Coming Soon",
  image = noImg,
  rating = 0,
}) {
  return (
    <div className="card">
      <div className="imgBlock">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{price}</p>
      <span>{rating}</span>
    </div>
  );
}

Course.propTypes = {
  name: PropTypes.string,
  price : PropTypes.number,
  rating: PropTypes.number
};

export default Course;
