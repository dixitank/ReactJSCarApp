import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {SearchCarContainer} from '../SearchCarContainer';


describe('SearchCarContainer.test.js', () => {

    it('renders without crashing', () => {
        const props = {
            action: {
                getCarAction: jest.fn()
            },
            initialValues: {brand: 'Fusion'},
            match: {params: {id:'1'}}
        };

        const wrapper = shallow(<SearchCarContainer {...props}/>);
        expect(wrapper.length).toEqual(1);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });

});



    
        