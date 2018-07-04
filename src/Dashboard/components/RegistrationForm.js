import React, { Component } from 'react'
import * as formActions from "../../Form/actions"
import TextField from 'material-ui/TextField'
import { connect } from "react-redux"
import { List } from "immutable"
import RaisedButton from 'material-ui/RaisedButton'
import Submission from './Submission'

const formName = "RegistrationForm"

class RegistrationForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isSubmitted: false
        }
    }

    setValue(field, value) {
        this.props.setValue(formName, field, value)
    }

    onSubmit(e) {
        e.preventDefault()
        console.log("Submit data############################" + JSON.stringify(this.props.currentValues.toJS()))
        this.setState({isSubmitted : true})
    }

    submmitedCallBack() {
        
    }

    render() {
        let { currentValues } = this.props
        return (
                <form onSubmit={this.onSubmit.bind(this)} className="float-label">
                {this.state.isSubmitted ? (<div style={{ color: 'green', fontSize: '20px' }}>  Submitted Successfully! </div>) : ''}
                    <TextField
                        floatingLabelText="Event Name"
                        value={currentValues.get("eventName")} onChange={e => this.setValue("eventName", e.target.value)} required
                        inputStyle={{ color: '#333', fontSize: 14, fontFamily: 'Arial, Helvetica, sans-serif' }}
                        fullWidth={true} />

                    <TextField
                        floatingLabelText="Event Category" 
                        value={currentValues.get("event_ctr")} onChange={e => this.setValue("event_ctr", e.target.value)} required
                        inputStyle={{ color: '#333', fontSize: 14, fontFamily: 'Arial, Helvetica, sans-serif' }}
                        fullWidth={true} />

                    <TextField
                        floatingLabelText="Discription" 
                        value={currentValues.get("event_ctr")} onChange={e => this.setValue("event_ctr", e.target.value)} required
                        inputStyle={{ color: '#333', fontSize: 14, fontFamily: 'Arial, Helvetica, sans-serif' }}
                        fullWidth={true} />
                   
                    <TextField
                        floatingLabelText="Summary" 
                        value={currentValues.get("event_ctr")} onChange={e => this.setValue("event_ctr", e.target.value)} required
                        inputStyle={{ color: '#333', fontSize: 14, fontFamily: 'Arial, Helvetica, sans-serif' }}
                        fullWidth={true} />
                        <Submission submmitedCallBack={this.submmitedCallBack.bind(this)}/>
                </form>
        )
    }
}

function stateToProps(state) {
    return {
        currentValues: state.getIn(["Forms", formName, "currentValues"], List())
    }
}

export default connect(stateToProps, { ...formActions })(RegistrationForm)