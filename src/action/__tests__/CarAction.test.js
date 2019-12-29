import * as CarActions from '../CarAction';
import * as ActionType from '../ActionType';



describe('CarAction.test.js', () => {

    describe('getCarsResponseAction Creator', () => {
        it(`should create action ${ActionType.GET_CARS_RESPONSE}`, () => {
            const cars = [{ brand: 'Ford' }];
            const expectedAction = {
                type: ActionType.GET_CARS_RESPONSE,
                cars: cars
            };

            const actualAction = CarActions.getCarsResponse(cars);

            expect(actualAction).toEqual(expectedAction);
        });
    });


   describe('addNewCarResponseAction Creator', () => {
        it(`should create action ${ActionType.ADD_NEW_CAR_RESPONSE}`, () => {
            const car = { brand: 'Ford' };
            const expectedAction = {
                type: ActionType.ADD_NEW_CAR_RESPONSE
            };

            const actualAction = CarActions.addNewCarResponse(car);

            expect(actualAction).toEqual(expectedAction);
        });
    });




});


