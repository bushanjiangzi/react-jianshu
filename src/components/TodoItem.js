import React, { Component } from "react";
import '../assets/css/main.css'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleDelItem = this.handleDelItem.bind(this)
  }
  render() {
    return (
      <li onClick={this.handleDelItem}>
        {this.props.content.index}-{this.props.content.item}
      </li>
    );
  }
  handleDelItem() {
    console.log(this.props.content)
    // 调用父组件方法删除item
    this.props.deleteItem(this.props.content.index)
  }
}

export default TodoItem;
