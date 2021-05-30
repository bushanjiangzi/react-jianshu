import React, { Component } from "react";
import PropTypes from "prop-types"
import '../assets/css/main.css'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleDelItem = this.handleDelItem.bind(this)
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true // 更新
    } else {
      return false // 不更新
    }
  }
  render() {
    const { content, required } = this.props
    return (
      <li onClick={this.handleDelItem}>
        {content.index}-{content.item} - {required}
      </li>
    );
  }
  handleDelItem() {
    const { deleteItem, content } = this.props
    // 调用父组件方法删除item
    deleteItem(content.index)
  }
}
TodoItem.propTypes = {
  // 必传 - isRequired
  // required: PropTypes.string.isRequired,
  content: PropTypes.object,
  deleteItem: PropTypes.func
}
// 默认值
TodoItem.defaultProps = {
  required: 'true'
}

export default TodoItem;
