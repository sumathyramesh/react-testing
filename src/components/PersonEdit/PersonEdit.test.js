import React from 'react';
import PersonEdit from './PersonEdit'
import { shallow } from 'enzyme';
import sinon from 'sinon';

it('calls saveEditedPerson when an edit is saved', () => {

    // setup
    const personData = [{firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779'}];
    const saveEditedPerson = sinon.stub()
    const index_dummy = 0;

    const personEditWrapper = shallow(<PersonEdit people={personData} saveEditedPerson={saveEditedPerson} editingIndex={index_dummy}/>)
   // const editPerson = personEditWrapper.find('button').at(0)
    
    // execute
    const editPerson = personEditWrapper.find('button').at(0)
    editPerson.simulate('click')

    // assert
    expect(saveEditedPerson.calledOnce).toBe(true);

})

it('calls cancelPerson when cancel button is clicked', () => {

    // setup
    const personData = [{firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779'}];
    const index_dummy = 0;
    const cancelTransaction = sinon.stub()
    const saveEditedPerson = sinon.stub()
    const cancelTransactionWrapper = shallow(<PersonEdit people={personData} saveEditedPerson={saveEditedPerson} editingIndex={index_dummy} cancelEditTransaction={cancelTransaction}/>)

    // execute
    const cancelEdit = cancelTransactionWrapper.find('button').at(1)
    cancelEdit.simulate("click")

    // assert
    expect(cancelTransaction.calledOnce).toBe(true)
})