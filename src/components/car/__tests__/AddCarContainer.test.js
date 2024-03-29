import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {AddCarContainer} from '../AddCarContainer';


describe('AddCarContainer.test.js', () => {

    it('renders without crashing', () => {
        const props = {
            action: {
                getCourseAction: jest.fn()
            },
            initialValues: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''},
            match: {params: {id:'1'}}
        };

        const wrapper = shallow(<AddCarContainer {...props}/>);
        expect(wrapper.length).toEqual(1);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });

});



    
        