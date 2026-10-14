const Student = ({ name, age, college }) => {
    // const { name, age, college } = props;
    return (
        <>
            {/* <h1>Name : {props.name}</h1>
            <h1>Age : {props.age}</h1>
            <h2>college : {props.college}</h2> */}
            <h1>Name : {name}</h1>
            <h1>Age : {age}</h1>
            <h2>college : {college}</h2>    
        </>
    );
}

export default Student;