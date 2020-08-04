import React, { useState } from 'react';
import Parent from './Parent';
import './App.css';
import counterContext from './CounterContext';

function App() {

    let countState = useState(1)

 // let [count,setcount] = useState(20)  
  return (
    
     
    <counterContext.Provider value={countState}>
    <div>
      <Parent/>
    </div>
    </counterContext.Provider>
  );
}

export default App;
