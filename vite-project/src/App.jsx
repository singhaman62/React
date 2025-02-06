import { useState } from 'react'

import './App.css'
function App(){
const [counter,setCounter]=useState(20);
  function addvalue() {
    if (counter > 30) setCounter(30);
    else {
      setCounter(counter + 1);
    }
  }
  function remove() {
    if (counter < 0) setCounter(0);
    else {
      setCounter(counter - 1);
    }
  }

return(
  <>
  <h1>The basic counter project</h1>
  <h2>counter:{counter}</h2>
  <button onClick={addvalue}>Add Value</button>
  <button onClick={remove}>remove value</button>
  </>
)
}
export default App;
