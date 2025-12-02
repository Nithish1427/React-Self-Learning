import Course from "./Course";
import { useState, useEffect } from "react";

function CourseList() {
  const [courses, setCourses] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("CourseList.jsx useEffect called");

    fetch("http://localhost:3000/courses") // API Endpoint
      .then((response) => {
        if(!response.ok) {
          throw Error("Couldn't retrieve data"); // Custom Error Message
          // if the API Endpoint is incorrect, then this error message is displayed
          // for example, "coursess" instead of "courses"
        }
        console.log(response); // data from the API endpoint fetched as response and printed in console
        return response.json(); // response into json format
      })
      .then((data) => setCourses(data))
      .catch((error) => {
        // console.log(error); // prints error message with details
        console.log(error.message); // prints just the "failed to fetch" message
        setError(error.message);
      });
  }, []);

  function handleDelete(id) {
    setCourses(courses.filter((course) => course.id != id));
  }

  // Error - React tries to render the course components before fetching the data from API endpoint
  // Error Handling
  if (!courses) {
    return (
      <>
        <p>{error}</p>
      </>
    );
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

// // run this command in terminal to create a local json server as backend
// // run this command after changing directory to my-react-app
// cd my-react-app
// npx json-server --watch data/dummyData.json --port 3000 --static ./data
