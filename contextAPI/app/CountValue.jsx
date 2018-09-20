import React from 'react';
import {CountContext} from './CountContext.jsx';

class CountValue extends React.Component{
	render(){
		return(
			<CountContext.Consumer>
				{({count})=>
					console.log('CountValue render: ',count) || <div>CountValue: {count}</div>
				}
			</CountContext.Consumer>
		);
	}
}

export default CountValue;