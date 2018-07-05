import React, { Component } from 'react'
import * as formActions from "../../Form/actions"
import TextField from 'material-ui/TextField'
import { connect } from "react-redux"
import { List } from "immutable"
import Datetime from 'react-datetime'
import Submission from './Submission'
import '../../../node_modules/react-datetime/css/react-datetime.css'

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
        this.setState({ isSubmitted: true })
    }

    submmitedCallBack() {

    }

    render() {
        let { currentValues } = this.props
        return (
            <form onSubmit={this.onSubmit.bind(this)} className="float-label">
                <div class="panel panel-default" style={{ marginTop: '15px' }}>
                    <div class="panel-heading"> <strong>Create Event </strong> </div>
                    <div class="panel-body">
                        <div className='col-md-6'>

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
                                floatingLabelText="Delivarables"
                                value={currentValues.get("event_desc")} onChange={e => this.setValue("event_desc", e.target.value)} required
                                inputStyle={{ color: '#333', fontSize: 14, fontFamily: 'Arial, Helvetica, sans-serif' }}
                                fullWidth={true} />

                            <TextField
                                floatingLabelText="Summary"
                                value={currentValues.get("event_summary")} onChange={e => this.setValue("event_summary", e.target.value)} required
                                inputStyle={{ color: '#333', fontSize: 14, fontFamily: 'Arial, Helvetica, sans-serif' }}
                                fullWidth={true} />

                            <TextField
                                floatingLabelText="Event Image URL"
                                value={currentValues.get("imageURL")} onChange={e => this.setValue("imageURL", e.target.value)} required
                                inputStyle={{ color: '#333', fontSize: 14, fontFamily: 'Arial, Helvetica, sans-serif' }}
                                fullWidth={true} />
                        </div>
                        <div className='col-md-6' style={{ marginTop: '20px' }}>
                            <div> Start Date</div>
                            <Datetime timeFormat={false} dateFormat="MM-DD-YYYY" value={currentValues.get("startDate")} closeOnSelect={true} onChange={value => this.setValue("startDate", value)} />
                            <div style={{ marginTop: '15px' }}> End Date</div>
                            <Datetime timeFormat={false} dateFormat="MM-DD-YYYY" value={currentValues.get("endDate")} closeOnSelect={true} onChange={value => this.setValue("endDate", value)} />
                        </div>
                        <div className='col-md-8 pull-left' style={{ marginTop: '15px' }}>
                            <Submission submmitedCallBack={this.submmitedCallBack.bind(this)} />
                        </div>
                    </div>
                </div>

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