import React, { useState } from "react";
import Item from "./Item";
function App() {

  const [lists,setList] = useState([]);
  const [item,setItem] = useState('');
  
  const handleItem = (event)=>setItem(event.target.value);
  const addItem = ()=> {
    setList(prevValue => [...prevValue,item]);
    setItem('');
  };
  const deleteItem = id=>setList(prevItem=>prevItem.filter((item,index)=>index!=id));

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleItem} name="item" type="text" value={item}/>
        <button onClick={addItem} >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ol type="A">
          {lists.map((item, index) =>
            <Item item={item} key={index} id={index} delete={deleteItem} />
          )}
        </ol>
      </div>
    </div>
  );
}

export default App;
