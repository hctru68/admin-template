import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import profileReducer from './profileReducer';

export default combineReducers({
    router: routerReducer,
    profile: profileReducer,
});
