import axios from 'axios'
// import store from '../store'
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
  // GET_INIT_LIST
} from './actionTypes'

const getChangeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
const getAddTodoItem = (value) => ({
  type: ADD_TODO_ITEM,
  value
})
const getDeleteTodoItem = (value) => ({
  type: DELETE_TODO_ITEM,
  value
})
const initListAction = (value) => ({
  type: INIT_LIST_ACTION,
  value
})

// redux-thunk
const getTodoList = () => {
  return (dispatch) => {
    axios.get('../../json/todoList.json')
    .then((res) => {
      console.log(res)
      const action = initListAction(res.data.list)
      dispatch(action)
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

// redux-saga
// const getTodoList = (value) => ({
//   type: GET_INIT_LIST
// })

export {
  getChangeInputValue,
  getAddTodoItem,
  getDeleteTodoItem,
  initListAction,
  getTodoList
}