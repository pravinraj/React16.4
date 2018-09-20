import React from 'react';
import ReactDOM from 'react-dom';
import { Button,ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import  './index.css';
import MyInput from './MyInput.jsx';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }  

  componentDidMount(){
    this.textInput.current.focus();
  }

  render() {
    return (
      <div styles={styles}>
        <div>Hello CodeSandbox</div>
        <MyInput ref={this.textInput}/>
      </div>
    );
  }
}


ReactDOM.render(
	<App/>,
	document.getElementById('app')
);