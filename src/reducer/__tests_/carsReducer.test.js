import carsReducer from '../carsReducer';
import * as CarAction from '../../action/CarAction';
import * as ActionType from '../../action/ActionType';



describe('carsReducer.test.js', ()  => {

    it('has a default state', () => {
        const initialState = undefined;
        const action = { type: 'blah blah' };

        const newState = carsReducer(initialState, action);

        const expectedState = { cars: [] };

        expect(newState).toEqual(expectedState);
    });



    it(`should get all cars when passed ${ActionType.GET_CARS_RESPONSE}`, () => {
        const initialState = {
            cars: []
        };

        const cars = [{brand: 'Ford', title: 'Ford'}, {brand: 'Fusion', title: 'Fusion'}];

        const action = CarAction.getCarsResponse(cars);

        const newState = carsReducer(initialState, action);

        expect(newState.cars.length).toEqual(2);
        
    });    


});
