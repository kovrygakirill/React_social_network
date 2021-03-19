import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux_store";

let renderEntireTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={props} dispatch={store.dispatch.bind(store)} store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
};

renderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
});

reportWebVitals();
