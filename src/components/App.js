import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import List from "./List";

const App = () => {
  const [nameList, setNameList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInput = (event) => {
   setNewTask(event.target.value);
  }

  const addTask = () => {
    setNameList([...nameList, newTask])
  }

  return (
    <div id="main">
       <input id="input" onChange={handleInput} />
      <button id="button" onClick={addTask}>Click</button>

      <div>
        {
          nameList.map((list) => {
            return (
              <ul id="list">
              <List listx={list} />
              </ul>
            )
          })
        }
      
      </div>
      
    </div>
  )
}


export default App;
