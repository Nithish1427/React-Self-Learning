function Course(props) {

    return (
        // internal css in Course.jsx inside Course() component
        <div className="card">
            <div className="imgBlock">
                <img src={props.image} alt="Mongo DB" />
            </div>
            <h3>{props.name}</h3> 
            <p>{props.price}</p>
        </div>
    );
}

export default Course