import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'immutable'
import Header from '../../Layout/components/Header'
import { Pie } from 'react-chartjs-2';

const data = {
    labels: [
        'You',
        'Topper',
    ],
    datasets: [{
        data: [48, 50],
        backgroundColor: [
            '#FF6384',
            '#36A2EB'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB'
        ]
    }]
};


class profile extends Component {

    toggle(flag) {
    }

    render() {
        let { profile } = this.props
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <Header />
                </div>
                <div className="col-md-12 profile">
                    <div className="col-md-2">
                        <div className="profile-sidebar">
                            <div className="profile-userpic">
                                <img src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg" class="img-responsive" alt="" />
                            </div>
                            <div className="profile-usertitle">
                                <div className="profile-usertitle-name">
                                    {profile.get('name')}
                                </div>
                                <div className="profile-usertitle-job">
                                    Developer
                            </div>
                            </div>

                            <div className="profile-userbuttons">
                                <button type="button" className="btn btn-success btn-sm">Follow</button>
                                <button type="button" className="btn btn-danger btn-sm">Message</button>
                            </div>

                            <div className="profile-usermenu">
                                <ul className="nav">
                                    <li className="active">
                                        <a onClick={this.toggle.bind(this, 'overview')}>
                                            <i className="glyphicon glyphicon-home"></i>
                                            Overview </a>
                                    </li>
                                    <li>
                                        <a onClick={this.toggle.bind(this, 'Account')}>
                                            <i className="glyphicon glyphicon-user"></i>
                                            Account Settings </a>
                                    </li>
                                    <li>
                                        <a onClick={this.toggle.bind(this, 'Task')}>
                                            <i className="glyphicon glyphicon-ok"></i>
                                            Tasks </a>
                                    </li>
                                    <li>
                                        <a onClick={this.toggle.bind(this, 'Help')}>
                                            <i className="glyphicon glyphicon-flag"></i>
                                            Help </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-content">
                            <div className='col-md-12 profile_border_bottom'>
                                <div className='col-md-12 pull-left'> <h3>Skill</h3></div> <br />
                                <div className='col-md-12 pull-left '>  {profile.get('skills')}</div>
                            </div>
                            <div className='col-md-12 profile_border_bottom' style={{ marginTop: '10px' }}>
                                <div className='col-md-12 pull-left'> <h3>Achievements</h3></div> <br />
                                <div className="col-sm-6 col-lg-3 col-xs-6"><i><img src="https://static.techgig.com/Themes/Release/images/tg_images_new/Gold.svg" /></i>
                                    <p>Gold Badge <a className="tips" href="javascript:void(0);" data-toggle="tooltip" data-placement="bottom" title="" rel="nofollow" data-original-title="Gold Badges can be earnt by participating in Skill Tests &amp; Challenges and earning score greater than 80"> &nbsp; </a></p>
                                    <span className="result"> <strong>{profile.get('goldBadge')}</strong></span></div>
                                <div className="col-sm-6 col-lg-3 col-xs-6"><i><img src="https://static.techgig.com/Themes/Release/images/tg_images_new/Silver.svg" /></i>
                                    <p>Silver Badge <a className="tips" href="javascript:void(0);" data-toggle="tooltip" data-placement="bottom" title="" rel="nofollow" data-original-title="Silver Badges can be earnt by participating in Skill Tests &amp; Challenges and earning score between 51 and 80"> &nbsp; </a></p>
                                    <span className="result"> <strong>{profile.get('silverBadge')}</strong></span></div>
                                <div className="col-sm-6 col-lg-3 col-xs-6"><i><img src="https://static.techgig.com/Themes/Release/images/tg_images_new/Bronze.svg" /></i>
                                    <p>Bronze Badge <a className="tips" href="javascript:void(0);" data-toggle="tooltip" data-placement="bottom" title="" rel="nofollow" data-original-title="Bronze Badges can be earnt by participating in Skill Tests &amp; Challenges and earning score between 31 and 50"> &nbsp; </a></p>
                                    <span className="result"> <strong>{profile.get('bronzeBadge')}</strong> </span></div>
                            </div>
                            <div className='col-md-12 profile_border_bottom'>
                                <div className='col-md-12 pull-left'> <h3>Work & Experiance</h3></div> <br />
                                <div className='col-md-12 pull-left '>  <strong>Company`s Worked : </strong>{profile.get('companies')}</div>
                                <div className='col-md-12 pull-left '>  <strong> Years of Experiance : </strong> {profile.get('totalExp')}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ marginTop: '40px' }}>
                    <Pie data={data} />
                    </div>

                </div>
            </div >
        )
    }
}

function mapStateToProps(state, props) {
    let loginId = state.getIn(["Login", "username"], '')
    let loginRequest = state.getIn(["Login", "loginRequest"], false)
    return {
        loginId,
        loginRequest,
        loginRequestLoading: state.getIn(["Login", "loginRequestLoading"]),
        profile: state.getIn(["Login", "loginStatus"], List()),
    }
}

export default connect(mapStateToProps, null)(profile)