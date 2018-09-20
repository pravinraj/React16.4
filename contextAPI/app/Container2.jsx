import React from 'react';
import CountValue from './CountValue.jsx';

class Container2 extends React.PureComponent{
	render(){
		console.log('Container2 rendered');
		return (
			<div>
				<CountValue/>
			</div>
		);
	}
}

export default Container2;