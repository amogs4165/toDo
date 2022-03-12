
import './App.css';
import { useState } from 'react'

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  console.log(toDo)
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo.value} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((value) => {
          return (<div key={value.id} className="todo">
            <div className="left">
              <input onChange={(e) => {
                setToDo(toDos.filter(obj2 => {
                  if (obj2.id === value.id) {
                    obj2.status = e.target.checked;
                  } return obj2
                }))
              }} value={value.status} type="checkbox" name="" id="" />
              <p>{value.text}</p>
            </div>
            <div className="right">
              <i onClick={() =>
                setToDos((toDos)=>toDos.filter((obj) => obj.id !== value.id))} className="fas fa-times"></i>
            </div>
          </div>)
        })
        }
        {
          toDos.map((obj) => {
            if (obj.status) {
              return (<h1>{obj.text}</h1>)
            }
            return null
          })
        }
      </div>
    </div>
  );
}

export default App;
