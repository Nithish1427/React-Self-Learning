import noImg from "./assets/ImageComingSoon.jpg"

function Course({ 
  name = "Course", 
  price = "Coming Soon", 
  image = noImg,
  rating = " "
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

// This always works
// Does NOT depend on defaultProps
// Works even if API returns undefined, null, or doesn’t include the field

export default Course;

// function Course(props) {

//     return (
//         <div className="card">
//             <div className="imgBlock">
//                 <img src={props.image} alt={props.name} />
//             </div>
//             <h3>{props.name}</h3> 
//             <p>{props.price}</p>
//         </div>
//     );
// }

// Course.defaultProps = {
//     name : "Course",
//     price : "Coming Soon",
//     image : noImg
// }

// This works only when:
// No parent prop is passed
// NOT when the parent passes undefined
// NOT when the parent passes an empty string
// NOT when API returns { image: undefined }
 
// So React “thinks” you did pass props — so defaults are ignored.

// React no longer applies defaultProps on function components in Vite/ESM setups — especially when the prop is explicitly passed as undefined or missing from an API object.

// export default Course