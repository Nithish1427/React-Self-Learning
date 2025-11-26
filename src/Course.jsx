import PropTypes from "prop-types";

function Course(props){

  let purchased = false;

  function BuyCourse(discount) {
    const finalPrice = props.price - ( props.price * ( discount / 100 ));
    alert("Purchasing "+props.name+" Course at "+finalPrice+" rupees after a "+props.discount+" % discount from the actual price "+props.price+"?");
    console.log(props.name,"Course purchased at",finalPrice,"rupees after a",props.discount,"% discount from the actual price",props.price,"?");
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
