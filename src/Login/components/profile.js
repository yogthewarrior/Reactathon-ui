import React, { Component } from 'react'

class profile extends Component {

    toggle(flag) {
    }

    render() {
        return (
            <div className="container">


                <div className="row profile">
                    <div className="col-md-3">
                        <div className="profile-sidebar">
                            <div className="profile-userpic">
                                <img src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg" class="img-responsive" alt="" />
                            </div>
                            <div className="profile-usertitle">
                                <div className="profile-usertitle-name">
                                    Marcus Doe
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
                                        <a  onClick={this.toggle.bind(this,'Account')}>
                                            <i className="glyphicon glyphicon-user"></i>
                                            Account Settings </a>
                                    </li>
                                    <li>
                                        <a onClick={this.toggle.bind(this,'Task')}>
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
                <div className="col-md-9">
                    <div className="profile-content">
                        <div className='col-md-12 profile_border_bottom'>
                            <div className='col-md-12 pull-left'> <h4>Skill</h4></div> <br />
                            <div className='col-md-12 pull-left '>  Languages & Key Skills Java, Android, C, Linux, React Js, Node.Js, Cordova</div>
                        </div>
                        <div className='col-md-12 profile_border_bottom' style={{ marginTop: '10px' }}>
                            <div className='col-md-12 pull-left'> <h4>Achievements</h4></div> <br />
                            <div className="col-sm-6 col-lg-3 col-xs-6"><i><img src="https://static.techgig.com/Themes/Release/images/tg_images_new/Gold.svg" /></i>
                                <p>Gold Badge <a className="tips" href="javascript:void(0);" data-toggle="tooltip" data-placement="bottom" title="" rel="nofollow" data-original-title="Gold Badges can be earnt by participating in Skill Tests &amp; Challenges and earning score greater than 80"> &nbsp; </a></p>
                                <span className="result">3</span></div>
                            <div className="col-sm-6 col-lg-3 col-xs-6"><i><img src="https://static.techgig.com/Themes/Release/images/tg_images_new/Silver.svg" /></i>
                                <p>Silver Badge <a className="tips" href="javascript:void(0);" data-toggle="tooltip" data-placement="bottom" title="" rel="nofollow" data-original-title="Silver Badges can be earnt by participating in Skill Tests &amp; Challenges and earning score between 51 and 80"> &nbsp; </a></p>
                                <span className="result">2</span></div>
                            <div className="col-sm-6 col-lg-3 col-xs-6"><i><img src="https://static.techgig.com/Themes/Release/images/tg_images_new/Bronze.svg" /></i>
                                <p>Bronze Badge <a className="tips" href="javascript:void(0);" data-toggle="tooltip" data-placement="bottom" title="" rel="nofollow" data-original-title="Bronze Badges can be earnt by participating in Skill Tests &amp; Challenges and earning score between 31 and 50"> &nbsp; </a></p>
                                <span className="result">3</span></div>
                        </div>
                        <div className='col-md-12 profile_border_bottom'>
                            <div className='col-md-12 pull-left'> <h4>Work & Experiance</h4></div> <br />
                            <div className='col-md-12 pull-left '>  Company : </div>
                            <div className='col-md-12 pull-left '>  Years of Experiance : </div>
                        </div>
                    </div>
                </div>
            </div>
            </div >
        )
    }
}

export default profile