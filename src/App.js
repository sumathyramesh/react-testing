import React, {Component} from 'react';
import PersonList from './components/PersonList/PersonList';
import PersonEdit from './components/PersonEdit/PersonEdit';
import PersonAdd from './components/PersonAdd/PersonAdd';
import './styles/App.css';

const uuid = require('uuid4');
// id = uuid();
// This will create a unique id for new persons

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: "PersonList",
            people: [
                {firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779'},
                {firstName: 'Donald', lastName: 'Knuth', id: 'f515b8de-5916-47db-9fa8-75efe4a5ebb2'}
            ]
        }
    }

    cancelEditTransaction = () => {
        this.setState({view:"PersonList"})
    }

    saveEditedPerson = (firstName, lastName, editingIndex) => {
        const newPeople = this.state.people.map((person, i) => {
            if (i === editingIndex) {
                return {firstName, lastName, id: person.id}
            } else {
                return person
            }
        })        
        this.setState({people: newPeople,
                       view: 'PersonList'})
    }

    selectPerson = (view, editingIndex) => {
        this.setState({view, editingIndex})
    }

    addPerson = () => {
       this.setState({view: "PersonAdd"})
    }

    savePerson = (firstName, lastName, view) => {

        const newPerson = {firstName, lastName, id: '123456'}

        this.setState({people:[...this.state.people, newPerson], view})
    }

    // TODO: FIX SPLICE 
    deletePerson = (editingIndex, view) =>{
        var array = [...this.state.people];
        const deletePeople = array.splice(editingIndex, 1)

        if (editingIndex !== -1) {
            array.splice(editingIndex, 1);
            this.setState({people: array, view});
          }
    }

    render() {
        let content
        if (this.state.view === "PersonList") {
            content = <div><PersonList addPerson={this.addPerson} people={this.state.people} selectPerson={this.selectPerson}/></div>
        } else if(this.state.view === "PersonEdit") {
            content = <PersonEdit deletePerson = {this.deletePerson} saveEditedPerson={this.saveEditedPerson} editingIndex={this.state.editingIndex} people={this.state.people} cancelEditTransaction={this.cancelEditTransaction}/>
        }else if(this.state.view === "PersonAdd"){
            content = <PersonAdd savePerson={this.savePerson} />
        }
        return (
            <div className="App">
                {content}
            </div>
        );
    }
}

export default App;
