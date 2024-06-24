
import './App.css';
import data from './data';
import List from './list';
import {useState} from 'react';

function App() {
  const [people,setPeople]=useState(data);
  
const change =()=>{
  setPeople([]);
}
const reset =()=>{
  setPeople(data);
}

    return (
    <section className="container" >
      
      <h4 id="para"> {people.length} Birthdays</h4>


     
                <List data={people}></List>   
      <button onClick={change}> Clear All</button>   
      <button onClick={reset}> Reset</button> 

    </section>

  );
}

export default App;
