import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';



const carsReducer = (state = initialState.carsReducer, action) => {
    switch(action.type) {
        case ActionType.GET_CARS_RESPONSE: {
            return {
                ...state, 
                cars: _.assign(action.cars)
            };
        }


        default: { return state; }
    }
};



export default carsReducer;