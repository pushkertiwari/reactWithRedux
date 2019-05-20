import React, {Fragment,Component} from 'react';
import { Button,Alert } from 'reactstrap';
import { withRouter } from "react-router"; 
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.ChangeUrl =  this.ChangeUrl.bind(this);
  }
  ChangeUrl(e){
    e.preventDefault();
    this.props.history.push('/login');
  }
  App = ()=> {
    return (
      <Fragment>
       <Alert color="primary">
          This is a primary alert — check it out!
        </Alert>
        <Button color="primary" onClick={this.ChangeUrl}>primary</Button>
      </Fragment>
    );
  }
  render(){
    return(
      this.App()
    );
  }
}

export default connect()(withRouter(App));
