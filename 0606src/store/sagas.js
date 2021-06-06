import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import axios from 'axios'
// import store from '../store'
import { initListAction } from './creatActions'

// generator函数
function* mySagas() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

function* getInitList() {
  // console.log('my sagas')
  try {
    const res = yield axios.get('../../json/todoList.json')
    console.log(res)
    const action = initListAction(res.data.list)
    yield put(action)
  } catch {
    console.log('getInitList 网络请求失败！')
  }

}

export default mySagas