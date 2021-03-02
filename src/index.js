import React from 'react';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './redux/State'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./redux/State";

let renderEntireTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={props} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
};

renderEntireTree(state);
subscribe(renderEntireTree);


reportWebVitals();
