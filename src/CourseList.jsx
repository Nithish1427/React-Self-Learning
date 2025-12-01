import Course from "./Course";
import MongoDB from "./assets/MongoDB.png";
import ExpressJS from "./assets/Express.png";
import ReactJS from "./assets/React.png";
import NodeJS from "./assets/Node.png";
import { useState, useEffect } from "react";

function CourseList() {

  const [dummy, setDummy] = useState(true);

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

  // when there's change in the state of the component, the component gets rerendered and the useEffect called
  // methods (from useState) like setCourses or setDummy should not be used inside useEffect, since it can cause an infinite loop
  useEffect(() => {
    console.log("CourseList.jsx useEffect called");
    console.log(dummy);
  }, [dummy]); 
  // [] - empty dependency array - no dependency added - useEffect called only once during the initial rendering of the components
  // [dummy] - dependency added as dummy (state variable) - useEffect called only when there's change in the state of the dummy component (Dummy Button)
  // [courses] - dependency added as courses (state variable) - useEffect called only when there's change in the state of the courses component (Courses)
  // no dependency array - useEffect called when there's change in the state of any component 

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

  return (
    <>
      {coursesList}
      <button onClick={() => setDummy(false)}>Dummy Button</button>
    </>
  );
}

export default CourseList;
