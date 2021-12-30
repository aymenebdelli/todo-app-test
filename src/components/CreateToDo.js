import React from 'react'
import uniqid from 'uniqid'
import {connect} from "react-redux"

const mapDispatchToProps = dispatch => {
    return{
        addTodo: (action) => dispatch(action)
    }
}

class CreateToDo extends React.Component {
    state = {
        trackInput: ""
    }
    changeInput = (e) => {
        this.setState({ trackInput: e.target.value })
    }

    submitTodo = (e) => {
        e.preventDefault();

        const value = {
            id: uniqid(),
            todo: this.state.trackInput
        }
        const action = {
            type: 'ADD',
            payload: value
        }
this.props.addTodo(action)

    }

    render() {
        return (
            <div className="mt-3">
                <form onSubmit={this.submitTodo}>
                    <input type="text" className="form-control" placeholder="Enter ToDo" onChange={this.changeInput} />
                    <input type="submit" className="btn btn-secondary mt-3" value="Submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(CreateToDo)
