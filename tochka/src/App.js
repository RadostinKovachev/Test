import './App.css';
import Button from '@mui/material/Button';
import React, {useState} from 'react';


function App(props) {
  const [show, setShow] = useState (false)
  const [number, setNumber] = useState (0)
  return (
    <div className="App">
     <Button onClick={() =>
     setShow(!show)
    }
    variant='contained'
    >
      {show==true ? "Hide" : "Show"}
      {show == true ?
    </Button>
    (<div>
      <h1>Който стигне до по-голямо число, използвайки копчетата ще получи награда</h1>
      <h5> (Усмивка по радиото)
      </h5>
      
        
      
     <Button variant="contained" onClick={() => setNumber (number - 1)}
     >-</Button>
      <Button variant="contained" onClick={() => setNumber (number + 1)}>+
      </Button>
    <h2>{number} </h2>
    <Button variant='contained' onClick={() => setNumber(0)
      }
      >RESET
      </Button>
      <h1>Number: {number}</h1>
    </div>
    )
    :
    <div></div>
         } 
    </div>
  );
  }


export default App;
