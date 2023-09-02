import './App.css';
import React, { useState } from'react';
function App() { 

  const [name, setName] = useState('');

  const handleColor = () => {
    document.body.style.color = document.body.style.color === 'black'? 'white' : 'black';
    
  }
  const handleBg = (e) => {
    
     
  }
  return (
    <div className="App">
        <span className='result'>Empty Value</span>
        <input type="text" 
        className='item'
        onChange={()=> handleBg}
        placeholder='Add color name' 
        value={name}
        />
        <button onClick={() => handleColor}>Toggle Text Color</button>
    </div>
  );
}

export default App;
