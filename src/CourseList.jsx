import Course from "./Course";
import { useState, useEffect } from "react";

function CourseList() {

  const [courses, setCourses] = useState(null);

  useEffect(() => {
    console.log("CourseList.jsx useEffect called");

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {console.log(response); // data from the API endpoint fetched as response and printed in console
      return response.json(); // response into json format
    }).then((data) => {console.log(data)}) // data printed in console

  }, []); 

  function handleDelete(id) {
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
    </>
  );
}

export default CourseList;

// npx json-server --watch my-react-app/data/dummyData.json --port 3000 --static ./my-react-app/data