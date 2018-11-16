import React, {Component} from 'react';

class PersonList extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <ul className="PersonList">
                    {this.props.people.map((person, i) => <a key={person.id} onClick={() => {this.props.selectPerson("PersonEdit", i)}}><li>{person.firstName} {person.lastName}</li></a>)}
                </ul>
                <button onClick={() => this.props.addPerson() }>Add New</button>
            </div>
        );
            
    }
}

export default PersonList;
