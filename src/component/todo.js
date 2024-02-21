import React, { useRef, useState } from 'react';
import './assets/todo.css'
export const Todo = () => {

  const [list,setlist]=useState([]);
  const inputref=useRef(null);
  const add=()=>{
    setlist([...list,inputref.current.value])
  }
  return (
    <div className='todo'>
        <div className='todo-header'>To-Do-List
        <div className='todo-add' >
            <input type="text"placeholder='Add your task' className='todo-input' ref={inputref}></input>
            <button className='todo-btn'>Add</button>
        </div>
        </div>
    </div>
  )
}
