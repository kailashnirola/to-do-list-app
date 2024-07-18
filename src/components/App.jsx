import React, { useState } from "react";

function App() {

  const [lists,setList] = useState([]);
  const [item,setItem] = useState('');
  
  const handleItem = (event)=>setItem(event.target.value);
  const addItem = ()=> {
    setList(prevValue => [...prevValue,item]);
    setItem('');
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleItem} name="item" type="text" value={item} />
        <button onClick={addItem} >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ol type="A">
          {lists.map(list =>
            <li>{list}</li>
          )}
        </ol>
      </div>
    </div>
  );
}

export default App;
