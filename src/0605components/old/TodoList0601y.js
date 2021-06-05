import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "../assets/css/main.css";
import axios from "axios";
import { Input, Button, List } from "antd";

// const data = [
//   "Racing car sprays burning fuel into crowd.",
//   "Japanese princess to wed commoner.",
//   "Australian walks 100km after outback crash.",
//   "Man charged over missing wedding girl.",
//   "Los Angeles battles huge wildfires.",
// ];
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["学习vue", "学习react"],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelItem = this.handleDelItem.bind(this);
  }
  render() {
    return (
      <div className="TodoList" style={{ margin: "10px" }}>
        {/* 注释 */}
        <label htmlFor="insertArea">输入内容：</label>
        {/* <input
          id="insertArea"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleBtnClick}>提交</button> */}
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
        {/* <ul
          ref={(ul) => {
            this.ul = ul;
          }}
        >
          {this.getTodoItem()}
        </ul> */}
        <List
          style={{ width: '300px'}}
          size="small"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          // dataSource={data}
          // renderItem={(item) => <List.Item>{item}</List.Item>}
        >
          {this.getTodoItem()}
        </List>
      </div>
    );
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      // 设置HTML文本，不转义
      // dangerouslySetInnerHTML={{__html: item}}
      return (
        <TodoItem
          key={index}
          content={{ item: item, index: index }}
          // 绑定this给子组件，方便子组件调用父组件方法
          deleteItem={this.handleDelItem}
        ></TodoItem>
      );
    });
  }
  handleInputChange(e) {
    // 旧版写法
    // this.setState({
    //   inputValue: e.target.value,
    // });
    // 新版写法
    this.setState(() => ({
      inputValue: e.target.value,
    }));
    // this.setState(() => {
    //   return {
    //     inputValue: e.target.value,
    //   };
    // });
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
        // console.log(this.ul.querySelectorAll("li").length);
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
