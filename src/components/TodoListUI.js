// import React, { Component } from "react";
import "../assets/css/main.css";
import { Input, Button, List } from "antd";

// 无状态组件（只有一个render生命周期）
const TodoListUI = (props) => {
  return (
    <div className="TodoList" style={{ margin: "10px" }}>
      <label htmlFor="insertArea">输入内容：</label>
      <Input
        placeholder="todo info"
        style={{ width: "300px", margin: "10px" }}
        id="insertArea"
        value={props.inputValue}
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleBtnClick}>提 交</Button>
      <List
        style={{ width: '300px'}}
        size="small"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={() => {props.handleDelItem(index)}}>{index}-{item}</List.Item>)}
      />
    </div>
  );
}

export default TodoListUI;

// class TodoListUI extends Component {
//   render() {
//     return (
//       <div className="TodoList" style={{ margin: "10px" }}>
//         <label htmlFor="insertArea">输入内容：</label>
//         <Input
//           placeholder="todo info"
//           style={{ width: "300px", margin: "10px" }}
//           id="insertArea"
//           value={this.props.inputValue}
//           onChange={this.props.handleInputChange}
//         />
//         <Button type="primary" onClick={this.props.handleBtnClick}>提 交</Button>
//         <List
//           style={{ width: '300px'}}
//           size="small"
//           header={<div>Header</div>}
//           footer={<div>Footer</div>}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.handleDelItem(index)}}>{index}-{item}</List.Item>)}
//         />
//       </div>
//     );
//   }
// }