import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import * as actions from '../actions'
import {connect} from 'react-redux';
import { Map ,List, fromJS } from 'immutable';

const style = {
  button: {margin: 12, backgroundColor:"#cd040b"}
}

export class Login extends React.Component {
 constructor (props) {
    super(props)
    this.state = {
      username : '' ,password : ''
    }
    this.usernameChange = this.usernameChange.bind(this)
    this.passwordChange = this.passwordChange.bind(this)
 }

  usernameChange(e){
    this.setState({
      username : e.target.value
    })
  }

  passwordChange(e){
    this.setState({
      password : e.target.value
    })
  }

 onSubmit = (e) => {
   e.preventDefault()
   let data = {
     username : this.state.username,
     password : this.state.password
   }

   this.props.login(data).then(() => {
       localStorage.setItem("loginToken",JSON.stringify(data))
       this.props.router.push('/mainPage')
   })
 }

    render(){
        return (
        <div style={{height:"150px",width:"14%",margin:"150px auto"}}>
            <div className="form-group">
                <TextField
                  floatingLabelText = "User Name"
                  hintText="User Name"
                  value={this.state.username}
                  onChange={this.usernameChange}
                />
            </div>
            <div className="form-group">
              <TextField
                floatingLabelText = "Password"
                hintText="Password"
                value={this.state.password}
                onChange={this.passwordChange}
                type="password"
              />
            </div>
              <div className="pull-right">
                <RaisedButton
                              label={this.props.loginRequestLoading?"Logging In...":"Login"}
                              primary={true}
                              style={style.button}
                              onClick={this.onSubmit.bind(this)}
                              />
              </div>

        </div>

     )
    }
}

function mapStateToProps(state,props){
  let loginId = state.getIn(["Login","username"])
  let loginRequest = state.getIn(["Login", "loginRequest"], false)
 return{
   loginId,
   loginRequest,
   loginRequestLoading: state.getIn(["Login","loginRequestLoading"]),
   loginStatus: state.getIn(["Login","loginStatus"]),
 }
}

export default connect(mapStateToProps,actions)(Login)
