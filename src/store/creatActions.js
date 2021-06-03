import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION
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

export {
  getChangeInputValue,
  getAddTodoItem,
  getDeleteTodoItem,
  initListAction
}