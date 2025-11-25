import noImg from "./assets/ImageComingSoon.jpg";
import PropTypes from "prop-types";

function Course({
  name = "Course",
  price = "Coming Soon",
  image = noImg,
  rating = " ",
  show = false,
}) {
  if (show) {
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
  } else {
    return <div>Course Not Available</div>;
  }
}

Course.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  show: PropTypes.bool,
};

export default Course;
