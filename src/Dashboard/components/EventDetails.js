import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Submission from './Submission'
import LeaderBoard from './LeaderBoard'


const style = {
    button: { margin: 12, backgroundColor: "#cd040b" }
}
let DisplayText = 'All The best for your participation'
class EventDetails extends Component {
    componentDidMount() {
    }

    constructor(props) {
        super(props)
        this.state = {
            limyClassName: '',
            tabmyClassName: '',
            isParticipated: false
        }
    }


    constructDeliverables(data) {
        let row = []
        data.get('deliverables').forEach(function (data, index) {
            row.push(<p >{index + 1}. {data}</p>)
        })
        return row
    }

    constructFaq(data) {
        let row = []
        data.get('faq').forEach(function (data, index) {
            row.push(<div>
                <p >{index + 1}. {data.get('qes')}</p>
                <p>{data.get('ans')}</p> </div>)
        })
        return row
    }
    triggerParticipate() {
        console.log('triggerParticipate...  ', this.props.loginId)
        // if (this.props.loginId !== '') {
        //     console.log('Trigger ')
        //     this.props.router.push('/')
        // }else {
        //     console.log('no no no ')
        //     this.props.router.push('/')
        // }
        this.setState({ isParticipated: true })
        
    }

    render() {
        let { data } = this.props
        let limyClassName = 'active'
        let tabmyClassName = 'tab-pane active'
        // let limyClassName  = 'active'
        // let tabmyClassName  = 'tab-pane active'
        return (
            <div>
                <section className="design-process-section" id="process-tab">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">

                                <ul className="nav nav-tabs process-model more-icon-preocess" role="tablist">
                                    <li role="presentation" className="active"><a href="#summary" aria-controls="discover" role="tab" data-toggle="tab"><i className="fa fa-search" aria-hidden="true"></i>
                                        <p>Summary</p>
                                    </a></li>
                                    <li role="presentation"><a href="#deliverables" aria-controls="deliverables" role="tab" data-toggle="tab"><i className="fa fa-send-o" aria-hidden="true"></i>
                                        <p>Deliverables</p>
                                    </a></li>
                                    <li role="presentation"><a href="#faq" aria-controls="optimization" role="tab" data-toggle="tab"><i className="fa fa-question-circle" aria-hidden="true"></i>
                                        <p>FAQ</p>
                                    </a></li>
                                    <li role="presentation"><a href="#registration" aria-controls="content" role="tab" data-toggle="tab"><i className="fa fa fa-check-square" aria-hidden="true"></i>
                                        <p>Registration</p>
                                    </a></li>
                                   {this.props.loginId && (
                                       <li role="presentation"><a href="#submission" aria-controls="content" role="tab" data-toggle="tab"><i className="fa fa fa-check-square" aria-hidden="true"></i>
                                       <p>Submission</p>
                                   </a></li>
                                   ) }
                                    
                                    <li role="presentation"><a href="#leader" aria-controls="content" role="tab" data-toggle="tab"><i className="fa fa fa-check-square" aria-hidden="true"></i>
                                        <p>leader</p>
                                    </a></li>
                                </ul>

                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane active" id="summary">
                                        <div className="design-process-content">
                                            <h3 className="semi-bold">Summary</h3>
                                            <div>
                                                <i class="fa fa-calendar" aria-hidden="true" style={{ color: 'green' }}></i> Start Date : {data.get('startDate')} <br /><br />
                                                <i class="fa fa-calendar" aria-hidden="true" style={{ color: 'orange' }}></i> Completion Date : {data.get('endDate')}
                                            </div><br />
                                            <p>{data.get("readMoreConent")}</p>
                                        </div>

                                    </div>
                                    <div role="tabpanel" className="tab-pane" id="deliverables">
                                        <div className="design-process-content">
                                            <h3 className="semi-bold">Deliverables</h3>
                                            {this.constructDeliverables(data)}
                                        </div>
                                    </div>
                                    <div role="tabpanel" className="tab-pane" id="faq">
                                        <div className="design-process-content">
                                            <h3 className="semi-bold">FAQ</h3>
                                            {this.constructFaq(data)}
                                        </div>
                                    </div>
                                    <div role="tabpanel" className="tab-pane" id="registration">
                                        <div className="design-process-content">
                                            <h3 className="semi-bold">Registration</h3>
                                            <RaisedButton
                                                label={"Would like to participate"}
                                                primary={true}
                                                style={style.button}
                                                onClick={this.triggerParticipate.bind(this)}
                                            />

                                            {this.state.isParticipated && (<div className='col-md-12' style={{ color: "green" }}> {this.props.loginId ?'All The best for your participation':'Please login'} </div>)}

                                        </div>
                                    </div>
                                    <div role="tabpanel" className="tab-pane" id="submission">
                                        <div className="design-process-content">
                                            <h3 className="semi-bold">Submission</h3>
                                            <Submission />
                                        </div>
                                    </div>
                                    <div role="tabpanel" className="tab-pane" id="leader">
                                        <div className="design-process-content">
                                            <h3 className="semi-bold">leader</h3>
                                            <LeaderBoard data ={data.get('leaderBoard')}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


function mapStateToProps(state, props) {
    let loginId = state.getIn(["Login", "username"], '')
    return {
        loginId
    }
}

export default withRouter(connect(mapStateToProps, null)(EventDetails))