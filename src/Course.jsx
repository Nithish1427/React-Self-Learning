import MongoDB from "./assets/MongoDB.png"

const course1 = "Mongo DB"

function Course() {

    return (
        // internal css in Course.jsx inside Course() component
        <div className="card">
            <div id="imgBlock">
                <img src={MongoDB} alt="Mongo DB" />
            </div>
            {/* variable should be inside curly braces */}
            <h3>{course1}</h3> 
            {/* expressions can also be inside curly braces */}
            {/* <h3>{1+4}</h3> */}
            <p>This is a Mongo DB Course.</p>
        </div>
    );
}

export default Course