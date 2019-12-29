import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import CarList from '../CarList';


describe('CarList.test.js', () => {

    it('renders without crashing', () => {
        const props = {
            cars: [
                { brand: 'Ford', Model: 'Ford' },
                { brand: 'Fusion', Model: 'Fusion' },              
            ],
            handleRowSelect: jest.fn()            
        };
        
        const wrapper = shallow(<CarList {...props}/>);

        expect(wrapper).toHaveLength(1);
        expect(wrapper.find('BootstrapTable')).toHaveLength(1);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });
});
