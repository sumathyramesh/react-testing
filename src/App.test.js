import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
});

it('should render PersonAdd component when add button is clicked', () => {
    
    const appWrapper = shallow(<App />)

    appWrapper.setState({view: 'PersonAdd'});

    expect(appWrapper.state().view).toEqual('PersonAdd');
})

it('should save a person to the people array in state', () => {

    const view = 'PersonList'
    const testPerson = {firstName: 'Mickey', lastName: 'Mouse', id: '123456'}
    const appWrapper = shallow(<App />)
    
    appWrapper.instance().savePerson(testPerson.firstName, testPerson.lastName, 'PersonList');

    expect(appWrapper.state().people[2]).toEqual(testPerson)
})

it('should delete a person with deletePerson callback, called from personEdit', () => {
    
    const edit_index = 0;
    const testPerson = {firstName: 'Mickey', lastName: 'Mouse', id: '123456'}
    const appWrapper = shallow(<App />)

    appWrapper.instance().deletePerson(edit_index, 'PersonList');
    
    //appWrapper.update();
        
    //const personList = appWrapper.find(PersonList);
    expect(appWrapper.state().people).not.toContainEqual(testPerson)
})
