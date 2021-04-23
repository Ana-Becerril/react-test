//import React, { Component } from "react";
//import Overview from "./components/Overview";
//
//
//class App extends Component {
//  constructor() {
//    super();
//
//    this.state = {
//      task: { text: '' },
//      tasks: [],
//    };
//    this.deleteItem = this.deleteItem.bind(this);
//  }
//
  //
  //  handleChange = (e) => {
  //    this.setState({
  //      task: {
  //        text: e.target.value,
  //      }
  //    });
  //  };
//
//  onSubmitTask = (e) => {
//    e.preventDefault();
//    this.setState({
//      tasks: this.state.tasks.concat(this.state.task),
//      task: { text: '' },
//    });
//  };
//
//    deleteItem(index){
//  this.setState((prevState) => ({
//    tasks: prevState.tasks.filter((_, i) => i !== index)
//  }));
//}
//
//  render() {
//    const { task, tasks } = this.state;
//
//
//    return (
//      <div>
//
//        <form onSubmit={this.onSubmitTask}>
//          <label htmlFor="taskInput">Enter task</label>
//          <input
//            onChange={this.handleChange}
//            value={this.state.task.text}
//            type="text"
//            id="taskInput"
//          />
//          <button type="submit">
//            Add Task
//          </button>
//        </form>
//        <Overview tasks={tasks} deleteItem={this.deleteItem} />
//      </div>
//    );
//  }
//}
//
//export default App;

import React, { useState } from "react";
import Overview from "./components/Overview";


function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = e => {
    setTask({ text: e.target.value});
  };

  const onSubmitTask = (e) => {
    e.preventDefault();
    const tasksClone=[...tasks];
    tasksClone.push(task)
    setTasks(tasksClone);
    setTask({ text: '' }) 
  };

  const deleteItem = (index) => {
    console.log(tasks[index])
    const tasksClone=[...tasks];
    tasksClone.splice(index, 1);
    setTasks(tasksClone)
  }

  
  return (
    <div>
      <form onSubmit={onSubmitTask}>
        <label htmlFor="taskInput">Enter task</label>
        <input
          onChange={handleChange}
          value={task.text}
          type="text"
          id="taskInput"
        />
        <button type="submit">
          Add Task
                </button>
      </form>
      <Overview tasks={tasks} deleteItem={deleteItem}/>
    </div>
  );
};
export default App