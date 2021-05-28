import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "fsf",
      list: [],
    };
  }
  render() {
    return (
      <div className="TodoList">
        <input
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        />
        <button>提交</button>
        <ul>
          <li>哈哈哈</li>
          <li>嘻嘻嘻</li>
        </ul>
      </div>
    );
  }
  handleInputChange(e) {
    console.log(e.target.value)
    // this.state.inputValue = e.target.value;
    this.setState({
      inputValue: e.target.value
    })
  }
}

export default TodoList;
