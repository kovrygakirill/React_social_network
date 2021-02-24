import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Kirill'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Maxh'}
];

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What is your name?'},
];

let postsData = [
    {id: 1, message: 'Hello Bob', likeCount: 10},
    {id: 2, message: 'Hi Kirill', likeCount: 12},
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
