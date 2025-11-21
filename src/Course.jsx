import noImg from "./assets/ImageComingSoon.jpg";

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
    <div>Course Not Available</div>;
  }
}


export default Course
