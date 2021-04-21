import React, { Component } from "react";
import Overview from "./components/Overview";


class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: '' },
      tasks: [],
    };
    this.deleteItem = this.deleteItem.bind(this);
  }


  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '' },
    });
  };

    deleteItem(index){
  this.setState((prevState) => ({
    tasks: prevState.tasks.filter((_, i) => i !== index)
  }));
}

  render() {
    const { task, tasks } = this.state;


    return (
      <div>

        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={this.state.task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;