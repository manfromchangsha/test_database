import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import './register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state={
      userList: [],
      newUser: {
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        phone: ''
      }
    }
  }

  listUsers() {
    fetch('/listUsers')
      .then(res => res.json())
      .then(res => this.setState({userList: res.data}))
      .catch(err => console.log(err))
  }

  registerUser () {
    const { newUser } = this.state;
    fetch(`/registerUser?first=${newUser.first_name}&last=${newUser.last_name}&email=${newUser.email}&pass=${newUser.password}&phone=${newUser.phone}`)
      .then(this.listUsers)
      .catch(err => console.log(err))
  }

  renderUserList = ({UserID, FirstName, LastName}) => <div key={UserID}>{UserID} {FirstName} {LastName}</div>

  render() {
    const { userList, newUser } = this.state;
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar title="Register" showMenuIconButton={false} className="appBar" />
           <TextField
             className ="field1"
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState( newUser: {...newUser, first_name: newValue})}
             />
           <br/>
           <TextField
             className ="field2"
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState( newUser: {...newUser, last_name: newValue})}
             />
           <br/>
           <TextField
             className ="field3"
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState( newUser: {...newUser, email: newValue})}
             />
           <br/>
           <TextField
             className ="field4"
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState( newUser: {...newUser, password: newValue})}
             />
           <br/>
           <TextField
             className ="field5"
             hintText="Enter your Phone Number"
             floatingLabelText="Phone Number"
             onChange = {(event,newValue) => this.setState( newUser: {...newUser, phone: newValue})}
             />
           <br/>
           <RaisedButton className="submit" label="Submit" primary={true} style={style} onClick={(event) => this.registerUser(event)}/>
          </div>
         </MuiThemeProvider>
         <h2 User List />
         {this.state.userList.map(this.renderUserList)}
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;
