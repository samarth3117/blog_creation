//parent class is studentlist
import { useState, useEffect } from 'react';
import StudentList from './StudentList';

const Home = () => {
    const [enterStudent, setStudent] = useState([
        {name: 'Samarth Sharma', place: 'Agra', profession: 'React', id: 1},
        {name: 'Ajay Sharma', place: 'Delhi', profession: 'Software Engineer', id: 2},
        {name: 'Shorya Sharma', place: 'Delhi', profession: 'Grade 12', id: 3}
    ]);

    const enternewStudent = () =>([
        {name: 'Sunny Sharma', place: 'Agra', profession: 'React', id: 1},
        {name: 'Antu Sharma', place: 'Delhi', profession: 'Software Engineer', id: 2},
        {name: 'Kaku Sharma', place: 'Delhi', profession: 'Grade 12', id: 3}
    ]);


   
     
    const changeBlogData = (id) =>
    {
        const enternewStudent = enterStudent.filter(stud => stud.id !== id);
        setStudent(enternewStudent)
        
    }
    useEffect(() =>{
        console.log('useEffect ran');
        console.log(enterStudent);
    });
    return(
        <div>
            {/* <StudentList enterStudent={enterStudent} name = "My name is Ajay Sharma"/> */}

            <StudentList enterStudent={enterStudent.filter(studs => studs.name !=='Sunny Sharma')} name = "All"/>
             <button onClick={changeBlogData}>Click me</button> 
        </div>
    )
}

export default Home;