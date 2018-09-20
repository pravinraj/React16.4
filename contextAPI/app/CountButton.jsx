import React from 'react';
import {CountContext} from './CountContext.jsx';

const CountButton=()=>{
	return (
		<CountContext.Consumer>
			{({increment}) => <button onClick={increment}>increment</button>}
		</CountContext.Consumer>
	);
}

export default CountButton;