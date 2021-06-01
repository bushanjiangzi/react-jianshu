import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "../assets/css/main.css";
import axios from "axios";
import store from '../store'
import { Input, Button, List } from "antd";

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(store.getState())
    this.state = store.getState()
    // this.state = {
    //   inputValue: "",
    //   list: ["学习vue", "学习react"],
    // };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelItem = this.handleDelItem.bind(this);
  }
  render() {
    return (
      <div className="TodoList" style={{ margin: "10px" }}>
        {/* 注释 */}
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
        >
          {this.getTodoItem()}
        </List>
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
    this.setState(() => ({
      inputValue: e.target.value,
    }));
  }
  handleBtnClick() {
    // setState为异步函数
    this.setState(
      (prevState) => {
        return {
          list: [...prevState.list, prevState.inputValue],
          inputValue: "",
        };
      },
      () => {
        // 渲染成功回调函数
      }
    );
  }
  // 挂载完成
  componentDidMount() {
    axios
      .get("http://localhost:3000/api/todoList")
      .then((res) => {
        console.log(res);
        this.setState(() => {
          return {
            list: res.data,
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleDelItem(index) {
    // immurable
    // state 不允许我们直接修改，这会影响到性能优化
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {
        list,
      };
    });
  }
}

export default TodoList;
