
import './App.css';
import data from './data';
import List from './list';

function App() {
  return (
    <section className="container" >
      
      <h4 id="para"> {data.length} Birthdays</h4>


     
                <List data={data}></List>      

    </section>

  );
}

export default App;
