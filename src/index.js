import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/State";

let renderEntireTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={props} dispatch={props.dispatch.bind(props)}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
};

renderEntireTree(store);
store.subscribe(renderEntireTree);


reportWebVitals();
