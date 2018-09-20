import React from 'react';
import ReactDOM from 'react-dom';
import { Button,ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import  './index.css';
import {CountContext} from './CountContext.jsx';
import Container1 from './Container1.jsx';
import Container2 from './Container2.jsx';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: [],
      //count: 0
      contextState:{
        count:0,
        increment: this.increment.bind(this)
      }
    }
    this.onChange = this.onChange.bind(this);
  }

  increment(){
    this.setState({
      contextState:{
        ...this.state.contextState,
        count: this.state.contextState.count +1
      }
    });
  }

  onChange(e){
    const {value, name} = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <CountContext.Provider
        value={this.state.contextState}
      >
        <div style={styles}>
          <input name='text' value={this.state.text} onChange={this.onChange}/>
          <div>Count: {this.state.contextState.count}</div>
          <Container1/>
          <Container2/>
        </div>
        
      </CountContext.Provider>
    );
  }
}


ReactDOM.render(
	<App/>,
	document.getElementById('app')
);