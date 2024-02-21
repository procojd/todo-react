
import './App.css';
import React, { useRef, useState } from 'react';
import { Todo } from './component/todo';

function App() {
  // let array = ["one", "two"]
  // let data = 1
  // const [x,setx]=useState(0);
  // const [list,setlist]=useState([]);
  // const inputref=useRef(null)
  // const onclicked = () => {
  //   setx(x+1);
  //   console.log(x);
  // }
  {
    return (
      <div className="avatar">
        {/* <h3>todo list</h3>
        <input ref={inputref} type="text"></input>
        <button onClick={()=>{setlist([...list,inputref.current.value])}} >add item</button>
        {list.map((user) => { return <h3>{user}</h3> })}
        {data === 2 ? <h3>2</h3> : <h3>1</h3>}
        <button onClick={() => { onclicked() }}>clickme{x}</button> */}
        <Todo></Todo>

        
      </div>
    );
  }
}


export default App;
