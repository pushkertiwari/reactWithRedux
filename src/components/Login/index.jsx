import React, { Component, Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { loginAction } from '../../actions/loginAction';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange =  this.handleChange.bind(this);
    this.submitForm   =    this.submitForm.bind(this);
  }
  handleChange(e){
    e.preventDefault();
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  submitForm(e){
    e.preventDefault();
    if(this.state.email !== '' && this.state.password !== ''){
      this.props.loginAction(this.state); 
    }else{
      alert('Please check your fields');  
    }
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <div className="container" style={{ padding: '.5rem' }}>
        <Form onSubmit={this.submitForm}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" defaultValue={this.state.email} id="exampleEmail" placeholder="Email" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Password" defaultValue={this.state.password} onChange={this.handleChange} />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
 return {
   user: state.user
 }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (user) => {
      dispatch(loginAction(user))
  },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login));