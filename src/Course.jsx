const course1 = "Mongo DB"

function Course() {
    return (
        <div>
            <img src="" alt="" />
            {/* variable should be inside curly braces */}
            <h3>{course1}</h3> 
            {/* expressions can also be inside curly braces */}
            {/* <h3>{1+4}</h3> */}
            <p>This is a Mongo DB Course.</p>
        </div>
    );
}

export default Course