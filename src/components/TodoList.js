import React, { Component } from "react";
import '../assets/css/main.css'
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ['学习vue', '学习react'],
    };
  }
  render() {
    return (
      <div className="TodoList">
        {/* 注释 */}
        <label htmlFor="insertArea">输入内容：</label>
        <input
        id="insertArea"
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              // 设置HTML文本，不转义
              // dangerouslySetInnerHTML={{__html: item}}
              return (
                <TodoItem
                  key={index}
                  content={{item: item, index:index}}
                  // 绑定this给子组件，方便子组件调用父组件方法
                  deleteItem={this.handleDelItem.bind(this)}
                ></TodoItem>
              ) 
            })
          }
        </ul>
      </div>
    );
  }
  handleInputChange(e) {
    // console.log(e.target.value)
    // this.state.inputValue = e.target.value;
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleDelItem(index) {
    console.log(index)
    // immurable
    // state 不允许我们直接修改，这会影响到性能优化
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default TodoList;
