import React from "react";

const Overview = ({tasks, deleteItem}) => {
  

  return (
    <ul>
      {tasks.map((task, i) => {
        return <div> 
        <div> {i+1 } {task.text}
        <div></div> 
        <button onClick={() => deleteItem(i)}> Delete </button> </div>
        </div>
      })}
    </ul>
  );
};

export default Overview;