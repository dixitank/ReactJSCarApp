import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {SearchCarListContainerByCriteria} from '../SearchCarListContainerByCriteria';


describe('SearchCarListContainerByCriteria.test.js', () => {

    it('renders without crashing', () => {
        const props = {
            action: {
                getCarAction: jest.fn()
            },
            cars: [{brand: 'Ford'}]
           
        };

        const wrapper = shallow(<SearchCarListContainerByCriteria {...props}/>);
        expect(wrapper.length).toEqual(1);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });

});



    
        