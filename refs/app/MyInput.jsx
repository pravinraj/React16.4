import React from 'react';


const MyInput = React.forwardRef((props,ref)=>(
	<input ref={ref}{...props}/>
))

export default MyInput;




//export default React.forwardRef((props,ref)=><input ref={ref}{...props}/>);
	
