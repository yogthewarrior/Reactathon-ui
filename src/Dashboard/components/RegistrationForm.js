import React, { Component } from 'react'
import * as formActions from "../../Form/actions"
import TextField from 'material-ui/TextField'
import { connect } from "react-redux"
import { List } from "immutable"
import RaisedButton from 'material-ui/RaisedButton'

const formName = "RegistrationForm"

class RegistrationForm extends Component {
    setValue(field, value) {
        this.props.setValue(formName, field, value)
    }

    onSubmit(e) {
        e.preventDefault()
        console.log("Submit data############################" + JSON.stringify(this.props.currentValues.toJS()))
    }

    render() {
        let { currentValues } = this.props
        return (
            <div>
                RegistrationForm
                <form onSubmit={this.onSubmit.bind(this)} className="float-label">
                    <TextField
                        floatingLabelText="Team Name"
                        value={currentValues.get("teamName")} onChange={e => this.setValue("teamName", e.target.value)} required
                        inputStyle={{ color: '#333', fontSize: 14, fontFamily: 'Arial, Helvetica, sans-serif' }}
                        fullWidth={true} />

                    <TextField
                        floatingLabelText="Mobile No" type="number"
                        value={currentValues.get("mobileNo")} onChange={e => this.setValue("mobileNo", e.target.value)} required
                        inputStyle={{ color: '#333', fontSize: 14, fontFamily: 'Arial, Helvetica, sans-serif' }}
                        fullWidth={true} />
                    <button type="submit" className="btn-danger pull-right">Submit</button>
                </form>
            </div>
        )
    }
}

function stateToProps(state) {
    return {
        currentValues: state.getIn(["Forms", formName, "currentValues"], List())
    }
}

export default connect(stateToProps, { ...formActions })(RegistrationForm)