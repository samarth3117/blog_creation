const StudentList = ({ enterStudent , name, changeBlogData}) => {

    return (
        <div className="student-list">
                <h2>{name}</h2>
            {
              
                enterStudent.map((stud) =>
                (
                    <div className="user" key={stud.id}>
                        <h2>{stud.name}</h2>
                        <h2>{stud.description}</h2>
                        <button onClick={() => changeBlogData(stud.id)}>delete</button>
                    </div>
                ))
            }
        </div>
    );
}
export default StudentList; 