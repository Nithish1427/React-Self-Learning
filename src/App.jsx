import "./App.css";
import Course from "./Course";
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
      <Course name="Mongo DB" price="199 rupees" image={MongoDB} rating="4.6" />
      <Course name="Express.js" price="119 rupees" image={ExpressJS} rating="4.1" />
      <Course name="React.js" price="149 rupees" image={ReactJS} rating="4.5" />
      <Course name="Node.js" price="119 rupees" image={NodeJS} rating="4.4" />
      <Course name="HTML5" price="99 rupees" image={HTML5} rating="4.3" />
      <Course name="CSS3" price="99 rupees" image={CSS3} rating="4.2" />
      <Course name="Java Script" price="199 rupees" image={JavaScript} rating="4.7" />
    </>
  );
}

export default App;
