import React, {Component} from 'react';

class PersonEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {curFirstName: props.people[props.editingIndex].firstName, curLastName: props.people[props.editingIndex].lastName}
    }

    updateFirstName = (e) => {
        this.setState({curFirstName: e.target.value})
    }

    updateLastName = (e) => {
        this.setState({curLastName: e.target.value})
    }

    render() {
        return (
            <div className="PersonEdit">
                <form onSubmit={(e) => {e.preventDefault(); this.props.saveEditedPerson(this.state.curFirstName, this.state.curLastName, this.props.editingIndex)}}>
                    <input onChange={(e) => this.updateFirstName(e)} value={this.state.curFirstName}></input>
                    <input onChange={(e) => this.updateLastName(e)} value={this.state.curLastName}></input>
                    
                    <button type="button" onClick={() => this.props.saveEditedPerson(this.state.curFirstName, this.state.curLastName, this.props.editingIndex)}>Save</button>
                    <button type="button" onClick={() => this.props.cancelEditTransaction()}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default PersonEdit;
