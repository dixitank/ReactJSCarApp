import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import carsReducer from './carsReducer';
import apiReducer from './apiReducer';

export default combineReducers({
    carsReducer,
    apiReducer,
    form: formReducer    
});


