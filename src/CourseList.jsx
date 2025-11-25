import Course from "./Course";
import MongoDB from "./assets/MongoDB.png";
import ExpressJS from "./assets/Express.png";
import ReactJS from "./assets/React.png";
import NodeJS from "./assets/Node.png";
import HTML5 from "./assets/HTML5.png";
import CSS3 from "./assets/CSS3.png";
import JavaScript from "./assets/JavaScript.png";

function CourseList() {

    const courses = [
        {
            name: "Mongo DB",
            price: 199,
            rating: 4.6,
            image: MongoDB,
        },
        {
            name: "Express.js",
            price: 119,
            rating: 4.1,
            image: ExpressJS,
        },
        {
            name: "React.js",
            price: 149,
            rating: 4.5,
            image: ReactJS,
        },
        {
            name: "Node.js",
            price: 119,
            rating: 4.4,
            image: NodeJS,
        },
        {
            name: "HTML5",
            price: 99,
            rating: 4.3,
            image: HTML5,
        },
        {
            name: "CSS3",
            price: 99,
            rating: 4.2,
            image: CSS3,
        },
        {
            name: "Java Script",
            image: JavaScript,
            price: 199,
            rating: 4.7,
        },
    ];

    // Sorting - Ascending Order (x,y) => x-y
    courses.sort((x,y) => x.price-y.price)

    // Sorting - Descending Order (x,y) => y-x
    courses.sort((x,y) => y.price-x.price)

    const coursesList = courses.map((course, index) => (
        <Course
            key={index} 
            name={course.name}
            image={course.image}
            price={course.price}
            rating={course.rating}
        />
    ));

    return(
        <>
            {coursesList}
        </>
    );
}

export default CourseList;
