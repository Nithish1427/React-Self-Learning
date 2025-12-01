import Course from "./Course";
import { useState, useEffect } from "react";

function CourseList() {

  const [courses, setCourses] = useState(null);

  useEffect(() => {
    console.log("CourseList.jsx useEffect called");

    fetch('http://localhost:3000/courses')
    .then((response) => {console.log(response); // data from the API endpoint fetched as response and printed in console
      return response.json(); // response into json format
    }).then((data) => setCourses(data)) 
    // here using setCourses inside useEffect is not a problem because of the empty dependency (since it is called only once)
  }, []); 

  function handleDelete(id) {
    setCourses(courses.filter((course) => course.id != id));
  }

  // Error - React tries to render the course components before fetching the data from API endpoint
  // Error Handling 
  if(!courses) {
    return <></>
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
    </>
  );
}

export default CourseList;

// // run this command in terminal to create a local json server as backend
// npx json-server --watch my-react-app/data/dummyData.json --port 3000 --static ./my-react-app/data