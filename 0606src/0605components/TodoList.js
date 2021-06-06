import React, { Component } from "react";
import "../assets/css/main.css";
import store from '../store'
// import axios from 'axios'
import { getChangeInputValue, getAddTodoItem, getDeleteTodoItem, getTodoList } from '../store/creatActions'
import TodoListUI from './TodoListUI'

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
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleDelItem={this.handleDelItem}
      ></TodoListUI>
    );
  }
  // 挂载完成
  componentDidMount() {
    /**
     * redux-saga
     * redux-thunk
     */
    const action = getTodoList()
    store.dispatch(action)
    // axios.get('../../json/todoList.json')
    //   .then((res) => {
    //     console.log(res)
    //     const action = initListAction(res.data.list)
    //     store.dispatch(action)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }
  handleInputChange(e) {
    const action = getChangeInputValue(e.target.value)
    store.dispatch(action)
  }
  handleBtnClick() {
    const action = getAddTodoItem()
    store.dispatch(action)
  }
  // 删除item
  handleDelItem(index) {
    const action = getDeleteTodoItem(index)
    store.dispatch(action)
  }
  // 处理store更新
  handleStoreChange() {
    // console.log(store.getState())
    this.setState(store.getState())
  }
}

export default TodoList;
