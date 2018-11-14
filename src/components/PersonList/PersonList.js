import React, {Component} from 'react';

class PersonList extends Component {

    render() {
        return (
            <ul className="PersonList">
                {this.props.people.map((person, i) => <a key={person.id} onClick={() => {this.props.selectPerson("PersonEdit", i)}}><li>{person.firstName} {person.lastName}</li></a>)}
            </ul>
        );
    }
}

export default PersonList;
