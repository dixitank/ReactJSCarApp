import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {CarForm} from '../CarForm';



function setup(heading) {
    const props = {
        handleSubmit: jest.fn(),
        pristine: true,
        reset: jest.fn(),
        submitting: false,
        heading: heading,
        handleSave: jest.fn(),
        handleCancel: jest.fn(),
    };

    return shallow(<CarForm {...props}/>);
}


describe('CarForm.test.js', () => {

    it('renders without crashing', () => {
        const wrapper = setup('Add');
        expect(wrapper.length).toEqual(1);
        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });


    it('renders form and display "Add" in h1', () => {
        const wrapper = setup('Add');
        expect(wrapper.find('h1').text()).toEqual('Add');
    });
    
});

