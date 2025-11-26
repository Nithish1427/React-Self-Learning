// import noImg from "./assets/ImageComingSoon.jpg";
import PropTypes from "prop-types";

function Course(props){

  function BuyCourse(discount, e) {
    const finalPrice = props.price - ( props.price * ( discount / 100 ));
    alert("Purchasing "+props.name+" Course at "+finalPrice+" rupees after a "+props.discount+" % discount from the actual price "+props.price+"?");
    console.log(props.name,"Course purchased at",finalPrice,"rupees after a",props.discount,"% discount from the actual price",props.price,"?");
    console.log(e); // event object printed in console
  }

  return (
    props.name && (
      <div className="card">
        <div className="imgBlock">
          <img src={props.image} alt={props.name} />
        </div>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <button onClick={(event) => BuyCourse(props.discount, event)}>Purchase</button>
        {/* can also be given in multiple line inside arrow function */}
        {/* <button onClick={(event) => {BuyCourse(props.discount); console.log(event)}}>Purchase</button> */}
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
