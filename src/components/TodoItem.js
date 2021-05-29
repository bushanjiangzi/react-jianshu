import React, { Component } from "react";
import '../assets/css/main.css'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleDelItem = this.handleDelItem.bind(this)
  }
  render() {
    const { content } = this.props
    return (
      <li onClick={this.handleDelItem}>
        {content.index}-{content.item}
      </li>
    );
  }
  handleDelItem() {
    const { deleteItem, content } = this.props
    // 调用父组件方法删除item
    deleteItem(content.index)
  }
}

export default TodoItem;
