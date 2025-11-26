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
            image: MongoDB,
            price: 199,
            discount : 20
        },
        {
            name: "Express.js",
            image: ExpressJS,
            price: 119,
            discount : 15
        },
        {
            name: "React.js",
            image: ReactJS,
            price: 149,
            discount : 25
        },
        {
            name: "Node.js",
            image: NodeJS,
            price: 119,
            discount : 15
        },
        {
            name: "HTML5",
            image: HTML5,
            price: 99,
            discount : 10
        },
        {
            name: "CSS3",
            image: CSS3,
            price: 99,
            discount : 10
        },
        {
            name: "Java Script",
            image: JavaScript,
            price: 199,
            discount : 20
        },
    ];

    const coursesList = courses.map((course, index) => (
        <Course
            key={index} 
            name={course.name}
            image={course.image}
            price={course.price}
            discount={course.discount}
        />
    ));

    return(
        <>
            {coursesList}
        </>
    );
}

export default CourseList;
