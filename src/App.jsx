// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import NavBar from "./NavaBar";
import Footer from "./Footer";
import Course from "./Course/Course";
import "./App.css";

function App() {
  return (
    <>
      {/* <NavBar></NavBar> - can be written as Self Closing Tag*/}
      <NavBar />
      <Course />
      <Footer />
    </>
  );
}

export default App;
