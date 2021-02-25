import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./redux/State";


export let renderEntireTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={props} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
};
