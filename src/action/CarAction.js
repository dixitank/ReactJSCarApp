import * as ActionType from './ActionType';
import { ApiCallBeginAction, ApiCallErrorAction } from './ApiAction';
import axios from 'axios';



export const getCarsResponse = cars => ({
    type: ActionType.GET_CARS_RESPONSE,
    cars
});



export function getCarsAction() {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return axios.get("http://localhost:8080/cars")
            .then(cars => {
                dispatch(getCarsResponse(cars.data));
            }).catch(error => {
                throw error;
            });
    };
}

export function getCarsByMileageAction(distanceToTravel, fuelPricePerLitre) {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return axios.get("http://localhost:8080/cars/" + distanceToTravel + "/" + fuelPricePerLitre)
            .then(cars => {
                dispatch(getCarsResponse(cars.data));
            }).catch(error => {
                throw error;
            });
    };
}



export const addNewCarResponse = () => ({
    type: ActionType.ADD_NEW_CAR_RESPONSE
});



export function saveCarAction(car) {
    return function (dispatch) {

        dispatch(ApiCallBeginAction());

        return axios.post(`http://localhost:8080/cars`, car)
            .then(() => {
                dispatch(addNewCarResponse());
            }).then(() => {
                dispatch(getCarsAction());
            }).catch(error => {
                dispatch(ApiCallErrorAction());
                throw (error);
            });
    };
}


