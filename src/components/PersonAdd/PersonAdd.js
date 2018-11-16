import React, {Component} from 'react';

class PersonAdd extends Component {

    constructor(props){
        super(props)

        this.state = {
            newFirstName : '',
            newLastName : ''
        }
    }

    handleOnChangeFirstName = (e) => {
        this.setState({newFirstName: e.target.value});
    }

    handleOnChangeLastName = (e) => {
        this.setState({newLastName: e.target.value});
    }

    render() {
        return (
            <div>
                First Name: <input name="firstName" onChange={this.handleOnChangeFirstName} value={this.state.newFirstName} type="text" /> <br />
                Last Name: <input name="lastName" onChange={this.handleOnChangeLastName} value={this.state.newLastName} type="text" /> <br /> 
                <button onClick={() => this.props.savePerson(this.state.newFirstName, this.state.newLastName, "PersonList") }> Save </button> 
            </div>
        )
    }
}

export default PersonAdd;