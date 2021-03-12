import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reduser";
import dialogsReducer from "./dialogs_reduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer
});

let store = createStore(reducers);



export default store;