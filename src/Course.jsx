import PropTypes from "prop-types";
import { useState } from "react";

function Course(props) {
  const [purchased, setPurchased] = useState(false);

  function BuyCourse(discount) {
    if (!purchased) {
      const finalPrice = props.price - props.price * (discount / 100);

      alert(
        "Purchasing " +
          props.name +
          " Course at " +
          finalPrice +
          " rupees after a " +
          props.discount +
          " % discount from the actual price " +
          props.price +
          "?"
      );

      setPurchased(true);

      console.log(
        props.name,
        "Course purchased at",
        finalPrice,
        "rupees after a",
        props.discount,
        "% discount from the actual price",
        props.price,
        "?"
      );
    } else {
      alert(props.name + " Course has already been purchased.");
      console.log(
        "Attempted to purchase the",
        props.name,
        "Course again. Not possible."
      );
    }
  }

  return (
    props.name && (
      <div className="card">
        <div className="imgBlock">
          <img src={props.image} alt={props.name} />
        </div>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <button onClick={() => BuyCourse(props.discount)}>Purchase</button>
        <p>{purchased ? "Already purchased" : "Get it now"}</p>
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
