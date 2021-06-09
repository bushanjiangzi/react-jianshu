import React from 'react';
import ReactDOM from 'react-dom';
// import './style.js';
import './reset.css';
import App from './App';
// import reportWebVitals from './reportWebVitals'; // HTTPS协议下支持缓存，无网络状态下读取缓存数据
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './statics/iconfont/iconfont.css';

moment.locale('zh-cn');

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
