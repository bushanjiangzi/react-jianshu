import React from "react";
import "../assets/css/main.css";
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
} from '../store/actionTypes'
import { connect } from 'react-redux'

const TodoList = (props) => {
  const { inputValue, handleInputChange, handleBtnClick, list, handleDelItem } = props
  return (
    <div>
      <label htmlFor="insertArea">输入内容：</label>
      <input
        id="insertArea"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleBtnClick}>提交</button>
      <ul>
          {
            list.map((item, index) => {
              return (
                <li className="li-color"
                  key={index}
                  onClick={() => { handleDelItem(index) }}
                >
                  {index}-{item}
                </li>
              ) 
            })
          }
        </ul>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = {
        type: CHANGE_INPUT_VALUE,
        value: e.target.value
      }
      dispatch(action)
    },
    handleBtnClick() {
      const action = {
        type: ADD_TODO_ITEM
      }
      dispatch(action)
    },
    handleDelItem(index) {
      const action = {
        type: DELETE_TODO_ITEM,
        value: index
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
