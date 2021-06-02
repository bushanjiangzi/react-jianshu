import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

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

export {
  getChangeInputValue,
  getAddTodoItem,
  getDeleteTodoItem
}