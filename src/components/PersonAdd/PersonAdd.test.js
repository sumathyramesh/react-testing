import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import PersonAdd from './PersonAdd';
import App from '../../App';

it('should render PersonAdd component when loaded', () => {
    const personAddWrapper = shallow(<PersonAdd />)
    const personAdd = personAddWrapper.find('button')

    //Assert
    expect(personAdd).toHaveLength(1)
})

it('should call savePerson component when save button is clicked', () => {
    // setup

    const savePerson = sinon.stub();

    const personAddWrapper = shallow(<PersonAdd savePerson={savePerson}/>)
    const saveButtonClick = personAddWrapper.find('button').at(0)

    //Exercise
    saveButtonClick.simulate('click')

    //Assert
    expect(savePerson.calledOnce).toBe(true)
})


it('should render PersonList component when save button clicked', () => {
    // setup
    const appWrapper = shallow(<App />)
    // exercise
    appWrapper.setState({view: 'PersonList'});
    // assert
    expect(appWrapper.state().view).toEqual('PersonList');
})

it('calls handleOnChangeFirstName when input box is edited', () => {
    // setup
    const personAddWrapper = shallow(<PersonAdd />)
    const inputBox = personAddWrapper.find('input').at(0)

    const event = {target: {name: "firstName", value: "hello"}};

    inputBox.simulate('change', event)

    // assert
    expect(personAddWrapper.state().newFirstName).toEqual('hello')
})

it('calls handleOnChangeLastName when input box is edited', () => {
    // setup
    const personAddWrapper = shallow(<PersonAdd />)
    const inputBox = personAddWrapper.find('input').at(1)

    const event = {target: {name: "lastName", value: "world"}};

    inputBox.simulate('change', event)

    // assert
    expect(personAddWrapper.state().newLastName).toEqual('world')
})
