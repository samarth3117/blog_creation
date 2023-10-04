//parent class is List
import { useState } from 'react';
import List from './List';

const People = () => {
    const [details, setdetails] = useState([
        {Name:"Luka", Location: "USA", Food: "Cerals" },
        {Name:"Sofia", Location: "Phillipines", Food: "Fish" },
        {Name:"Wang", Location: "China", Food: "Lobster" },
        {Name:"Akshay", Location: "India", Food: "Chapati" }
    ]);
const newdetails = () => ([
        {Name:"Daisy", Location: "America", Food: 'Chocolate' },
        {Name:"Kia", Location: "Italy", Food: "Pasta" },
        {Name:"Tori", Location: "Spain", Food: "Burger" },
        {Name:"Loki", Location: "Britain", Food: "Fryfood" }
]);
const changedetails = () =>{
    setdetails(newdetails)
}
    return(
        <div>
            <List details={details.filter(det=>det.Name !== 'Daisy')} name = "my name is samarth"/>
            <button onClick={changedetails}>Click me</button> 
        </div>
    )
}

export default People;