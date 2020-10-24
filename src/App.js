import React, { useState } from "react";
import "./index.css";
import ToDoItem from "./ToDoItem";

function App() {
  let [inptext, setinptext] = useState("");
  let [db, setdb] = useState([]);

  function handlechange(event) {
    setinptext(event.target.value);
  }
  function handleclick() {
    setdb([...db, inptext]);
    setinptext("");
  }
  function deleteitems(xyz) {
    let filter = db.filter((item, index) => {
      return index !== xyz;
    });
    setdb([...filter]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input value={inptext} onChange={handlechange} type="text" />
        <button onClick={handleclick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {db.map((x, index) => {
            return (
              <ToDoItem
                item={x}
                key={index}
                id={index}
                onchecked={deleteitems}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
