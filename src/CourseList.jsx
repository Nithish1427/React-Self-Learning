import Course from "./Course";
import useFetch from "./useFetch";

function CourseList() {

  const [courses, error] = useFetch("http://localhost:3000/courses");

  function handleDelete(id) {
    setCourses(courses.filter((course) => course.id != id));
  }

  if (!courses) {
    return (
      <>
        {!error && <img src="data/assets/icons8-loading-bar.gif"></img>}
        {error && <p>{error}</p>}
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

// // run this command in terminal to create a local json server as API Endpoint
// // run this command after changing directory to my-react-app
// cd my-react-app
// npx json-server --watch data/dummyData.json --port 3000 --static ./data
