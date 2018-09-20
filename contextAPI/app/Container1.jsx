import React from 'react';
import CountButton from './CountButton.jsx';

class Container1 extends React.PureComponent{
	render(){
		console.log('Container1 rendered');
		return (
			<div>
				<CountButton/>
			</div>
		);
	}
}

export default Container1;