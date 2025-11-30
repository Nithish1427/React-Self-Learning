import Course from "./Course";
import MongoDB from "./assets/MongoDB.png";
import ExpressJS from "./assets/Express.png";
import ReactJS from "./assets/React.png";
import NodeJS from "./assets/Node.png";
import HTML5 from "./assets/HTML5.png";
import CSS3 from "./assets/CSS3.png";
import JavaScript from "./assets/JavaScript.png";
import { useState } from "react";

function CourseList() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Mongo DB",
      image: MongoDB,
      price: 199,
      discount: 20,
    },
    {
      id: 2,
      name: "Express.js",
      image: ExpressJS,
      price: 119,
      discount: 15,
    },
    {
      id: 3,
      name: "React.js",
      image: ReactJS,
      price: 149,
      discount: 25,
    },
    {
      id: 4,
      name: "Node.js",
      image: NodeJS,
      price: 119,
      discount: 15,
    },
  ]);

  function handleDelete(id) {
    // const newCourses = courses.filter((course) => course.id != id);
    // setCourses(newCourses);
    setCourses(courses.filter((course) => course.id != id));
  }

  const coursesList = courses.map((course) => (
    <Course
      key={course.id}
      id={course.id}
      name={course.name}
      image={course.image}
      price={course.price}
      discount={course.discount}
      delete={handleDelete}
    />
  ));

  return <>{coursesList}</>;
}

export default CourseList;
