import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [rivit, setRivit] = useState([]);

  useEffect(() => {
    const nimet = ['Jouni', 'Pekka', 'Sinikka', 'Teppo', 'Meija', 'Reima'];
    setRivit(nimet);
    /* console.log("useEffect");
    console.log(nimet); */
  },[])

  return (
    <div style={{margin: '30px'}}>
      <h3>Nimet</h3>
      <ul>
        {
          rivit.map(rivi => (
            <li key={rivi}>{rivi}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
