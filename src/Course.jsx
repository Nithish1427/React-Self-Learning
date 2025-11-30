import PropTypes from "prop-types";
import { useState } from "react";

function Course(props) {

  const [discountApplied, setDiscountApplied] = useState(false);
  const [finalPrice, setFinalPrice] = useState(props.price);

  function applyDiscount(discount) {
    if (!discountApplied) {
      alert(
        "Applying " +
          props.discount +
          " % discount on the actual price of " +
          finalPrice +
          " for the " +
          props.name +
          " Course?"
      );

      setFinalPrice(finalPrice - finalPrice * (discount / 100)); // price after discount
      setDiscountApplied(true);

      console.log(
        "Applied",
        props.discount,
        "% discount on the actual price of",
        finalPrice,
        "for the",
        props.name,
        "Course."
      );
    }
    else {
      alert("A discount of " + props.discount + " % has already been applied for "+ props.name + " Course. ");
      console.log(
        "Attempted to apply discount for",
        props.name,
        "Course again. Not possible."
      );
    }
  }

  const [purchased, setPurchased] = useState(false);

  function BuyCourse() {
    if (!purchased) {
      alert(
        "Purchasing " +
          props.name +
          " Course at " +
          finalPrice +
          " rupees after a " +
          props.discount +
          " % discount on the actual price of " +
          props.price +
          " rupees?"
      );

      setPurchased(true);

      console.log(
        props.name,
        "Course purchased at",
        finalPrice,
        "rupees after a",
        props.discount,
        "% discount on the actual price of",
        props.price,
        "rupees."
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
        <p>{finalPrice}</p>
        <button onClick={() => applyDiscount(props.discount)}>
          Apply Discount
        </button>
        <button onClick={() => BuyCourse()}>Purchase</button>
        <button onClick={() => props.delete(props.id)}>Delete</button>
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
