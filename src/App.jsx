import Course from "./Course";
import "./App.css";
import MongoDB from "./assets/MongoDB.png"
import ExpressJS from "./assets/Express.png"
import ReactJS from "./assets/React.png"
import NodeJS from "./assets/Node.png"
import HTML5 from "./assets/HTML5.png"
import CSS3 from "./assets/CSS3.png"
import JavaScript from "./assets/JavaScript.png"

function App() {
  return (
    <>
      <Course name="Mongo DB" price="199 rupees" image={MongoDB} />
      <Course name="Express.js" price="119 rupees" image={ExpressJS} />
      <Course name="React.js" price="149 rupees" image={ReactJS} />
      <Course name="Node.js" price="119 rupees" image={NodeJS} />
      <Course name="HTML5" price="99 rupees" image={HTML5} />
      <Course name="CSS3" price="99 rupees" image={CSS3} />
      <Course name="Java Script" price="199 rupees" image={JavaScript} />
    </>
  );
}

export default App;
