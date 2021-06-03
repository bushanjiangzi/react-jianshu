import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "../../assets/css/main.css";
import store from '../../store'
import { Input, Button, List } from "antd";
import { getChangeInputValue, getAddTodoItem, getDeleteTodoItem } from '../../store/creatActions'

class TodoList extends Component {
  constructor(props) {
    super(props);
    // console.log(store.getState())
    // 初次获取store数据
    this.state = store.getState()
    // `store.subscribe`j监听store数据变化手动更新重新获取store数据
    store.subscribe(this.handleStoreChange.bind(this))
    // 其他事件
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelItem = this.handleDelItem.bind(this);
  }
  render() {
    return (
      <div className="TodoList" style={{ margin: "10px" }}>
        <label htmlFor="insertArea">输入内容：</label>
        <Input
          placeholder="todo info"
          style={{ width: "300px", margin: "10px" }}
          id="insertArea"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <Button type="primary" onClick={this.handleBtnClick}>
          提 交
        </Button>
        <List
          style={{ width: '300px'}}
          size="small"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.handleDelItem}>{index}-{item}</List.Item>)}
        />
      </div>
    );
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={{ item: item, index: index }}
          deleteItem={this.handleDelItem}
        ></TodoItem>
      );
    });
  }
  handleInputChange(e) {
    const action = getChangeInputValue(e.target.value)
    store.dispatch(action)
  }
  handleBtnClick() {
    const action = getAddTodoItem()
    store.dispatch(action)
  }
  // 挂载完成
  componentDidMount() {
    // axios
    //   .get("http://localhost:3000/api/todoList")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  // 删除item
  handleDelItem(index) {
    const action = getDeleteTodoItem(index)
    store.dispatch(action)
  }
  // 处理store更新
  handleStoreChange() {
    this.setState(store.getState())
  }
}

export default TodoList;
