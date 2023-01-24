import React, { useState } from "react";

function Todo() {
  const [activity, setActivity] = useState(" ");
  const [list, setList] = useState([]);
  function addActivity() {
    // setList([...list, activity]);
    // console.log(list);
    setList((list) => {
      const updatelList = [...list, activity];
      console.log(updatelList);
      setActivity("");
      return updatelList;
    });
  }
  function removeActivity(i) {
    const updatelList = list.filter((ele, id) => {
      return i != id;
    });
    setList(updatelList);
  }
  function removeAll() {
    setList([]);
  }
  return (
    <>
      <div className="container">
        <div className="header">Todo List</div>
        <input
          type="text"
          placeholder="Add activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">Here is your List :-</p>
        {list != [] &&
          list.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData">{data}</div>
                  <div className="btn-position">
                    <button onClick={() => removeActivity(i)}>X</button>
                  </div>
                </p>
              </>
            );
          })}
        {list.length >= 1 && (
          <button className="btn-remove" onClick={removeAll}>
            Remove All
          </button>
        )}
      </div>
    </>
  );
}
export default Todo;
